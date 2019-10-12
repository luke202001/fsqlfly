# -*- coding: utf-8 -*-
from django.core.management.base import BaseCommand
from dbs.models import Resource, Namespace
import yaml
from typing import List, Dict, Optional
from sqlalchemy import create_engine, inspect
from sqlalchemy.dialects.mysql.types import (_StringType, _FloatType, _IntegerType, DECIMAL, DATETIME, TIMESTAMP, BIT,
                                             BIGINT)

from sqlalchemy.sql.sqltypes import DATE, _Binary


class Category:
    MYSQL = 'mysql'
    KAFKA = 'kafka'
    ES = 'es'


DEFAULT_FORMAT = {"property-version": 1, "type": "json", "derive-schema": True}


class Command(BaseCommand):
    help = 'Load Resource From MySQL'

    def add_arguments(self, parser):
        parser.add_argument('--host', action='store', help='mysql host')
        parser.add_argument('--database', action='store', help='mysql database')
        parser.add_argument('--namespace', action='store', help='basic namespace')
        parser.add_argument('--category', action='store', help='from system', default="mysql",
                            choices=['mysql', 'es', 'kafka'])
        parser.add_argument('--tables', action='store', help='mysql tables', default="*")
        parser.add_argument('--kafka-bootstrap', action='store', help='kafka bootstrap servers',
                            default="localhost:9092", dest='kafka')
        parser.add_argument('--es-hosts', action='store', help='elastic search host port,sepe by ,',
                            default="http://localhost:9200", dest='es')
        parser.add_argument('--port', action='store', help='mysql port', default=3306, type=int)
        parser.add_argument('--password', action='store', help='mysql password, if not set must input when running',
                            default=None)
        parser.add_argument('--username', action='store', help='mysql username', default='root')

    def _init_global_args(self, options: dict):
        self.NAMESPACE = options['namespace']
        es_hosts = []
        for url in options['es'].split(','):
            protocol, h_p = url.split('//')
            host, port = h_p.split(':')
            es_hosts.append(dict(hostname=host, port=int(port), protocol=protocol))

        if len(es_hosts) < 1:
            self.style.WARNING("es host not good %s" % options['es-hosts'])

        self.ES_HOSTS = es_hosts
        self.JDBC_USER = options['username']
        self.JDBC_PASSWORD = options['password']

        host, port, database = options['host'], options['port'], options['database']
        self.JDBC_URL = f"jdbc:mysql://{host}:{port}/{database}?useSSL=false"

        self.KAFKA_BOOTSTRAP_SERVERS = options['kafka']

    def _gen_kafka_connector(self, topic_name: str, typ: str, category: str) -> dict:
        return {
            "type": "kafka",
            "property-version": 1,
            "version": "universal",
            "topic": topic_name,
            "properties": [
                {
                    "key": "bootstrap.servers",
                    "value": self.KAFKA_BOOTSTRAP_SERVERS,
                },
                {
                    "key": "group.id",
                    "value": f"{topic_name}_{typ}_{category}",
                }
            ]
        }

    def _gen_mysql_connector(self, table_name: str) -> dict:
        return {
            "type": "jdbc",
            "url": self.JDBC_URL,
            "table": table_name,
            "driver": "com.mysql.jdbc.Driver",
            "username": self.JDBC_USER,
            "password": self.JDBC_PASSWORD,

        }

    def _gen_es_connector(self, index: str) -> dict:
        return {
            "type": "elasticsearch",
            "version": "6",
            "hosts": self.ES_HOSTS,
            "index": index,
            "document-type": "data",
        }

    @classmethod
    def _gen_name(cls, name: str, typ: str) -> str:
        return name + '_' + typ.split('-')[0]

    def _build_yml(self, name: str, typ: str, category: str, columns: List[dict]) -> str:
        data = dict()
        fields = []
        for col in columns:

            # print(col['type'], type(col['type']))
            _t = col['type']
            _n = col['name']
            _c = col['comment']
            t_name = None
            # print(str(_t))

            if isinstance(_t, _StringType) or isinstance(_t, _Binary):
                t_name = "STRING"
            elif isinstance(_t, BIT):
                t_name = "TINYINT"
            elif isinstance(_t, _IntegerType):
                t_name = "INT"
                if isinstance(_t, BIGINT):
                    t_name = "BIGINT"
            elif isinstance(_t, _FloatType):
                t_name = "DOUBLE"
            elif isinstance(_t, DECIMAL):
                t_name = "DECIMAL"
            elif isinstance(_t, DATETIME):
                t_name = "TIMESTAMP"
            elif isinstance(_t, TIMESTAMP):
                t_name = "TIMESTAMP"
            elif isinstance(_t, DATE):
                t_name = "DATE"

            assert t_name is not None
            # fields.append(dict(name=_n, type=t_name))
            fields.append(dict(name=_n, type=t_name))

        if category == Category.MYSQL:
            data['connector'] = self._gen_mysql_connector(name)
        elif category == Category.KAFKA:
            fields.append(dict(name="_EVENT_TYPE", type="VARCHAR"))
            data['connector'] = self._gen_kafka_connector(f"{self.NAMESPACE}_{name}", typ, category)
            data['update-mode'] = 'append'
            data['format'] = DEFAULT_FORMAT
        elif category == Category.ES:
            data['connector'] = self._gen_es_connector(f"{self.NAMESPACE}_{name}")
            data['format'] = DEFAULT_FORMAT
            data['update-mode'] = 'append'
        else:
            raise Exception("Not Support category")
        data['schema'] = fields
        data['type'] = typ
        data['name'] = self._gen_name(name, typ)

        rlt = yaml.dump(data)
        return rlt

    def create_resource_data(self, name: str, typ: str, category: str, columns: List[dict],
                             table_comment: Optional[str]) -> dict:
        print('create ', name, ' :', typ, '--', category, '@@', table_comment)
        obj = dict()
        obj['yaml'] = self._build_yml(name, typ, category, columns)
        obj['name'] = self._gen_name(name, typ)
        obj['info'] = table_comment
        obj['typ'] = typ
        return obj

    def create_resource(self, n: str, typ: str, category: str, resource: dict, columns: List[dict],
                        table_comment: Optional[str],
                        namespace_id: int):
        data = self.create_resource_data(n, typ, category, columns, table_comment)
        name = data['name']
        print('name is ', name, end='')
        data['namespace_id'] = namespace_id
        data['is_publish'] = True
        data['is_available'] = False
        if name not in resource:
            res = Resource.objects.create(**data)
            print(' create a resource', res.id, res.name)
        else:
            resource = Resource.objects.get(resource[name])
            for k, v in data.items():
                setattr(resource, k, v)
            resource.save()
            print('update a resource ', resource.id, resource.name)

    def handle(self, *args, **options):
        if options['password'] is None:
            self.stdout.write(self.style.WARNING("you not set mysql password please input in command line!!!"))
            password = input("Your MySQL Password:")
            options['password'] = password
        else:
            password = options['password']

        self._init_global_args(options)

        category = options['category']
        full_namespace = self.NAMESPACE + '_' + category

        namespace = Namespace.objects.filter(name=full_namespace).first()

        if namespace is None:
            namespace = Namespace.objects.create(name=full_namespace, info="auto generate by script")
        username, host, port, database = options['username'], options['host'], options['port'], options['database']
        db_url = f"mysql+mysqldb://{username}:{password}@{host}:{port}/{database}?charset=utf8"
        namespace_id = namespace.id

        engine = create_engine(db_url)
        insp = inspect(engine)
        tables_str = options['tables']
        table_names = set(insp.get_table_names())
        if tables_str == '*':
            need_tables = set(table_names)
        else:
            need_tables = set(tables_str.strip().split(','))

        resources = {x.name: x.id for x in Resource.objects.filter(namespace=namespace).all()}
        for n in table_names:
            if n not in need_tables:
                continue
            t_comment = insp.get_table_comment(n)['text']
            cs = insp.get_columns(n)
            self.create_resource(n, 'sink-table', category, resources, cs, t_comment, namespace_id)
            if category != Category.ES:
                self.create_resource(n, 'source-table', category, resources, cs, t_comment, namespace_id)
        table_nums = len(need_tables)
        self.stdout.write(self.style.SUCCESS(f'Successfully load {table_nums} table from {database}: {tables_str}'))