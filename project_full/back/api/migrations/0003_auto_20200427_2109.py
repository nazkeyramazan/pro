# Generated by Django 3.0.5 on 2020-04-27 15:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200427_1901'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='image',
            field=models.CharField(max_length=10000),
        ),
        migrations.AlterField(
            model_name='book',
            name='link',
            field=models.CharField(max_length=10000),
        ),
    ]
