function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100 py-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Seção 1: Logo e Descrição */}
        <div className="flex flex-col items-start">
          <a href="#home" className="text-3xl font-bold text-primary-100">
            greenride
          </a>
          <p className="mt-4 text-primary-300 max-w-sm">
            Chegue mais rápido. Ajude o meio ambiente.
          </p>
        </div>

        {/* Seção 2: Contato */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-primary-100">Contato</h3>
          <p className="text-primary-300">Av Paulista, 1.023</p>
          <p className="text-primary-300">São Paulo, SP</p>
          <p className="text-primary-300">atendimento@greenride.com</p>
          <p className="text-primary-300 mb-4">(11) 1234-5678</p>
        </div>

        {/* Seção 3: Links Úteis */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4 text-primary-100">Links Úteis</h3>
          <a href="#" className="text-primary-300 hover:text-primary-100 transition">
            Política de Privacidade
          </a>
          <a href="#" className="text-primary-300 hover:text-primary-100 transition">
            Termos de Serviço
          </a>
          <a href="#" className="text-primary-300 hover:text-primary-100 transition">
            FAQ
          </a>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className="mt-10 border-t border-primary-500 pt-6 text-center">
        <p className="text-primary-300 text-sm">
          &copy; 2025 @greenride Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;