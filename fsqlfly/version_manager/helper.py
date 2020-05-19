from typing import Union, List

from fsqlfly.common import PageModel, DBRes, SchemaContent, NameFilter
from fsqlfly.db_helper import SUPPORT_MODELS, DBDao, Connection
from fsqlfly.version_manager.factory import ManagerFactory
from fsqlfly.version_manager.dao import Dao


class ManagerHelper:
    all_support_key = PageModel.keys()

    @classmethod
    def run(cls, model: str, mode: str, pk: Union[str, int]) -> DBRes:
        dao = Dao()
        obj = dao.get_by_name_or_id(model, pk)
        if obj:
            manager = ManagerFactory.get_manager(model, mode, obj, dao)
            if manager.is_support():
                return manager.run()
            else:
                return DBRes.api_error("Not support {} in model {} by {}".format(pk, model, mode))
        else:
            return DBRes.api_error("Not found {} in model {}".format(pk, model))


class SynchronizationHelper:
    @classmethod
    def synchronize(cls, connection: Connection, name_filter: NameFilter) -> List[SchemaContent]:
        pass