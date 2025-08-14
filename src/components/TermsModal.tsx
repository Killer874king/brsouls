
"use client";
import "./globals.css";
import { useState } from "react";

type TermsModalProps = {
  open: boolean;
  onClose: () => void;
};

function TermsModal({ open, onClose }: TermsModalProps) {
  const [agreed, setAgreed] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-neutral-900 w-[90%] md:w-2/3 max-w-2xl p-6 rounded-lg z-10">
        <h3 className="text-xl font-bold mb-4">Termos e Condições</h3>
        <div className="max-h-64 overflow-auto text-sm text-gray-300 mb-4">
          <p>
            Aqui vão os termos de uso do site e demo. Este é um exemplo; troque
            pelo texto real quando tiver disponível.
          </p>
          <p className="mt-3">
            • Uso do conteúdo, responsabilidades, política de privacidade e
            etc...
          </p>
        </div>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-sm text-gray-300">Li e concordo com os termos</span>
        </label>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="px-4 py-2 rounded">
            Fechar
          </button>
          <button
            disabled={!agreed}
            onClick={() => {
              // ação de prosseguir
              window.alert("Obrigado — termos aceitos!");
              onClose();
              setAgreed(false);
            }}
            className={`px-4 py-2 rounded ${agreed ? "bg-white text-black" : "opacity-50"}`}
          >
            Prosseguir
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showTerms, setShowTerms] = useState(true);

  return (
    <html lang="pt">
      <body>
        <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
        {children}
      </body>
    </html>
  );
}
