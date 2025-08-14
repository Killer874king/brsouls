import { Button } from "@/components/button";

export function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6 bg-black border-b border-yellow-500">
      <div className="text-lg font-bold text-yellow-400">BRSouls®</div>
      <nav className="flex space-x-4">
        <Button href="/">Início</Button>
        <Button href="/jogo">Jogo</Button>
        <Button href="/funcionalidades">Funcionalidades</Button>
        <Button href="/demo">Demo</Button>
        <Button href="/empresa">Empresa</Button>

      </nav>
    </header>
  );
}
export default Header;