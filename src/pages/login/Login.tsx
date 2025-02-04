import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import { AuthContext } from '../../context/AuthContext';
import { RotatingLines } from 'react-loader-spinner';
import { FaUser, FaLock } from 'react-icons/fa'; // Ícones para usuário e senha

function Login() {
    const navigate = useNavigate();
    const { usuariolog, handleLogin, isLoading } = useContext(AuthContext);
    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    useEffect(() => {
        if (usuariolog && usuariolog.token && usuariolog.token !== "") {
            navigate('/home');
        }
    }, [usuariolog]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-primary-100">
                <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg" onSubmit={login}>
                    <h2 className="text-primary-900 text-3xl font-bold text-center mb-6">Entrar</h2>

                    {/* Campo de Usuário */}
                    <div className="flex flex-col mb-4">
                        <label htmlFor="usuario" className="text-primary-900 mb-2 flex items-center">
                            <FaUser className="mr-2" /> Usuário
                        </label>
                        <div className="flex items-center border-2 border-primary-300 rounded-lg p-2 focus-within:border-primary-500">
                            <FaUser className="text-primary-500 mr-2" />
                            <input
                                type="text"
                                id="usuario"
                                name="usuario"
                                placeholder="Digite seu usuário"
                                className="w-full focus:outline-none"
                                value={usuarioLogin.usuario}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                    </div>

                    {/* Campo de Senha */}
                    <div className="flex flex-col mb-6">
                        <label htmlFor="senha" className="text-primary-900 mb-2 flex items-center">
                            <FaLock className="mr-2" /> Senha
                        </label>
                        <div className="flex items-center border-2 border-primary-300 rounded-lg p-2 focus-within:border-primary-500">
                            <FaLock className="text-primary-500 mr-2" />
                            <input
                                type="password"
                                id="senha"
                                name="senha"
                                placeholder="Digite sua senha"
                                className="w-full focus:outline-none"
                                value={usuarioLogin.senha}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />
                        </div>
                    </div>

                    {/* Botão de Login */}
                    <button
                        type="submit"
                        className="w-full bg-primary-500 hover:bg-primary-900 text-white py-2 rounded-lg transition-colors duration-300 flex justify-center items-center"
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>

                    {/* Link para Cadastro */}
                    <hr className="border-primary-300 my-6" />
                    <p className="text-primary-900 text-center">
                        Ainda não tem uma conta?{' '}
                        <Link to="/cadastro" className="text-primary-500 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </form>
            </div>
        </>
    );
}

export default Login;