import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import { FaUser, FaLock } from "react-icons/fa"; // Ícones para usuário e senha

function CadastroUsuario() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState<Usuario>({
    id: undefined,
    nome: '',
    usuario: '',
    tipo: '',
    senha: '',
    foto: '',
  });

  useEffect(() => {
    if (usuario.id !== undefined) {
      retornar();
    }
  }, [usuario]);

  function retornar() {
    navigate('/login');
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuario/cadastrar`, usuario, setUsuario);
        alert('Usuário cadastrado com sucesso!');
      } catch (error) {
        alert('Erro ao cadastrar o usuário!');
      }
    } else {
      // alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.');
      setUsuario({ ...usuario, senha: '' });
      setConfirmaSenha('');
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-primary-100">
        <form className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg mt-32 mb-11" onSubmit={cadastrarNovoUsuario}>
          <h2 className="text-corVerdeEscuro text-2xl font-bold text-center mb-4">Cadastro</h2>

          {/* Campo de Nome */}
          <div className="flex flex-col mb-4">
            <label htmlFor="nome" className="text-corVerdeEscuro mb-2 flex items-center">
              <FaUser className="mr-2" /> Nome
            </label>
            <div className="flex items-center border-2 border-corVerdeEscuro rounded-lg p-2 focus-within:border-corVerde">
              <FaUser className="text-corVerde mr-2" />
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="w-full focus:outline-none"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
          </div>

          {/* Campo de Usuário */}
          <div className="flex flex-col mb-4">
            <label htmlFor="usuario" className="text-corVerdeEscuro mb-2 flex items-center">
              <FaUser className="mr-2" /> Usuário
            </label>
            <div className="flex items-center border-2 border-corVerdeEscuro rounded-lg p-2 focus-within:border-corVerde">
              <FaUser className="text-corVerde mr-2" />
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuário"
                className="w-full focus:outline-none"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
          </div>

          {/* Campo de Tipo de Usuário */}
          <div className="flex flex-col mb-4">
            <label htmlFor="tipo" className="text-corVerdeEscuro mb-2">Tipo de Usuário</label>
            <select
              name="tipo"
              id="tipo"
              className="border-2 border-corVerdeEscuro rounded-lg p-2"
              value={usuario.tipo}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => atualizarEstado(e)}
            >
              <option value="">Selecione um tipo</option>
              <option value="passageiro">Passageiro</option>
              <option value="motorista">Motorista</option>
            </select>
          </div>

          {/* Campo de Foto */}
          <div className="flex flex-col mb-4">
            <label htmlFor="foto" className="text-corVerdeEscuro mb-2">Foto</label>
            <div className="flex items-center border-2 border-corVerdeEscuro rounded-lg p-2 focus-within:border-corVerde">
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="URL da Foto"
                className="w-full focus:outline-none"
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
          </div>

          {/* Campo de Senha */}
          <div className="flex flex-col mb-4">
            <label htmlFor="senha" className="text-corVerdeEscuro mb-2 flex items-center">
              <FaLock className="mr-2" /> Senha
            </label>
            <div className="flex items-center border-2 border-corVerdeEscuro rounded-lg p-2 focus-within:border-corVerde">
              <FaLock className="text-corVerde mr-2" />
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="w-full focus:outline-none"
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
          </div>

          {/* Campo de Confirmar Senha */}
          <div className="flex flex-col mb-6">
            <label htmlFor="confirmarSenha" className="text-corVerdeEscuro mb-2 flex items-center">
              <FaLock className="mr-2" /> Confirmar Senha
            </label>
            <div className="flex items-center border-2 border-corVerdeEscuro rounded-lg p-2 focus-within:border-corVerde">
              <FaLock className="text-corVerde mr-2" />
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="w-full focus:outline-none"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
          </div>

          {/* Botões */}
          <div className="flex justify-around w-full gap-8 mt-4">
            <button
              className="w-1/2 py-2 rounded text-white bg-corVerdeEscuro hover:bg-corVerde"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-1/2 py-2 rounded text-white bg-corVerde hover:bg-corVerdeEscuro flex justify-center items-center"
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
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CadastroUsuario;
