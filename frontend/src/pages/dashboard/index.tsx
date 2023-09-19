import  canSSRAuth  from "../utils/canSSRAuth"
import Head from "next/head"
import styles from "./styles.module.scss"
import { FiRefreshCcw } from "react-icons/fi"
import { Header } from "../../components/Header"
import { setupAPIClient } from "@/services/service"
import { DadosFaturamentoProps } from "./services"
import Link from "next/link"



export default function Dashboard({ dadosFaturamento, dadosTrimestre, dadosEmpresas }: DadosFaturamentoProps) {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const anoAnterior = anoAtual - 1;
    function formatarNumero(numero) {
        const partes = numero.toString().split('.');
        const parteInteira = partes[0];
        const parteDecimal = partes.length > 1 ? partes[1] : '';
        const parteInteiraFormatada = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const numeroFormatado = parteInteiraFormatada + (parteDecimal ? ',' + parteDecimal : '');

        return numeroFormatado;
    }
    const handleReload = () => {
        window.location.reload();
    };
    return (
        <>
            <Head>
                <title>Dashboard - DIPEQ</title>
            </Head>
            <Header />
            <main className={styles.container}>
                <div className={styles.containerHeader}>
                    <h1>Faturamento somado de todas as empresas</h1>
                    <button onClick={handleReload}>
                        <FiRefreshCcw color="#3fffa3" size={25} />
                    </button>
                </div>
                <div className={styles.containerMain}>
                    <h3>
                        FATURAMENTO POR ANO
                    </h3>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>ANO</th>
                                <th>VALOR(R$) DO FATURAMENTO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dadosFaturamento.map((item) => (
                                <tr key={item.ano}>
                                    <td>{item.ano}</td>
                                    <td>{formatarNumero(item.valor.toFixed(2))}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>
                        FATURAMENTO DO ÚLTIMO TRIMESTRE DE {anoAnterior}
                    </h3>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>MÊS</th>
                                <th>VALOR(R$) DO FATURAMENTO</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dadosTrimestre.slice(0, 3).map((item) => (
                                <tr key={item.mes}>
                                    <td>{item.mes}</td>
                                    <td>{formatarNumero(item.valor.toFixed(2))}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3>
                        EMPRESAS CADASTRADAS
                    </h3>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>NOME FANTASIA</th>
                                <th>NUMERO DE FUNCIONÁRIOS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dadosEmpresas.map((item) => (
                                <tr key={item.id}>
                                    <Link href={`/detail/${item.id}`} legacyBehavior>
                                        <td>{item.nome_fantasia}</td>
                                    </Link>
                                    <td>{item.n_estagiario + item.n_func_clt + item.n_func_terc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                

            </main>
        </>

    );
}

export const getServerSideProps = canSSRAuth(async context => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const anoAnterior = anoAtual - 1;
    const apiClient = setupAPIClient(context)
    const faturamento_ano = await apiClient.get("/company/get_sum_invoicing_per_year/")
    const faturamento_trimestre = await apiClient.get("/company/get_quarterly_billing/?ano=" + anoAnterior.toString())
    const empresas = await apiClient.get("/company/")
    return {
        props: {
            dadosFaturamento: faturamento_ano.data,
            dadosTrimestre: faturamento_trimestre.data,
            dadosEmpresas: empresas.data
        }
    }
})