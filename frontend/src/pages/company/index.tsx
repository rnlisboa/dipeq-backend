import { FormEvent, useContext, useState } from "react";
import styles from "./styles.module.scss"
import { Header } from "@/components/Header";
import Head from "next/head";
import { setupAPIClient } from "../../services/api"
import { toast } from "react-toastify";
import  canSSRAuth  from "../utils/canSSRAuth"

export default function Category() {
    const [cnpj, setCnpj] = useState<string>('');
    const [razao_social, setRazaoSocial] = useState<string>('');
    const [nome_fantasia, setNomeFantasia] = useState<string>('');
    const [area_de_atuacao, setAreaDeAtuacao] = useState<string>('');
    const [tempo_atuacao_mercado, setTempoAtuacaoMercado] = useState<string>('');
    const [capital_social, setCapitalSocial] = useState<string>('');
    const [n_func_clt, setNFuncClt] = useState<string>('');
    const [n_func_terc, setNFuncTerc] = useState<string>('');
    const [n_estagiario, setNEstagiario] = useState<string>('');
    const [n_socios, setNSocios] = useState<string>('');
    const [nome_socios, setNomeSocios] = useState<string>('');
    const [website, setWebsite] = useState<string>('');
    const [instagram, setInstagram] = useState<string>('');
    const [facebook, setFacebook] = useState<string>('');
    const [twitter, setTwitter] = useState<string>('');
    const [linkedin, setLinkedin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState(false)

    async function handleRegister(event: FormEvent) {
        event.preventDefault()

        if (cnpj === '' || nome_fantasia === '' || razao_social === '' || area_de_atuacao === '' || nome_socios === '' || tempo_atuacao_mercado === '' || capital_social === '' || n_func_clt === '' || n_func_terc === '' || n_socios === '' || n_estagiario === '' || email === '') {
            toast.warning("Somente website e redes sociais podem ficar vazios.")
            return;
        }

        const apiClient = setupAPIClient();
        
        try{
            setLoading(true)
            await apiClient.post("/company/create_company/", {
                cnpj,
                nome_fantasia,
                razao_social,
                area_de_atuacao,
                tempo_atuacao_mercado,
                capital_social,
                n_func_clt,
                n_func_terc,
                n_socios,
                n_estagiario,
                nome_socios,
                website,
                instagram,
                facebook,
                twitter,
                linkedin,
                email
            })
            toast.success("Empresa cadastrada com sucesso!");
            setLoading(false)
        } catch(e){
            toast.error("Houveram erros de validação!");
            console.log(e);
        }
        
        
    }
    return (
        <>
            <Head>
                <title>Nova empresa - DIPEQ</title>
            </Head>

            <div>
                <Header />

                <main className={styles.container}>
                    <h1>
                        Cadastrar empresa
                    </h1>

                    <form className={styles.form} onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder="Digite o CNPJ"
                            value={cnpj}
                            onChange={e => setCnpj(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Digite a Razão Social"
                            value={razao_social}
                            onChange={e => setRazaoSocial(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Digite o Nome Fantasia"
                            value={nome_fantasia}
                            onChange={e => setNomeFantasia(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Digite a Área de Atuação"
                            value={area_de_atuacao}
                            onChange={e => setAreaDeAtuacao(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="number"
                            placeholder="Digite o Tempo de Atuação no Mercado (anos)"
                            value={tempo_atuacao_mercado}
                            onChange={e => setTempoAtuacaoMercado(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="number"
                            placeholder="Digite o Capital Social"
                            value={capital_social}
                            onChange={e => setCapitalSocial(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="number"
                            placeholder="Digite o Número de Funcionários CLT"
                            value={n_func_clt}
                            onChange={e => setNFuncClt(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="number"
                            placeholder="Digite o Número de Funcionários Terceirizados"
                            value={n_func_terc}
                            onChange={e => setNFuncTerc(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="number"
                            placeholder="Digite o Número de Estagiários"
                            value={n_estagiario}
                            onChange={e => setNEstagiario(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="number"
                            placeholder="Digite o Número de Sócios"
                            value={n_socios}
                            onChange={e => setNSocios(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Digite o Nome dos Sócios"
                            value={nome_socios}
                            onChange={e => setNomeSocios(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Digite o Website"
                            value={website}
                            onChange={e => setWebsite(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Digite o Instagram"
                            value={instagram}
                            onChange={e => setInstagram(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Digite o Facebook"
                            value={facebook}
                            onChange={e => setFacebook(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Digite o Twitter"
                            value={twitter}
                            onChange={e => setTwitter(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Digite o LinkedIn"
                            value={linkedin}
                            onChange={e => setLinkedin(e.target.value)}
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Digite o Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className={styles.input}
                        />

                        <button
                            disabled={loading}
                            className={styles.buttonAdd}
                            type="submit">
                            Cadastrar
                        </button>
                    </form>
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