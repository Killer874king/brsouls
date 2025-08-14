"use client";
import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <div className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-4">Contato</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Obrigado, ${nome}! Mensagem enviada (simulação).`);
          setNome(""); setEmail(""); setMsg("");
        }}
        className="max-w-md"
      >
        <label className="block mb-2">
          <span className="text-sm text-gray-300">Nome</span>
          <input value={nome} onChange={(e)=>setNome(e.target.value)} className="w-full mt-1 p-2 bg-neutral-900 rounded" />
        </label>

        <label className="block mb-2">
          <span className="text-sm text-gray-300">Email</span>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full mt-1 p-2 bg-neutral-900 rounded" />
        </label>

        <label className="block mb-2">
          <span className="text-sm text-gray-300">Mensagem</span>
          <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} className="w-full mt-1 p-2 bg-neutral-900 rounded" rows={5} />
        </label>

        <button type="submit" className="mt-3 px-4 py-2 bg-white text-black rounded">Enviar</button>
      </form>
    </div>
  );
}
