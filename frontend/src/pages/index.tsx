import { FormEvent, useContext, useState } from "react";
import Head from "next/head";
//import Image from "next/image"
//import { GetServerSideProps } from "next";
//import logoImg from "../../public/logo.svg";
import styles from "../styles/Home.module.scss"
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import Link from "next/link"
import {AuthContext} from "../contexts/authContext"
import { toast } from "react-toastify";
import  canSSRGuest  from "./utils/canSSRGuest";
export default function Home() {
  const { signIn } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(event: FormEvent){
    event.preventDefault()
    if(username === '' || password ===''){
      toast.warning("Preencha todos os dados")
      return;
    }

    setLoading(true);
    await signIn({
      username,
      password
    })

    setLoading(false)
  }
  return (
    <>
      <Head>
        <title>Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        
        <div className={styles.login}>
        <h1>Faça seu login</h1>
          <form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu usuario"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Acessar
            </Button>
          </form>
          <Link href="/signup" legacyBehavior>
            <a className={styles.text}>Não possui uma conta? Cadastre-se</a>
          </Link>
        </div>
      </div>
    </>
  )
}


export const getServerSideProps = canSSRGuest(async ()=> {
  return {
    props: {}
  }
})