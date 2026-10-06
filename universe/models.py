"""La autenticación utiliza el modelo User de django.contrib.auth.

Sus migraciones crean auth_user (usuario, correo, hash de contraseña,
permisos y fechas) y django_session guarda las sesiones. No se duplica
el modelo ni se cambia AUTH_USER_MODEL en una base ya migrada.
Para acceder a los usuarios, usar django.contrib.auth.get_user_model().
"""
