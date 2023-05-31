from django.contrib import admin
from .models import AuthProject,AuthUser
# Register your models here.
admin.site.register(AuthProject)
admin.site.register(AuthUser)