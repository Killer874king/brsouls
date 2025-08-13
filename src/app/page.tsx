import Countdown from "@/components/countdown";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* HEADER */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="text-lg font-bold">BRSouls®</div>
        <nav className="flex gap-6 text-sm">
          <a href="#inicio" className="hover:underline">Início</a>
          <a href="#funcionalidades" className="hover:underline">Funcionalidades</a>
          <a href="#demo" className="hover:underline">Demo</a>
        </nav>
        <button className="bg-white text-black text-sm px-4 py-2 rounded-full">
          Baixar Demo
        </button>
      </header>

      {/* HERO */}
      <section id="inicio" className="text-center mt-20">
        <h1 className="text-4xl font-extrabold">BR Souls chegou.</h1>
        <p className="text-gray-400 text-xl mt-2">
          Demo disponível em novembro. Lançamento: 2028.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-black rounded-full text-sm">
          Saiba mais
        </button>
        <div className="mt-16 flex justify-center">
          <div className="bg-neutral-900 w-[600px] h-[300px] flex items-center justify-center rounded-lg">
            <span className="text-gray-500">LOGO / IMAGEM</span>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-8">
        <div className="bg-neutral-900 p-6 rounded-lg text-center">
          <div className="w-16 h-16 bg-neutral-800 mx-auto mb-4 rounded"></div>
          <h3 className="font-bold text-lg mb-2">Aventura épica.</h3>
          <p className="text-gray-400 text-sm">
            Explore um vasto mundo inspirado no Brasil com combates desafiadores.
          </p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-lg text-center">
          <div className="w-16 h-16 bg-neutral-800 mx-auto mb-4 rounded-full"></div>
          <h3 className="font-bold text-lg mb-2">Singleplayer.</h3>
          <p className="text-gray-400 text-sm">
            Divirta-se ao máximo nessa experiência Singleplayer.
          </p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-lg text-center">
          <div className="w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[55px] border-b-neutral-800 mx-auto mb-4"></div>
          <h3 className="font-bold text-lg mb-2">História envolvente.</h3>
          <p className="text-gray-400 text-sm">
            Descubra segredos e mistérios que só BR Souls oferece.
          </p>
        </div>
      </section>

      {/* CONTAGEM REGRESSIVA */}
      <section id="demo" className="mt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Faltam poucos meses!</h2>
        <p className="text-gray-400 mb-6 text-sm">
          Acesse agora mesmo o site e confira o contador até a demo de novembro.
        </p>
        <button className="px-6 py-2 bg-white text-black rounded-full text-sm mb-8">
          Contagem regressiva
        </button>
        <Countdown />
      </section>

      {/* FAQ */}
      <section className="mt-20 px-8 max-w-2xl mx-auto">
        <details className="bg-neutral-900 p-4 rounded mb-2">
          <summary className="cursor-pointer font-bold">
            Quando será liberada a demo de BR Souls?
          </summary>
          <p className="text-gray-400 mt-2 text-sm">Em novembro de 2025.</p>
        </details>
        <details className="bg-neutral-900 p-4 rounded mb-2">
          <summary className="cursor-pointer font-bold">
            Quais plataformas receberão o jogo?
          </summary>
          <p className="text-gray-400 mt-2 text-sm">PC e consoles.</p>
        </details>
        <details className="bg-neutral-900 p-4 rounded">
          <summary className="cursor-pointer font-bold">
            A demo ficará disponível até o lançamento?
          </summary>
          <p className="text-gray-400 mt-2 text-sm">
            Sim, até o lançamento oficial.
          </p>
        </details>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-neutral-800 text-gray-500 text-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-6">
          <div>
            <h4 className="font-bold mb-2">Jogo</h4>
            <ul>
              <li>Início</li>
              <li>Funcionalidades</li>
              <li>Demo</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Empresa</h4>
            <ul>
              <li>Sobre</li>
              <li>Equipe</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Ajuda</h4>
            <ul>
              <li>Contato</li>
              <li>Suporte</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Legal</h4>
            <ul>
              <li>Termos</li>
              <li>Privacidade</li>
            </ul>
          </div>
        </div>
        <div className="text-center py-4 border-t border-neutral-800">
          © 2025-2028 BR Souls
        </div>
      </footer>
    </div>
  );
}
