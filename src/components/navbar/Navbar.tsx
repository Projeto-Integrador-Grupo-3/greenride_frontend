import { Link} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext, useState } from 'react';

const Navbar = () => {


  const { usuariolog } = useContext(AuthContext);
  const  token = usuariolog.token;



  return (
    <>
    {token !== ''? (
    <nav className="bg-primary-900 fixed w-full z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            <Link to='/home' className="text-primary-100 text-2xl font-bold">greenride</Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to='/home' className="text-white hover:font-bold transition">Início</Link>
              <Link to='/usuario' className="text-white hover:font-bold transition">Conta</Link>
            </div>

          </div>
        </div>
      </nav>)
      :(
      <nav className="bg-primary-900 fixed w-full z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
            <Link to='/home' className="text-primary-100 text-2xl font-bold">greenride</Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
             <Link to='/viajar' className="text-white hover:font-bold transition">Viajar</Link>
              <Link to='/dirigir' className="text-white hover:font-bold transition">Dirigir</Link>
              <Link to='/sobre' className="text-white hover:font-bold transition">Sobre nós</Link>
            </div>

          </div>
        </div>
      </nav>)

    }
  </>
  );
};

export default Navbar;