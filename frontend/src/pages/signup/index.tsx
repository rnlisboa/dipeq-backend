import { FormEvent, useContext, useState } from "react";
import Head from "next/head";
import Image from "next/image"
//import logoImg from "../../../public/logo.svg";
import styles from "@/styles/Home.module.scss"
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/authContext";
import Link from "next/link"
import { toast } from "react-toastify";

export default function Home() {
  const { signUp } = useContext(AuthContext)
  const [first_name, setFirstname] = useState('')
  const [last_name, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSignUp(event: FormEvent){
    event.preventDefault();

    if(email === '' || password ==='' || username === '' || last_name === '' || first_name === ''){
      toast.warning("Preencha todos os dados")
      return;
    }

    setLoading(true)
    await signUp({
      first_name,
      last_name,
      username, 
      email, 
      password
    })

    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro!</title>
      </Head>
      <div className={styles.containerCenter}>
        {/* <Image src={logoImg} alt="Logo sujeito pizzaria" /> */}

        <div className={styles.login}>
            <h1>Criando sua conta</h1>
          <form onSubmit={handleSignUp}>
            <Input
              placeholder="Digite seu primeiro nome"
              type="text"
              value={first_name}
              onChange={e => setFirstname(e.target.value)}
            />
            <Input
              placeholder="Digite seu último nome"
              type="text"
              value={last_name}
              onChange={e => setLastname(e.target.value)}
            />
            <Input
              placeholder="Digite seu primeiro nome de usuário"
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              loading={loading}
            >
              Cadastrar
            </Button>
          </form>
          <Link href="/" legacyBehavior>
            <a className={styles.text}>já possui uma conta? Faça login!</a>
          </Link>
        </div>
      </div>
    </>
  )
}
