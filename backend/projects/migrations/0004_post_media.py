# Generated by Django 4.1.7 on 2023-03-04 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_projectmedia_description_for_alt'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='Media',
            field=models.ManyToManyField(to='projects.projectmedia', verbose_name='PostMedia'),
        ),
    ]
