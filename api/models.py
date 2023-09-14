from django.db import models

# Create your models here.



class CompanyModel(models.Model):
    cpnj = models.CharField(max_length=50,)
    razao_social = models.CharField(max_length=100)
    nome_fantasia = models.CharField(max_length=100)
    area_de_atuacao = models.CharField(max_length=50,)
    tempo_atuacao_mercado = models.IntegerField()
    capital_social = models.DecimalField(max_digits=9, decimal_places=2)
    n_func_clt = models.IntegerField()
    n_func_terc = models.IntegerField()
    n_estagiario = models.IntegerField()
    n_socios = models.IntegerField()
    razao_social = models.CharField(max_length=50)
    website = models.CharField(max_length=50,null=True)
    instagram = models.CharField(max_length=50,null=True)
    facebook = models.CharField(max_length=50,null=True)
    twitter = models.CharField(max_length=50,null=True)
    linkedin = models.CharField(max_length=50,null=True)
    email = models.CharField(max_length=50,null=True)

class PartnerModel(models.Model):
    nome = models.CharField(max_length=120)
    empresa = models.ForeignKey(CompanyModel, on_delete=models.SET_NULL, null=True)