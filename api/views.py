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

    @action(methods=['POST'], detail=False)
    def create_company(self, *args, **kwargs):
        req = self.request.data
        cpnj = req.get("cpnj")
        razao_social = req.get("razao_social")
        nome_fantasia = req.get("nome_fantasia")
        area_de_atuacao = req.get("area_de_atuacao")
        tempo_atuacao_mercado = req.get("tempo_atuacao_mercado")
        capital_social = req.get("capital_social")
        n_func_clt = req.get("n_func_clt")
        n_func_terc = req.get("n_func_terc")
        n_estagiario = req.get("n_estagiario")
        n_socios = req.get("n_socios")
        razao_social = req.get("razao_social")
        website = req.get("website")
        instagram = req.get("instagram")
        facebook = req.get("facebook")
        twitter = req.get("twitter")
        linkedin = req.get("linkedin")
        email = req.get("email")

        if not (cpnj or razao_social or nome_fantasia or nome_fantasia or area_de_atuacao or tempo_atuacao_mercado or capital_social or n_func_clt or n_func_terc or n_socios or razao_social):
            return Response({'detail': 'Campos marcados são obrigatórios.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = CompanySerializer(data=req)

        if serializer.is_valid():
            try:
                company = CompanyModel(
                    req = self.request.data
                    cpnj = cpnj
                    razao_social = razao_social
                    nome_fantasia = nome_fantasia
                    area_de_atuacao = area_de_atuacao
                    tempo_atuacao_mercado = tempo_atuacao_mercado
                    capital_social = capital_social
                    n_func_clt = n_func_clt
                    n_func_terc = n_func_terc
                    n_estagiario = n_estagiario
                    n_socios = n_socios
                    razao_social = razao_social
                    website = website
                    instagram = instagram
                    facebook = facebook
                    twitter = twitter
                    linkedin = linkedin
                    email = email
                )
                user.set_password(password)
                user.save()
                return Response({'message': 'Empresa cadastrada!'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'errors': serializer.errors, 'message': 'Houveram erros de validação'}, status=status.HTTP_400_BAD_REQUEST)
    
    @action(methods=['POST'], detail=False)
    def add_partner_to_company(self, *args, **kwargs):
        req = self.request.data 
        parters = req['parters']
        company_id = req['company_id']
        serializer = PartnerSerializer(data=req)
        # if serializer.is_valid():
        #     try:
        #         partner = PartnerModel(
                    
        #         )
        #         user.set_password(password)
        #         user.save()
        #         return Response({'message': 'Sócio cadastrado!'}, status=status.HTTP_201_CREATED)
        #     except Exception as e:
        #         return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'errors': serializer.errors, 'message': 'Houveram erros de validação'}, status=status.HTTP_400_BAD_REQUEST)


    @action(methods=['GET'], detail=False)
    def get_invoicing(self, *args, **kwargs):
        pass

    @action(methods=['GET'], detail=False)
    def get_quarterly_billing(self, *args, **kwargs):
        pass