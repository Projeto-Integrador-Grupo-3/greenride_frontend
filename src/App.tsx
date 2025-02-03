import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import CadastroUsuario from './pages/cadastro/CadastroUsuario';
import Login from './pages/login/Login';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/home/Home';
import ChamarUsuario from './components/usuario/mostrarusuario/MostrarUsuario';
import DeletarUsuario from './components/usuario/deletarusuario/DeletarUsuario';
import EditarUsuario from './components/usuario/editarusuario/EditarUsuario';
import Usuario from './pages/usuario/Usuario';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import FormCorrida from './components/corrida/formcorrida/FormCorrida';
import ListaCorrida from './components/corrida/listacorrida/ListarCorrida';
import FormMotorista from './components/motorista/formmotorista/FormMotorista';


function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/usuario" element={<Usuario/>} />
        <Route path="/solicitarcorrida" element={<FormCorrida/>} />
        <Route path="/listarcorrida" element={<ListaCorrida/>} />
        <Route path="/deletarusuario/:id" element={<DeletarUsuario/>} />
        <Route path="/editarusuario/:id" element={<EditarUsuario/>} />
        <Route path="/formmotorista" element={<FormMotorista/>} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
      {/* <Footer /> */}
     </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App