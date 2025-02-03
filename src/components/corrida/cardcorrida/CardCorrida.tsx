

import { Link,  useNavigate } from "react-router-dom";
import Corrida from "../../../models/Corrida";
import { AuthContext } from "../../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import Motorista from "../../../pages/motorista/Motorista";


interface CardCorridaProps {
    corrida: Corrida;
}



function CardCorrida({ corrida }: CardCorridaProps) {

    const navigate = useNavigate();

    const { usuariolog, handleLogout } = useContext(AuthContext);
    const token = usuariolog.token;

    

    useEffect(() => {
            if (token === '') {
                alert('Você precisa estar logado');
                handleLogout()
                navigate('/');
            }
        }, [token]);

    return (


        <div className='flex grid-cols-3 items-center justify-between border border-gray-700 rounded-lg shadow-md p-2 bg-white'>
            <header>
                Corrida
            </header>


            <p>Passageiro:{usuariolog.nome}</p>
            <p>local de destino:{corrida.destino}</p>
            <p> local de embarque:{corrida.embarque}</p>
            <p>distancia:{corrida.distanciaKm}</p>
            <p>tempo estimado de viagem:{corrida.tempo}</p>
            
             


            {/* Botões de ação */}
            <div className='flex space-x-2'>
                <Link to={`/cancelar/${corrida.id}`}>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-lg transition-colors shadow-md text-sm">Cancelar</button>
                </Link>



            </div>









        </div>
    );


}


export default CardCorrida;
