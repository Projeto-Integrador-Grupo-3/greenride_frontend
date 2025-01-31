import { ChangeEvent, FormEvent,  useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Usuario from "../../models/Usuario"
import {  cadastrarUsuario } from "../../service/Service"
import { RotatingLines } from "react-loader-spinner"


function Cadastro() {

    const navigate = useNavigate()
    
    const [isLoading, setIsLoading] = useState<boolean>(false)
  
    const[confirmaSenha, setConfirmaSenha] = useState<string>("")
  
    const [usuario, setUsuario] = useState<Usuario>({
      id: undefined,
      nome: '',
      usuario: '',
      senha: '',
      foto: ''

    })


    useEffect(() => {
      if (usuario.id !== undefined){
        retornar()
      }
    }, [usuario])
  
    function retornar(){
      navigate('/login')
    }
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>){
      setUsuario({
        ...usuario,
        [e.target.name]: e.target.value
      })
  
    }
  
    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>){
      setConfirmaSenha(e.target.value)
    }
  

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>){
      e.preventDefault()
  
      if(confirmaSenha === usuario.senha && usuario.senha.length >= 8){
  
        setIsLoading(true)
  
        try{
          await cadastrarUsuario(`/usuario/cadastrar`, usuario, setUsuario)
          alert('Usuário cadastrado com sucesso!')
        }catch(error){
          alert('Erro ao cadastrar o usuário!')
        }
      }else{
        alert('Dados do usuário inconsistentes! Verifique as informações do cadastro.')
        setUsuario({...usuario, senha: ''})
        setConfirmaSenha('')
      }
  
      setIsLoading(false)
    }
  
  
    
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
              place-items-center font-bold">
          <div className="fundoCadastro hidden lg:block"></div>
          <form className='flex justify-center items-center flex-col w-2/3 gap-3' 
            onSubmit={cadastrarNovoUsuario}>
            <h2 className='text-slate-900 text-5xl'>
            cadastrar usuario
            </h2>
            <div className="flex flex-col w-full">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-2 border-slate-700 rounded p-2"
               value = {usuario.nome}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuario"
                className="border-2 border-slate-700 rounded p-2"
                value = {usuario.usuario}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="foto">Foto</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="border-2 border-slate-700 rounded p-2"
                value = {usuario.foto}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2"
                value = {usuario.senha}
               onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="border-2 border-slate-700 rounded p-2"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
            <div className="flex justify-around w-full gap-8">
              <button className='rounded text-white bg-red-400 
                    hover:bg-gradient-to-r from-red-700 to-red-400 w-1/2 py-2' 
                    onClick={retornar}>
                Cancelar
              </button>
              <button 
                  type='submit'
                  className='rounded text-white bg-indigo-400 
                            hover:bg-gradient-to-r from-indigo-900 to-indigo-400 w-1/2 py-2
                             flex justify-center' 
                  >
                    {isLoading ? <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                    /> :
                      <span>cadaastrar</span>
                    }
                
              </button>
            </div>
          </form>
        </div>
      </>
    )
  }
  
  export default Cadastro
  