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
import Sobre from './pages/sobre/Sobre';
import Viajar from './pages/viajar/Viajar';
import Dirigir from './pages/dirigir/Dirigir';



function App() {
  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/usuario" element={<Usuario/>} />
        <Route path="/solicitarcorrida" element={<FormCorrida/>} />
        <Route path="/listarcorrida" element={<ListaCorrida/>} />
        <Route path="/deletarusuario/:id" element={<DeletarUsuario/>} />
        <Route path="/editarusuario/:id" element={<EditarUsuario/>} />
        <Route path="/formmotorista" element={<FormMotorista/>} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/viajar" element={<Viajar />} />
        <Route path='/dirigir' element={<Dirigir />}></Route>
      </Routes>
      <Footer />
     </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App