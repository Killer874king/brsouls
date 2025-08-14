import Countdown from "@/components/countdown";

export default function Demo() {
  return (
    <div className="min-h-screen px-6 py-12 text-center">
      <h1 className="text-4xl font-extrabold mb-4">Demo</h1>
      <p className="text-gray-400 mb-6">Experimente a demonstração em novembro.</p>
      <Countdown />
      <div className="mt-8">
        <a className="inline-block px-6 py-2 bg-white text-black rounded-full" href="#">
          Baixar Demo (Bloqueado)
        </a>
      </div>
    </div>
  );
}
