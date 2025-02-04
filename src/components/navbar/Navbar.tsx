import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState, useEffect } from 'react';
import Usuario from '../../models/Usuario';
import { buscar } from '../../service/Service';


const Navbar = () => {

  const navigate = useNavigate()

  const { usuariolog, handleLogout } = useContext(AuthContext);
  const token = usuariolog?.token || '';
  const id = usuariolog?.id

  const [usuario, setUsuario] = useState<Usuario>()
  

  const [menuAberto, setMenuAberto] = useState(false);


  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };


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


  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    const fecharMenu = (event: MouseEvent) => {
      const target = event.target as Element | null;  // Cast para Element
      if (target && !target.closest("#menuConta")) {
        setMenuAberto(false);
      }
    };


    document.addEventListener("click", fecharMenu);
    return () => {
      document.removeEventListener("click", fecharMenu);
    };
  }, []);


  return (
    <nav className="bg-primary-900 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/home" className="text-primary-100 text-2xl font-bold">	Greenride</Link>
          </div>


          {token !== '' ? (
            <div className="hidden md:flex items-center space-x-8 relative">
              <Link to="/home" className="text-white hover:font-bold transition">Início</Link>


              {/* Botão Conta */}
              <button
                onClick={toggleMenu}
                className="text-white hover:font-bold transition relative flex items-center"
                id="menuConta"
              >
                Conta
              </button>


              {/* Menu suspenso */}
              {menuAberto && (
                <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md w-56 py-2">
                  {/* Foto do Perfil */}
                  <div className="flex flex-col items-center border-b py-3 px-4">
                    <img
                      src={usuariolog?.foto || "https://via.placeholder.com/80"}
                      alt="Foto de perfil"
                      className="w-16 h-16 rounded-full border-2 border-gray-300"
                    />
                    <p className="text-gray-900 font-semibold mt-2">{usuariolog?.nome || "Usuário"}</p>
                    <p className="text-gray-500 text-sm">{usuariolog?.usuario || "email@example.com"}</p>
                  </div>


                  {/* Links e Ações */}
                  <Link to={`/editarusuario/${usuariolog?.id}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Editar Perfil
                  </Link>
                 
                  <Link to={`/deletarusuario/${usuariolog?.id}`} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Deletar Conta
                  </Link>


                  {/* Botão Logout */}
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/viajar" className="text-white hover:font-bold transition">Viajar</Link>
              <Link to="/dirigir" className="text-white hover:font-bold transition">Dirigir</Link>
              <Link to="/sobre" className="text-white hover:font-bold transition">Sobre nós</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;