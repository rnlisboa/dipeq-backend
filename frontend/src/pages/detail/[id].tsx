import { useEffect, useState } from "react";
import styles from "./styles.module.scss"
import { Header } from "@/components/Header";
import Head from "next/head";
import { setupAPIClient } from "../../services/api"
import { toast } from "react-toastify";
import  canSSRAuth  from "../utils/canSSRAuth"
import { useRouter } from "next/router";
import BarChart from "@/components/chart";

interface Empresa {
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
}

export default function Category() {
    const [company, setCompany] = useState<Empresa | null>(null);
    const [invoicing, setInvoicing] = useState([]);
    const [anoSelecionado, setAnoSelecionado] = useState<number>(2023);

    const router = useRouter()
    const { id } = router.query;


    useEffect(() => {
        const apiClient = setupAPIClient();
        async function getData() {
            try {
                const response = await apiClient.get("/company/get_invoicing_per_year/", {
                    params: {
                        company_id: id,
                        ano: anoSelecionado
                    }
                })
                setInvoicing(response.data)
            } catch (e) {
                toast.error("Erro ao buscar faturamento.")
            }

            try {
                const response = await apiClient.get("/company/get_company/", {
                    params: {
                        company_id: id
                    }
                })
                console.log(response.data)
                setCompany(response.data);
            } catch (e) {
                toast.error("Erro ao buscar dados de empresa.")
            }

        }

        getData();
    }, [anoSelecionado, id])

    return (
        <>
            <Head>
                <title>Detalhes | empresa - DIPEQ</title>
            </Head>

            <div>
                <Header />

                <main className={styles.container}>
                    <h1>
                        Detalhes da empresa
                    </h1>

                    {
                        company && <div className={styles.companyDetails}>
                            <div className={styles.detail}>
                                <h2>Área de Atuação</h2>
                                <p>{company.area_de_atuacao}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Capital Social</h2>
                                <p>R$ {company.capital_social.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>CNPJ</h2>
                                <p>{company.cnpj}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Email</h2>
                                <p>{company.email}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Facebook</h2>
                                <p>{company.facebook}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Instagram</h2>
                                <p>{company.instagram}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>LinkedIn</h2>
                                <p>{company.linkedin}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Número de Estagiários</h2>
                                <p>{company.n_estagiario}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Número de Funcionários CLT</h2>
                                <p>{company.n_func_clt}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Número de Funcionários Terceirizados</h2>
                                <p>{company.n_func_terc}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Número de Sócios</h2>
                                <p>{company.n_socios}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Nome dos Sócios</h2>
                                <p>{company.nome_socios}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Website</h2>
                                <p>{company.website}</p>
                            </div>

                            <div className={styles.detail}>
                                <h2>Twitter</h2>
                                <p>{company.twitter}</p>
                            </div>
                        </div>
                    }

                    <div className={styles.selectContainer}>
                        {invoicing.length > 0 && <select
                            className={styles.selectAno}
                            value={anoSelecionado}
                            onChange={(e) => setAnoSelecionado(Number(e.target.value))}
                        >
                            {[2023, 2022, 2021].map((ano) => (
                                <option key={ano} value={ano} >
                                    {ano}
                                </option>
                            ))}
                        </select>}
                    </div>
                    {
                        invoicing.length > 0 && <BarChart valores={invoicing} />
                    }


                </main>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async context => {
    return {
        props: {}
    }
})