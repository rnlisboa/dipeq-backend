# Generated by Django 4.2.5 on 2023-09-15 02:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_rename_cpnj_companymodel_cnpj'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PartnerModel',
        ),
    ]
