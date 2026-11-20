import { CreditCard, ExternalLink } from 'lucide-react';

const MEND_LINK =
  'https://mendmx.typeform.com/solicitud1?acquisition_channel=dashboard&merchant_id=1089&utm_campaign=1005';

export default function FinancingFloatingButton() {
  return (
    <a
      href={MEND_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar financiamiento MEND (abre en nueva pestaña)"
      className="fixed bottom-[5.5rem] sm:bottom-6 left-3 sm:left-6 z-40 inline-flex items-center gap-2 h-11 sm:h-12 pl-3.5 sm:pl-4 pr-4 sm:pr-5 rounded-full border border-white/45 bg-primary-900/70 text-white font-bold text-xs sm:text-sm shadow-lg backdrop-blur-md hover:bg-primary-900/90 transition-all duration-300 hover:scale-105"
    >
      <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 text-primary-300 shrink-0" />
      <span>Financiamiento</span>
      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/70 shrink-0" />
    </a>
  );
}
