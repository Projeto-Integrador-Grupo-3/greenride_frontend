import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cadastrar } from "../../../service/Service";
import { AuthContext } from "../../../context/AuthContext";
import Motorista from "../../../models/Motorista";


function FormMotorista() {


    const navigate = useNavigate()
    

    const { usuariolog } = useContext(AuthContext);
    const token = usuariolog.token;

    const [motorista, setMotorista] = useState<Motorista>({
        id: undefined,
        nome: usuariolog.nome,
        foto: usuariolog.foto,
        carro: '',
        cor: '',
        placa: '',


    })
    
    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);


    function retornar() {
        navigate(`/home`)
    }


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setMotorista({
            ...motorista,
            [e.target.name]: e.target.value
        })


    }




    async function cadastrarMotorista(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if(motorista.carro !== '' && motorista.placa !== ''){

            try {
                await cadastrar('/motorista', motorista, setMotorista, {
                    headers: { Authorization: token }
                })
                alert('motorista cadastrado com sucesso!')
            } catch (error) {
                alert('Erro ao cadastrar o motorista!')
            }
    
           
        }else{
            alert('OBS: Carro e Placa são Obrigatórios!')
        }
            retornar()
    }


    return (


        <div className="container flex flex-col items-center justify-center mx-auto bg-red-100 m-3 p-10 rounded-lg">
            <h1 className="text-4xl text-center my-8">
                Corrida
            </h1>

            <form className="w-1/2 flex flex-col gap-4"
                onSubmit={cadastrarMotorista}
            >
                <div className="flex flex-col gap-2">

                    <label htmlFor="carro">Carro</label>
                    <input
                        type="text"
                        placeholder="Modelo do Carro"
                        name="carro"
                        className="border-2 border-slate-700 rounded p-2"
                        value={motorista.carro}
                        onChange={atualizarEstado}
                    />
                    <label htmlFor="cor">Cor</label>
                    <input
                        type="text"
                        placeholder="Cor do Carro"
                        name="cor"
                        className="border-2 border-slate-700 rounded p-2"
                        value={motorista.cor}
                        onChange={atualizarEstado}
                    />
                    <label htmlFor="placa">Placa</label>
                    <input
                        type="text"
                        placeholder="Placa do Carro"
                        name="placa"
                        className="border-2 border-slate-700 rounded p-2"
                        value={motorista.placa}
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
                    className="rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                    w-1/2 py-2 mx-auto flex justify-center">
                
                <Link to='/' >
                    cancelar
                </Link>
                </button>

            </form>

        </div>




    )
}
export default FormMotorista;

