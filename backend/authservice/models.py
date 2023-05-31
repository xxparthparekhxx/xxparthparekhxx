from django.db import models

class AuthProject(models.Model):
    id = models.BigIntegerField(auto_created=1,primary_key=1)
    name = models.CharField(max_length=50)
    def __str__(self) -> str:
        return self.name

class AuthUser(models.Model):
    project = models.ManyToOneRel(AuthProject,to=AuthProject.id,field_name="project")
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=200)