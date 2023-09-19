import React from "react"
type ValorAnoProps = {
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode
    ano: string,
    valor: number

}

type ValorMesProps = {
    map(arg0: (item: any) => JSX.Element): import("react").ReactNode
    mes: string,
    valor: number

}

type Empresa = {
    id: number;
    cnpj: string;
    razao_social: string;
    nome_fantasia: string;
    area_de_atuacao: string;
    tempo_atuacao_mercado: number;
    capital_social: number;
    n_func_clt: number;
    n_func_terc: number;
    n_estagiario: number;
    n_socios: number;
    nome_socios: string;
    website: string;
    instagram: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    email: string;
};

type PorAno = {
    id: number,
    date: string,
    value: number
}

export interface FaturamentoPorAno {
    faturamento: PorAno[]
}

export interface DadosFaturamentoProps {
    dadosFaturamento: Array<ValorAnoProps>,
    dadosTrimestre: Array<ValorMesProps>,
    dadosEmpresas: Empresa[],
    dadosFaturamentoAno: PorAno[]
}



