import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { api } from '../../service/api';

const DetalhesAnoContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const CabecalhoTabela = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
`;

const CelulaTabela = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const DetalhesAno = () => {
    const { id } = useParams(); // Obtém o parâmetro da rota (ano)
    const [dadoAno, setDadoAno] = useState([])
    const [dadoMes, setDadoMes] = useState([])

    useEffect(() => {
        async function getAno() {
            const d = await api.get(`company/get_invoicing_per_year/?company_id=${id}`)
            setDadoAno(d.data)
        }
        getAno()

        async function getMes() {
            const d = await api.get(`company/get_quarterly_billing/?company_id=${id}`)
            setDadoMes(d.data)
            console.log(d)
        }
        getMes()
    }, [])
    const listaAno = Object.entries(dadoAno);
    const listaMes = Object.entries(dadoMes);
    console.log(listaMes)
    return (
        <DetalhesAnoContainer>
            <h1>Detalhes dos últimos 3 anos</h1>
            <Tabela>
                <thead>
                    <tr>
                        <CabecalhoTabela>Ano</CabecalhoTabela>
                        <CabecalhoTabela>Valor</CabecalhoTabela>
                    </tr>
                </thead>

                <tbody>
                    {
                        listaAno.length > 0 && <tr >
                            <CelulaTabela>{listaAno[1][0].slice(1, 5)}</CelulaTabela>
                            <CelulaTabela>{listaAno[0][1]}</CelulaTabela>
                        </tr>
                    }

                    {
                        listaAno.length > 0 && <tr >
                            <CelulaTabela>{listaAno[2][0].slice(1, 5)}</CelulaTabela>
                            <CelulaTabela>{listaAno[0][1]}</CelulaTabela>
                        </tr>
                    }
                    {
                        listaAno.length > 0 && <tr >
                            <CelulaTabela>{listaAno[3][0].slice(1, 5)}</CelulaTabela>
                            <CelulaTabela>{listaAno[0][1]}</CelulaTabela>
                        </tr>
                    }
                </tbody>


            </Tabela>

            <h1>Detalhes do último trimestre do útimo ano</h1>
            <Tabela>
                <thead>
                    <tr>
                        <CabecalhoTabela>Ano</CabecalhoTabela>
                        <CabecalhoTabela>Valor</CabecalhoTabela>
                    </tr>
                </thead>

                <tbody>

                {
                        listaMes.length > 0 && <tr >
                            <CelulaTabela>{listaMes[1][0]}</CelulaTabela>
                            <CelulaTabela>R$ {listaMes[1][1].value}</CelulaTabela>
                        </tr>
                    }

                    {
                        listaMes.length > 0 && <tr >
                            <CelulaTabela>{listaMes[2][0]}</CelulaTabela>
                            <CelulaTabela>R$ {listaMes[2][1].value}</CelulaTabela>
                        </tr>
                    }
                    {
                        listaMes.length > 0 && <tr >
                            <CelulaTabela>{listaMes[3][0]}</CelulaTabela>
                            <CelulaTabela>R$ {listaMes[3][1].value}</CelulaTabela>
                        </tr>
                    }

                </tbody>


            </Tabela>
        </DetalhesAnoContainer>
    );
};

export default DetalhesAno;
