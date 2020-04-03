# -*- coding:utf-8 -*-
import sys
import os
import setuptools
from shutil import rmtree
from setuptools import Command, setup, find_packages

with open("readme-en.md", "r") as fh:
    long_description = fh.read()

VERSION = "3.0.1"
REQUIRED = [x for x in open("requirement.txt", "r").read().split('\n') if x]

here = os.path.abspath(os.path.dirname(__file__))


class UploadCommand(Command):
    """Support setup.py upload."""

    description = 'Build and publish the package.'
    user_options = []

    @staticmethod
    def status(s):
        """Prints things in bold."""
        print('\033[1m{0}\033[0m'.format(s))

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def run(self):
        try:
            self.status('Removing previous builds…')
            rmtree(os.path.join(here, 'dist'))
        except OSError:
            pass

        self.status('Building Source and Wheel (universal) distribution…')
        os.system('{0} setup.py sdist bdist_wheel --universal'.format(sys.executable))

        self.status('Uploading the package to PyPi via Twine…')
        os.system('twine upload dist/*')

        self.status('Publishing git tags…')
        os.system('git tag v{0}'.format(VERSION))
        os.system('git push --tags')

        sys.exit()


canal_require = ['canal-python <= 0.4', 'kafka-python >= 1.3.4, <= 1.4.7', 'protobuf <= 3.11.3', 'sqlalchemy <= 1.3.15']
postgresql_require = ['psycopg2 <= 2.8.4']
mysql_require = ['PyMySQL <= 0.9.3']
setup(
    name="fsqlfly",
    version=VERSION,
    author="mrzhangboss",
    author_email="2529450174@qq.com",
    description="Flink SQL Job Management Website",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/mrzhangboss/fsqlfly",
    packages=find_packages(),
    # packages=['fsqlfly'],
    # package_data={'static': ['*']},
    include_package_data=True,
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    extras_require={
        'test': ['TorMySQL'],
        'mysql': mysql_require,
        'postgresql': postgresql_require,
        'canal': canal_require,
        'all': mysql_require + postgresql_require + canal_require
    },
    python_requires=">=3.6.0",
    install_requires=REQUIRED,
    cmdclass={
        'upload': UploadCommand,
    },
    entry_points={
        'console_scripts': ['fsqlfly = fsqlfly.main:main'],
    }
)
