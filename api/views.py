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

    @action(detail=False, methods=['post'])
    def create_user(self, *args, **kwargs):
        req = self.request.data

        first_name = req.get('first_name')
        last_name = req.get('last_name')
        username = req.get('username')
        email = req.get('email')
        password = req.get('password')

        if not (username and first_name and last_name and email and password):
            return Response({'detail': 'Preencha todos os campos.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(data=req)
        if serializer.is_valid():
            try:
                user = User(
                    username=username,
                    first_name=first_name,
                    email=email,
                    last_name=last_name,
                    is_active=True,
                    is_superuser=False
                )
                user.set_password(password)
                user.save()
                return Response({'message': 'Usuário cadastrado!'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'errors': serializer.errors, 'message': 'Houveram erros de validação'}, status=status.HTTP_400_BAD_REQUEST)

class CompanyViewSet(viewsets.ModelViewSet):
    queryset = CompanyModel.objects.all()
    serializer_class = CompanySerializer

    @action(metho)