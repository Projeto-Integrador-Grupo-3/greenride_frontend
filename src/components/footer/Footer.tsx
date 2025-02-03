function Footer() {
  return (
    <footer className="bg-black text-white py-10 w-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start">
          <a href="#home" className="text-3xl font-bold">
            GreenRide
          </a>
          <p className="mt-4 text-gray-400 max-w-sm">
            Chegue mais rápido com o Greenride e ajude o meio ambiente.
          </p>
        </div>
  
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <p className="text-gray-300">Av Paulista, 123</p>
          <p className="text-gray-300">São Paulo, SP</p>
          <p className="text-gray-300">centraldeatendimentogreenride@gmail.com</p>
          <p className="text-gray-300 mb-4">(11) 1234-5678</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-gray-500 text-sm">&copy; 2025 @GREENRIDE Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
