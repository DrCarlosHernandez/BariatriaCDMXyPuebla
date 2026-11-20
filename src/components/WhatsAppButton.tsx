import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '525666052103';
const WHATSAPP_MESSAGE =
  'Hola, me gustaría agendar una consulta de cirugía bariátrica con el Dr. Hernández.';

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(message ?? WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (visible) {
      const t = setTimeout(() => setTooltip(true), 800);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {tooltip && (
        <div className="relative bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 max-w-[220px] animate-fade-in-up">
          <button
            onClick={() => setTooltip(false)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-3.5 h-3.5 text-slate-600" />
          </button>
          <p className="text-sm text-slate-700 font-medium">
            ¿Tienes dudas? Escríbenos por WhatsApp
          </p>
          <p className="text-xs text-slate-400 mt-0.5">Respondemos rápido</p>
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-slate-100 rotate-45" />
        </div>
      )}

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="group relative w-16 h-16 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageCircle className="w-8 h-8 text-white relative z-10" />
      </a>
    </div>
  );
}
