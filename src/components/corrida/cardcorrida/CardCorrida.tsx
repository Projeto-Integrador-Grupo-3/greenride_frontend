import { Link, useNavigate } from "react-router-dom";
import Corrida from "../../../models/Corrida";
import { AuthContext } from "../../../context/AuthContext";
import { useContext, useEffect } from "react";

interface CardCorridaProps {
    corrida: Corrida;
}

const VELOCIDADE_MEDIA = 60; // km/h
const VALOR_POR_KM = 10; // R$/km

function CardCorrida({ corrida }: CardCorridaProps) {
    const navigate = useNavigate();
    const { usuariolog, handleLogout } = useContext(AuthContext);
    const token = usuariolog.token;

    const calcularDetalhes = () => {
        const tempoHoras = corrida.distanciaKm / VELOCIDADE_MEDIA;
        return {
            minutos: Math.round(tempoHoras * 60),
            valor: corrida.distanciaKm * VALOR_POR_KM
        };
    };

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            handleLogout();
            navigate('/');
        }
    }, [token]);

    const detalhes = calcularDetalhes();

    return (
        <div className='flex flex-col gap-2 border border-gray-700 rounded-lg shadow-md p-4 bg-white'>
            <header className="font-bold text-lg">Detalhes da Corrida</header>
            
            <div className="space-y-1">
                <p>Passageiro: {usuariolog.nome}</p>
                <p>Destino: {corrida.destino}</p>
                <p>Embarque: {corrida.embarque}</p>
                <p>Distância: {corrida.distanciaKm} km</p>
                <p>Tempo estimado: {detalhes.minutos} minutos</p>
                <p>Valor estimado: R$ {detalhes.valor.toFixed(2)}</p>
            </div>

            <div className='flex justify-end space-x-2 mt-2'>
                <Link to={`/cancelar/${corrida.id}`}>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-lg transition-colors shadow-md text-sm">
                        Cancelar
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default CardCorrida;