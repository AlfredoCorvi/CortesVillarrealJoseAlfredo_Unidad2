#!/usr/bin/env bash
set -o errexit

python manage.py migrate --noinput
exec gunicorn cosmoz.wsgi:application --bind "0.0.0.0:${PORT:-10000}"
