import { ReactNode, createContext, useState } from "react";

import UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../service/Service";


interface AuthContextProps {
    usuariolog: UsuarioLogin
    handleLogout(): void
    handleLogin(usuariolog: UsuarioLogin): Promise<void>
    isLoading: boolean
}


interface AuthProvidersProps {
    children: ReactNode
}


export const AuthContext = createContext({} as AuthContextProps)


export function AuthProvider({ children }: AuthProvidersProps) {


    const [usuariolog, setUsuario] = useState<UsuarioLogin>({
        id: undefined,
        nome: '',
        usuario: '',
        senha: '',
        foto:'',
        token: ''
    })


    const [isLoading, setIsLoading] = useState(false)


    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)


        try {
            await login(`/usuario/logar`, usuarioLogin, setUsuario)
            alert("Usuário foi autenticado com sucesso!")
           
        } catch (error) {
            alert("Os dados do Usuário estão inconsistentes!")
        }


        setIsLoading(false)
       
    }


    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto:'',
            token: ''
        })
    }


    return(
        <AuthContext.Provider value={{ usuariolog, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}
