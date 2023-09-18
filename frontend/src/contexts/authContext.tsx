import { createContext, ReactNode, useEffect, useState } from "react"
import { destroyCookie, setCookie, parseCookies } from "nookies"
import jwt from 'jsonwebtoken';
import { toast } from "react-toastify"
import { api } from "@/services/apiClient"
import Router from "next/router"
type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: ()=> void;
    signUp: (credentials: SignUpProps) => Promise<void>
}

type UserProps = {
    user_id: number;
    username: string;
    email: string
}

type SignInProps = {
    username: string;
    password: string;
}

type SignUpProps = {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    password: string;
}

type AuthtProviderProps = {
    children: ReactNode;
}


export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
    try{
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    } catch(e){
        console.log(e)
    }
}


export function AuthProvider({ children}: AuthtProviderProps){
    const [user, setUser] = useState<UserProps>()
    
    // se houver algo em user, converta user para TRUE
    const isAuthenticated = !!user;

    useEffect(()=>{
        // tentar pegar algo do cookie
        const { "@nextauth.token": token } = parseCookies()
        function decodeJWT(token) {
            try {
              const decodedToken = jwt.decode(token);
              return decodedToken;
            } catch (error) {
              // Trate os erros de decodificação aqui, se necessário.
              console.error('Erro ao decodificar o token JWT:', error);
              return null;
            }
          }
        if(token){
            const decodeedToken = decodeJWT(token);
            api.get("/user/me/", {
                params:
                {
                    user_id: decodeedToken.user_id
                }
            }
            ).then(response =>{
                const { user_id, username, email } = response.data
                setUser({
                    user_id,
                    username,
                    email
                })
            
            }).catch(()=>{
                // se der erro, desloga
                signOut()
            })
        }
    },[])


    async function signIn({username, password}: SignInProps){
        try{
            const response = await api.post('/token/', {
                username,
                password
            })
            const { access } = response.data
            setCookie(undefined, '@nextauth.token', access, {
                maxAge: 60*60*24*30,
                path: '/'
            })
            setUser(access);
            //passar para proximas requisições o nosso token
            api.defaults.headers['Authorization'] = `Bearer ${access}`

            toast.success("logado com sucesso!")

            //redirecionar o usuario para a dashboard
            Router.push("/dashboard")
        } catch(e){
            toast.error("Erro ao acessar.")
            console.log(e)
        }
    }

    async function signUp({first_name, last_name, username, email, password}: SignUpProps){
        try{
            const response = await api.post('/user/create_user/', {
                first_name, 
                last_name, 
                username, 
                email, 
                password
            })
            toast.success(response.data.message)

            Router.push("/")
        } catch(e){
            toast.error("Erro ao criar conta.")
            console.log(e)
        }
    }
    
    
    
    return (
        <AuthContext.Provider value={{user, isAuthenticated, signIn, signOut, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}