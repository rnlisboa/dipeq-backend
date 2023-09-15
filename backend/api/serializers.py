from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email')


class CompanySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CompanyModel
        fields = '__all__'

class PartnerSerializer(serializers.ModelSerializer):
    company = CompanySerializer
    class Meta:
        model = PartnerModel
        fields = '__all__'