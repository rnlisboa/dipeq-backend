from django.contrib import admin
from .models import *
# Register your models here.

class CAdmin(admin.ModelAdmin):
    list_display = ('id','cnpj',)

class Indmin(admin.ModelAdmin):
    list_display = ('id','company','value')

admin.site.register(CompanyModel, CAdmin)
admin.site.register(InvoicingModel, Indmin)

