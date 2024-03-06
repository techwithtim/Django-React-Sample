#! /bin/bash

sleep 10
python3 manage.py makemigrations
python3 manage.py migrate