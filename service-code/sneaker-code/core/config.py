#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time : 2023/1/28 17:43
# @Author : zxiaosi
# @desc : 配置文件
import os
from enum import Enum
from pathlib import Path

from pydantic import BaseSettings, AnyHttpUrl

IS_DEV = True  # 是否开发环境

current_path = Path().absolute().parent  # 当前路径


# https://docs.pydantic.dev/usage/settings/
class Settings(BaseSettings):
    PROJECT_DESC: str = "Sneaker小程序、PC端"  # 描述
    PROJECT_VERSION: int | str = 1.0  # 版本
    API_PREFIX: str = "/api"  # 接口前缀

    STATIC_DIR: str = "static"  # 静态文件目录
    BASE_URL: AnyHttpUrl = "http://127.0.0.1:8000"  # 开发环境(为了存放图片全路径)
    CORS_ORIGINS: list[AnyHttpUrl] = ["http://127.0.0.1:5173"]  # 跨域请求(务必指定精确ip, 不要用localhost)

    MD5_SALT: str = "9iJvchvS"  # md5 加密盐
    COOKIE_KEY: str = "sessionId"  # Cookie key name
    COOKIE_MAX_AGE: int = 24 * 60 * 60  # Cookie 有效时间
    COOKIE_NOT_CHECK: list[str] = ["/api/user/login", "/api/user/signup"]  # 不校验 Cookie

    REDIS_URI: str = "redis://:123456@localhost:6379/0"  # Redis
    REDIS_EXPIRE: int = 24 * 60 * 60  # Redis 过期时长
    REDIS_GLOBAL_PREFIX: str = "redis-om"  # Redis 全局前缀
    DATABASE_URI: str = "mysql://root:123456@localhost:3306/demo?charset=utf8"  # MySQL
    DATABASE_ECHO: bool = False  # 是否打印数据库日志 (可看到创建表、表数据增删改查的信息)

    LOGGER_DIR: str = "logs"  # 日志文件夹名
    LOGGER_NAME: str = '{time:YYYY-MM-DD_HH-mm-ss}.log'  # 日志文件名 (时间格式)
    LOGGER_LEVEL: str = 'DEBUG'  # 日志等级: ['DEBUG' | 'INFO']
    LOGGER_ROTATION: str = "00:00"  # 日志分片: 按 时间段/文件大小 切分日志. 例如 ["500 MB" | "12:00" | "1 week"]
    LOGGER_RETENTION: str = "30 days"  # 日志保留的时间: 超出将删除最早的日志. 例如 ["1 days"]

    # PG
    # Database
    DB_USERNAME: str = 'shaoqingyang'
    DB_PASSWORD: str = '123456'
    DB_HOST: str = "localhost"
    DB_PORT: int = 5432
    DB_DATABASE: str = "sneaker"
    DB_POOL_SIZE: int = 5
    DB_MAX_OVERFLOW: int = 10
    DB_POOL_RECYCLE: int = 3600
    DB_POOL_PRE_PING: bool = True

    class Config:
        case_sensitive = True  # 区分大小写

    @property
    def DB_CONNECTION_STR(self):
        return f"postgresql+psycopg2://{self.DB_USERNAME}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_DATABASE}"



class DevelopmentConfig(Settings):
    pass


class ProductionConfig(Settings):
    BASE_URL: AnyHttpUrl = "http://114.115.143.81:8000"  # 生产环境(为了存放图片全路径)
    CORS_ORIGINS: list[AnyHttpUrl] = ["http://114.115.143.81"]  # 跨域请求

    REDIS_URI: str = "redis://:123456@redis:6379/0"  # Redis
    DATABASE_URI: str = "mysql://root:123456@mysql:3306/demo?charset=utf8"  # MySQL
    DATABASE_ECHO: bool = True  # 是否打印数据库日志 (可看到创建表、表数据增删改查的信息)

    LOGGER_LEVEL: str = 'INFO'  # 日志等级: ['DEBUG' | 'INFO']


settings = DevelopmentConfig() if IS_DEV else ProductionConfig()


class FileDirEnum(Enum):
    """ 文件类型枚举 """
    AVATAR = os.path.join(settings.STATIC_DIR, "avatar")  # 头像文件目录
    ICON = os.path.join(settings.STATIC_DIR, "icon")  # Icon文件目录
