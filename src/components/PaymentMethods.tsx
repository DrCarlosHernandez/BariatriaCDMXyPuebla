import { Wallet, CreditCard, CalendarRange, ExternalLink } from 'lucide-react';

const MEND_LINK =
  'https://mendmx.typeform.com/solicitud1?acquisition_channel=dashboard&merchant_id=1089&utm_campaign=1005';

const insurers = ['GNP', 'AXA', 'MetLife', 'MAPFRE', 'Allianz', 'Monterrey'];

const methods = [
  { icon: Wallet, label: 'Efectivo y transferencia' },
  { icon: CreditCard, label: 'Tarjetas de crédito y débito' },
  { icon: CalendarRange, label: 'Meses sin intereses*' },
];

export default function PaymentMethods() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-primary-50/30 border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <span className="text-primary-600 font-bold tracking-widest uppercase text-xs mb-2 block">
            Accesibilidad
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-800 leading-tight">
            Tu salud es la mejor inversión
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
            La cirugía bariátrica requiere compromiso. Sus resultados están comprobados y contarás con
            acompañamiento de un equipo multidisciplinario.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-4 items-stretch">
          {/* Payment options */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <h3 className="text-base font-bold text-slate-800 mb-3 flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-primary-600" />
              Facilidades de pago
            </h3>

            <ul className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-2 mb-3">
              {methods.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2 rounded-lg bg-slate-50 border border-slate-100 px-3 py-2.5 min-h-[48px]"
                >
                  <item.icon className="w-4 h-4 shrink-0 text-primary-600" />
                  <span className="text-xs font-semibold text-slate-700 leading-tight">{item.label}</span>
                </li>
              ))}
            </ul>

            {/* Visa/Mastercard/Amex text badges */}
            <div className="flex flex-wrap gap-2 mt-2">
              {['VISA', 'Mastercard', 'American Express'].map((card) => (
                <span
                  key={card}
                  className="px-3 py-1 rounded-md bg-slate-100 border border-slate-200 text-xs font-bold text-slate-600"
                >
                  {card}
                </span>
              ))}
            </div>
          </div>

          {/* MEND financing */}
          <aside className="bg-gradient-to-br from-primary-700 to-primary-900 text-white rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-28 h-28 bg-primary-400/25 rounded-full blur-2xl" />
            <div className="relative">
              <span className="inline-block bg-white/15 text-primary-100 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                Financiamiento exclusivo
              </span>
              <h3 className="text-lg font-heading font-bold leading-tight mb-2">
                Financia tu cirugía con{' '}
                <a
                  href={MEND_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-primary-300 decoration-2 underline-offset-2 hover:text-primary-100"
                >
                  MEND
                </a>
              </h3>
              <p className="text-sm text-primary-100 leading-snug mb-3">
                Con <strong>MendPay</strong> puedes pagar hasta en <strong>24 meses</strong> y{' '}
                <strong>sin tarjeta de crédito</strong>.
              </p>
              <a
                href={MEND_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[44px] bg-white text-primary-700 hover:bg-primary-50 rounded-lg text-sm font-bold inline-flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
              >
                Solicitar crédito ahora
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </aside>
        </div>

        {/* Insurers */}
        <div className="mt-4 pt-3 border-t border-slate-200 text-center">
          <p className="text-xs font-bold text-slate-700 mb-1.5">Aliados con las principales aseguradoras</p>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {insurers.map((name) => (
              <li key={name} className="text-xs font-bold tracking-wide text-slate-400">
                {name}
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-slate-400 mt-1.5 max-w-xl mx-auto leading-snug">
            * Cada póliza es diferente. El equipo administrativo puede ayudarte a revisar tu cobertura.
          </p>
        </div>
      </div>
    </section>
  );
}
