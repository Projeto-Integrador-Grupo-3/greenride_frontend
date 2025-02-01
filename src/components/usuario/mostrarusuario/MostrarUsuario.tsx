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
                  if (usuario?.id !== 0 && token!=='') {
                      buscarPorId(id)
                  }
              }, [id])

  return (
    <div>

      <div>
      <img 
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' 
                src={usuario?.foto} alt={`Foto de perfil`} width="150px" height="100px"/>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Nome: {usuario?.nome}</h2>
        <p className="text-lg font-light">Usuário: {usuario?.usuario}</p>
      </div>

      <div className="flex space-x-2">
        <Link to={`/editarusuario/${usuario?.id}`}>
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded-lg transition-colors shadow-md text-sm">
            Editar Perfil
          </button>
        </Link>

        {/* Deletar Usuário */}
        <Link to={`/deletarusuario/${usuario?.id}`}>
          <button className="bg-red-800 hover:bg-red-900 text-white font-semibold py-1 px-3 rounded-lg transition-colors shadow-md text-sm">
            Deletar Conta
          </button>
        </Link>
      </div>

    </div>
    

  )
}

export default ChamarUsuario