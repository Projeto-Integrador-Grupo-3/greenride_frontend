import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/home/Home';
import DeletarUsuario from './components/deletarusuario/DeletarUsuario';


function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/usuario" element={<DeletarUsuario/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App