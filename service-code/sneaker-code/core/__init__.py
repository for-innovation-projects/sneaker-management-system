#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time : 2023/1/28 18:35
# @Author : zxiaosi
import os

from dotenv import load_dotenv

from core.config import Settings

if os.path.exists(os.path.join(os.path.dirname(os.path.dirname(__file__)), "conf/.env")):
    load_dotenv(os.path.join(os.path.dirname(os.path.dirname(__file__)), "conf/.env"))

settings = Settings()
