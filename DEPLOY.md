# Render

Ejecutar desde la carpeta que contiene manage.py:

- Build Command: `bash build.sh`
- Start Command: `bash start.sh`
- Variable de entorno SECRET_KEY: un valor aleatorio generado en Render.

Render proporciona RENDER y RENDER_EXTERNAL_HOSTNAME automaticamente.
Django acepta ese dominio y desactiva DEBUG en Render. WhiteNoise sirve
los archivos estaticos recopilados durante el build. El arranque aplica
las migraciones y ejecuta Gunicorn en 0.0.0.0:$PORT.

Sube los cambios al repositorio y vuelve a desplegar el servicio.

La base de datos sigue siendo SQLite. Sin almacenamiento persistente,
los usuarios y otros datos pueden perderse al reiniciar o desplegar.
Para conservarlos en produccion, configura PostgreSQL o un disco persistente.
