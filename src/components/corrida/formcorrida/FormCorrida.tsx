import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cadastrar } from "../../../service/Service";
import { AuthContext } from "../../../context/AuthContext";
import Corrida from "../../../models/Corrida";


function FormCorrida() {


    const navigate = useNavigate()
    

    const { usuariolog } = useContext(AuthContext);
    const token = usuariolog.token;

    const [corrida, setCorrida] = useState<Corrida>({
        id: undefined,
        embarque: '',
        destino: '',
        distanciaKm: 30,
        velocidadeKh: 60,
        valor: 10,
        tempo: 0


    })
    
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);


    function retornar() {
        navigate(`/listarcorrida`)
    }

    function retornarHome() {
        navigate(`/home`)
    }


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCorrida({
            ...corrida,
            [e.target.name]: e.target.value
        })


    }




    async function cadastrarNovaCorrida(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if(corrida.embarque !== '' && corrida.destino !== ''){

            try {
                await cadastrar('/corrida', corrida, setCorrida, {
                    headers: { Authorization: token }
                })
                alert('Corrida solicitada com sucesso!')
            } catch (error) {
                alert('Erro ao solicitar o corrida!')
            }
    
           
        }else{
            alert('OBS: Embarque e Destino Obrigatórios!')
        }
            retornar()
    }


    return (


        <div className="container flex flex-col items-center justify-center mx-auto bg-red-100 m-3 p-10 rounded-lg">
            <h1 className="text-4xl text-center my-8">
                Corrida
            </h1>

           {/* Verifica se está carregando o treino apenas quando há um ID */}


            <form className="w-1/2 flex flex-col gap-4"
                onSubmit={cadastrarNovaCorrida}
            >
                <div className="flex flex-col gap-2">

                    <label htmlFor="destino">Destino</label>
                    <input
                        type="text"
                        placeholder="Local de destino"
                        name="destino"
                        className="border-2 border-slate-700 rounded p-2"
                        value={corrida.destino}
                        onChange={atualizarEstado}
                    />
                    <label htmlFor="embarque">Embarque</label>
                    <input
                        type="text"
                        placeholder="Local de embarque"
                        name="embarque"
                        className="border-2 border-slate-700 rounded p-2"
                        value={corrida.embarque}
                        onChange={atualizarEstado}
                    />

                </div>
                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit"
                >
                   
                    cadastrar
                    
                </button>

                <button
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
                    onClick={retornarHome}
                >
                  
                    Cancelar

                </button>

            </form>

        </div>




    )
}
export default FormCorrida;

