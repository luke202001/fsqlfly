# -*- coding:utf-8 -*-
import os
import logging
import tornado.ioloop
import tornado.web
import tornado.log
from tornado.options import parse_command_line, options
from terminado.management import NamedTermManager
from logzero import logger
from fsqlfly import settings
from fsqlfly import handles


class IndexHandler(tornado.web.RequestHandler):
    def get(self, *args, **kwargs):
        self.set_header('content-type', 'text/html')
        self.write(settings.INDEX_HTML)


def run_web():
    application = tornado.web.Application(
        handles.all_handles + [
            (r"/static/(.*)", tornado.web.StaticFileHandler,
             {"path": settings.FSQLFLY_STATIC_ROOT}),
            (r"/(.*)", IndexHandler),
        ],
        cookie_secret=settings.FSQLFLY_COOKIE_SECRET,
        login_url='/login',
        debug=settings.FSQLFLY_DEBUG,
        autoreload=settings.FSQLFLY_DEBUG,
        terminal_manager=settings.TERMINAL_MANAGER,
    )
    logger.info("start running on http://localhost:{} ... ".format(settings.FSQLFLY_WEB_PORT))
    application.listen(settings.FSQLFLY_WEB_PORT)
    # tornado.options.options.logging = 'error'
    tornado.options.options.logging = None
    tornado.options.options.log_to_stderr = False
    # parse_command_line()


    tornado.ioloop.IOLoop.current().start()


if __name__ == "__main__":
    run_web()
