export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500 p-6 text-center text-yellow-400">
      <div className="container mx-auto">
        <p className="text-sm mb-4">© 2025 BRSouls®</p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6">
          <a href="/sobre" className="hover:text-yellow-600 transition">Sobre</a>
          <a href="/equipe" className="hover:text-yellow-600 transition">Equipe</a>
          <a href="/ajuda" className="hover:text-yellow-600 transition">Ajuda</a>
          <a href="/contato" className="hover:text-yellow-600 transition">Contato</a>
          <a href="/suporte" className="hover:text-yellow-600 transition">Suporte</a>
          <a href="/faq" className="hover:text-yellow-600 transition">FAQ</a>
          <a href="/legal" className="hover:text-yellow-600 transition">Legal</a>
          <a href="/termos" className="hover:text-yellow-600 transition">Termos</a>
          <a href="/privacidade" className="hover:text-yellow-600 transition">Privacidade</a>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-400">
          Desenvolvido com ♥ pela equipe BRSouls.
        </p>
        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} BRSouls
        </p>
      </div>
    </footer>
  );
}
