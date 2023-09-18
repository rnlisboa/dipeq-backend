import axios, {AxiosError} from "axios";
import { parseCookies } from "nookies";
import {AuthTokenError} from "./errors/authTokenError"
import { signOut } from "@/contexts/authContext";

export function setupAPIClient(context = undefined){
    let cookies = parseCookies(context);

    const api = axios.create({
        baseURL: 'http://127.0.0.1:8000/api/',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    })

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError)=>{
        
        if(error.response.status === 401){

            // QUALQUER ERRO 401 DESLIGA O USUARIO
            if(typeof window !== undefined){
                signOut();
            } else {
                return Promise.reject( new AuthTokenError())
            }
        }

        return Promise.reject(error)
    })

    return api;
}