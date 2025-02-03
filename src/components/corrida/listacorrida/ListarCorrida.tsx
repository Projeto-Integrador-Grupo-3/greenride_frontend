import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Corrida from "../../../models/Corrida";
import { useNavigate } from "react-router-dom";
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
        } catch (error) {
            handleLogout();
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Necessário fazer login!');
            navigate('/');
        } else {
            buscarCorrida();
        }
    }, [token]);

    return (
        <div className="min-h-screen p-8 bg-gray-100">



            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Histórico de Corridas</h2>

                {corrida.length > 0 && (
                    <div className="mt-8 mb-8 p-6 bg-yellow-100 rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">Última Corrida:</h3>
                        <CardCorrida corrida={corrida[corrida.length - 1]} />
                    </div>
                )}
                
                <div className="space-y-4">
                    {corrida.map((corridaItem) => (
                        <CardCorrida key={corridaItem.id} corrida={corridaItem} />
                    ))}
                </div>


            </div>
        </div>
    );
}

export default ListaCorrida;