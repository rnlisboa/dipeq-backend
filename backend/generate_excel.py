import openpyxl
from datetime import datetime, timedelta
import random

# Solicite ao usuário o intervalo de valores e datas
valor_inicial = float(input("Informe o valor inicial: "))
valor_final = float(input("Informe o valor final: "))
data_inicial_str = input("Informe a data inicial (formato dd/mm/yyyy): ")
data_final_str = input("Informe a data final (formato dd/mm/yyyy): ")

# Converta as datas de string para objetos de data
data_inicial = datetime.strptime(data_inicial_str, "%d/%m/%Y")
data_final = datetime.strptime(data_final_str, "%d/%m/%Y")

# Crie um novo arquivo XLSX
workbook = openpyxl.Workbook()
sheet = workbook.active

# Defina os cabeçalhos
sheet["A1"] = "Valor"
sheet["B1"] = "Data"

# Preencha os valores e datas no intervalo especificado
linha = 2
while data_inicial <= data_final:
    sheet[f"A{linha}"] = random.uniform(valor_inicial, valor_final)
    sheet[f"B{linha}"] = data_inicial.strftime("%d/%m/%Y")
    
    data_inicial += timedelta(days=1)
    linha += 1

# Salve o arquivo XLSX
workbook.save("dados3.xlsx")

print("Arquivo XLSX criado com sucesso.")
