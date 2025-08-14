"use client";
import { useEffect, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Countdown() {
  // alvo: 1 de novembro de 2025 (00:00 UTC)
  const target = new Date("2025-11-01T00:00:00Z").getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);
  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  return (
    <div className="mt-6 flex justify-center gap-8 text-center">
      <div>
        <div className="text-3xl font-bold">{dias}</div>
        <div className="text-xs text-gray-400">dias</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{pad(horas)}</div>
        <div className="text-xs text-gray-400">horas</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{pad(minutos)}</div>
        <div className="text-xs text-gray-400">min</div>
      </div>
      <div>
        <div className="text-3xl font-bold">{pad(segundos)}</div>
        <div className="text-xs text-gray-400">seg</div>
      </div>
    </div>
  );
}
