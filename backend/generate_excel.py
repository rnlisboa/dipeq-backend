dados = {
    "2021-05-18": {
        "valor": 351516.93,
        "compania": "Minha Empresa"
    },
    "2022-07-17": {
        "valor": 334408.22,
        "compania": "Minha Empresa"
    },
    "2022-01-01": {
        "valor": 705911.26,
        "compania": "Minha Empresa"
    },
    "2021-08-10": {
        "valor": 800131.85,
        "compania": "Minha Empresa"
    },
    "2021-08-18": {
        "valor": 592300.39,
        "compania": "Minha Empresa"
    },
    "2022-05-08": {
        "valor": 465725.27,
        "compania": "Minha Empresa"
    },
    "2021-09-27": {
        "valor": 104964.61,
        "compania": "Minha Empresa"
    },
    "2022-08-23": {
        "valor": 985036.76,
        "compania": "Minha Empresa"
    },
}

dados_filtrados = {chave: valor for chave, valor in dados.items() if chave.startswith("2022")}

print(dados_filtrados)
