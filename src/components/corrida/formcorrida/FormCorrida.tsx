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




        <div className=" flex flex-col rounded-2xl  bg-white items-center justify-center p-7 mt-3">


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


                        className="border-2 border-slate-700 rounded p-2 mb-7"


                        value={corrida.embarque}


                        onChange={atualizarEstado}


                    />






                </div>


                <button


                    className="rounded font-semibold text-black bg-[#CDCEBE] hover:bg-[#95A65F]
                    w-10/12 py-2  mx-auto flex justify-center"
                    type="submit">


                    Ir


                </button>








            </form>


        </div>




















    )


}


export default FormCorrida;
