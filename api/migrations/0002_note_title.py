# Generated by Django 4.1.4 on 2023-02-21 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="note",
            name="title",
            field=models.TextField(blank=True, null=True),
        ),
    ]
