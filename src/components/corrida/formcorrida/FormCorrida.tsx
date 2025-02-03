import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

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



        if (corrida.embarque !== '' && corrida.destino !== '') {



            try {

                await cadastrar('/corrida', corrida, setCorrida, {

                    headers: { Authorization: token }

                })

                alert('Corrida solicitada com sucesso!')

            } catch (error) {

                alert('Erro ao solicitar o corrida!')

            }





        } else {

            alert('OBS: Embarque e Destino Obrigatórios!')

        }

        retornar()

    }





    return (





        <div className=" flex flex-col w-full items-center bg-[#95A68F] p-10 rounded-lg">



            <div className=" flex flex-col rounded-2xl  bg-white items-center justify-center p-10">

                <h1 className="text-2xl text-center my-8">

                    Planeje sua próxima viajem

                </h1>



                <form className="w-full flex flex-col gap-4  "

                    onSubmit={cadastrarNovaCorrida}

                >

                    <div className="flex flex-col gap-2 ">

                        <label htmlFor="destino">Local de Destino</label>

                        <input

                            type="text"

                            placeholder="Local de destino"

                            name="destino"

                            className="border-2 border-slate-700 rounded p-2"

                            value={corrida.destino}

                            onChange={atualizarEstado}

                        />

                    </div>

                    <div className="flex flex-col gap-2 ">

                        <label htmlFor="embarque">Local de Partida</label>

                        <input

                            type="text"

                            placeholder="Local de embarque"

                            name="embarque"

                            className="border-2 border-slate-700 rounded p-2 mb-10"

                            value={corrida.embarque}

                            onChange={atualizarEstado}

                        />



                    </div>

                    <button

                        className="rounded text-black bg-[#CDCEBE] hover:bg-[#95A65F] w-4/5 py-2 mx-auto flex justify-center"

                        type="submit"

                    >



                        Ir



                    </button>



                    <button

                        className="rounded text-black bg-[#CDCEBE] hover:bg-[#95A65F] w-4/5 py-2 mx-auto flex justify-center"

                        onClick={retornarHome}

                    >



                        Cancelar



                    </button>



                </form>

            </div>



        </div>









    )

}

export default FormCorrida;