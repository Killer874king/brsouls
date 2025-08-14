import Countdown from "@/components/countdown";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* HERO */}
      <section id="inicio" className="text-center mt-20 px-6">
        <h1 className="text-4xl font-bold text-yellow-400">BRSouls®</h1>
        <p className="text-gray-400 text-xl mt-2">
          Demo disponível em novembro. Lançamento: 2028.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-black rounded-full text-sm">
          Saiba mais
        </button>
        <div className="mt-16 flex justify-center">
          <div className="bg-neutral-900 w-[90%] md:w-[600px] h-[300px] flex items-center justify-center rounded-lg">
            <span className="text-gray-500">LOGO / IMAGEM</span>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES PREVIEW */}
      <section id="funcionalidades" className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-8">
        <div className="bg-purple-800 text-white p-6 rounded-lg shadow-md hover:bg-purple-900 cursor-pointer transition-colors">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">História</h3>
          <p>
            Explore uma narrativa única inspirada em problemas reais do Brasil.
          </p>
        </div>
        <div className="bg-purple-800 text-white p-6 rounded-lg shadow-md hover:bg-purple-900 cursor-pointer transition-colors">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">Singleplayer</h3>
          <p>
            Explore a melhor experiencia Singleplayer BR.
          </p>
        </div>
        <div className="bg-purple-800 text-white p-6 rounded-lg shadow-md hover:bg-purple-900 cursor-pointer transition-colors">
          <h3 className="text-yellow-400 font-bold text-lg mb-2">100% brasileiro</h3>
          <p>
            Muito brasileiro, muito BR, 100% BR.
          </p>
        </div>
      </section>



      {/* CONTAGEM REGRESSIVA */}
      <section id="demo" className="mt-20 text-center px-6">
        <h2 className="text-4xl font-bold text-yellow-400">Faltam poucos meses!</h2>
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
    </div>

  );
}
