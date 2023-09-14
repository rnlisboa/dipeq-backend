from rest_framework.response                    import Response
from rest_framework.decorators                  import action
from rest_framework                             import status, viewsets
from django.contrib.auth.models                 import User
from django.db.models                           import Q
from .serializers                               import *
from .models                                    import *
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = CompanyModel.objects.all()
    serializer_class = CompanySerializer
