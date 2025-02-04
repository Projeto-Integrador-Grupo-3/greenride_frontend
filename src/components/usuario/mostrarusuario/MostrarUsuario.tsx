import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { buscar } from "../../../service/Service"
import Usuario from "../../../models/Usuario"


function ChamarUsuario() {


  const navigate = useNavigate()


  const [usuario, setUsuario] = useState<Usuario>()


  const { usuariolog, handleLogout } = useContext(AuthContext)
  const token = usuariolog.token
  const id = usuariolog.id


  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado!')
      navigate('/')
    }
  }, [token])


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
    if (usuario?.id !== 0 && token !== '') {
      buscarPorId(id)
    }
  }, [id])


  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto mt-2">
      <div className="flex justify-center">
        <img
          className="rounded-full w-30 h-32 border-4 border-corVerde bg-cover shadow-xl"
          src={usuario?.foto}
          alt={`Foto de perfil`}
        />
      </div>


      <div className="text-center mt-6">
        <h2 className="text-3xl font-semibold text-corVerde mb-2">{usuario?.nome}</h2>
        <p className="text-lg text-gray-600">{usuario?.tipo}</p>
        <p className="text-lg text-gray-500">{usuario?.usuario}</p>
      </div>


      <div className="flex justify-center mt-6 space-x-4">
        <Link to={`/editarusuario/${usuario?.id}`}>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors shadow-md text-sm transform hover:scale-105">
            Editar Perfil
          </button>
        </Link>


        <Link to={`/deletarusuario/${usuario?.id}`}>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full transition-colors shadow-md text-sm transform hover:scale-105">
            Deletar Conta
          </button>
        </Link>
      </div>
    </div>
  )
}


export default ChamarUsuario
