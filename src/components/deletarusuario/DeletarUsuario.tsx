import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { RotatingLines } from "react-loader-spinner"
import { buscar, deletar } from "../../service/Service"

import { AuthContext } from "../../context/AuthContext";
import Usuario from "../../models/Usuario";



function DeletarUsuario() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

    const { id } = useParams<{ id: string }>()

    const { usuariolog, handleLogout } = useContext(AuthContext)
    const token = usuariolog.token


    async function buscarPorId(id: string) {
        try {
            await buscar(`/usuario/${id}`, setUsuario, {
                headers: {
                    'Authorization': token
                }
            })
           
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }


    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])


    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])


    async function deletarUsuario() {
        setIsLoading(true)


        try {
            await deletar(`/usuario/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Usuario apagada com sucesso')


        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            } else {
                alert('Erro ao deletar usuario')
               
            }
        }


        setIsLoading(false)
        retornar()
    }


    function retornar() {
        navigate("/home")
    }


    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Usuario</h1>


            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a usuario a seguir?
            </p>


            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Usuario
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{usuario.nome}</p>
                </div>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-red-400
                        hover:bg-red-600 flex items-center justify-center'
                        onClick={deletarUsuario}>
                       
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}


export default DeletarUsuario