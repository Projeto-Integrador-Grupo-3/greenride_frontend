import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Corrida from "../../../models/Corrida";
import { useNavigate, useParams } from "react-router-dom";
import { buscar } from "../../../service/Service";
import CardCorrida from "../cardcorrida/CardCorrida";



function ListaCorrida() {


    const navigate = useNavigate();


    const [corrida, setCorrida] = useState<Corrida[]>([]);


    const { usuariolog, handleLogout } = useContext(AuthContext);
    const token = usuariolog.token;


    async function buscarCorrida() {
        try {
            await buscar('/corrida', setCorrida, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }


    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/');
        }
    }, [token]);


    useEffect(() => {
        buscarCorrida();
    }, [corrida.length]);


    const ultimaCorrida = corrida[corrida.length - 1];

    return (


        <div className="relative w-full h-screen bg-cover bg-center" >
               
           


            <div className="flex justify-center items-center w-full my-4">
                <div className="container flex flex-col gap-4 items-center">
                    {/* Exibe os cards de treino */}
                    {/* {corrida.map((corrida) => (
                        <CardCorrida key={corrida.id} corrida={corrida} />
                    ))} */}
                </div>
            </div>

            {ultimaCorrida && (
                <div className="mt-4 p-4 border rounded">
                    <h3>Última Corrida:</h3>
                    <CardCorrida corrida={ultimaCorrida} />
                </div>
            )}
        </div>




    );




}


export default ListaCorrida;
