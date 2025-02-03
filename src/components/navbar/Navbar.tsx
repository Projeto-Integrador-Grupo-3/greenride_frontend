import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <nav className="bg-primary-900 fixed w-full z-50 shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-primary-100 text-2xl font-bold">greenride</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-black hover:text-white transition">Início</a>
              <Link to='../sobre' className="text-black hover:text-white transition">Sobre nós</Link>
              <a href="#" className="text-black hover:text-gray-200 transition">Conta</a>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;