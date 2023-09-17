from django.db                                  import models
from django.contrib.auth.models                 import User

# Create your models here.



class CompanyModel(models.Model):
    cnpj = models.CharField(max_length=50,)
    razao_social = models.CharField(max_length=100)
    nome_fantasia = models.CharField(max_length=100)
    area_de_atuacao = models.CharField(max_length=50)
    tempo_atuacao_mercado = models.IntegerField()
    capital_social = models.FloatField()
    n_func_clt = models.IntegerField()
    n_func_terc = models.IntegerField()
    n_estagiario = models.IntegerField()
    n_socios = models.IntegerField()
    nome_socios = models.TextField(null=True)
    website = models.CharField(max_length=50,null=True)
    instagram = models.CharField(max_length=50,null=True)
    facebook = models.CharField(max_length=50,null=True)
    twitter = models.CharField(max_length=50,null=True)
    linkedin = models.CharField(max_length=50,null=True)
    email = models.EmailField(max_length=50,null=True)

    def __str__(self):
        return self.nome_fantasia


class InvoicingModel(models.Model):
    company = models.ForeignKey(CompanyModel, on_delete=models.CASCADE)
    date = models.DateTimeField()
    value = models.FloatField()

    
    
