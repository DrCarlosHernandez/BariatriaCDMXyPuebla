import { useState } from 'react';
import { Clock, Hospital, HeartPulse, TrendingDown, ArrowRight, MessageCircle } from 'lucide-react';
import { procedures } from '@/types';
import { whatsappLink } from '@/components/WhatsAppButton';

export default function Procedures() {
  const [selected, setSelected] = useState(procedures[0].id);
  const active = procedures.find((p) => p.id === selected) ?? procedures[0];

  return (
    <section
      id="procedimientos"
      className="relative py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-5">
            Procedimientos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-5 text-balance">
            Soluciones quirúrgicas adaptadas a ti
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Cada procedimiento se personaliza según tu historial médico, índice
            de masa corporal y objetivos de salud. Evaluamos juntos la mejor
            opción para garantizar resultados seguros y duraderos.
          </p>
        </div>

        {/* Procedure selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {procedures.map((proc) => (
            <button
              key={proc.id}
              onClick={() => setSelected(proc.id)}
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                selected === proc.id
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/30 scale-105'
                  : 'bg-white text-slate-600 hover:bg-primary-50 hover:text-primary-700 border border-slate-200'
              }`}
            >
              <proc.icon className="w-4 h-4" />
              {proc.shortName}
            </button>
          ))}
        </div>

        {/* Detail card */}
        <div
          key={active.id}
          className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden animate-fade-in-up"
        >
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left: description + details */}
            <div className="lg:col-span-3 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                  <active.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-slate-800">
                    {active.name}
                  </h3>
                  {active.highlight && (
                    <span className="inline-block mt-1 text-xs font-semibold text-accent-600 bg-accent-50 px-2.5 py-1 rounded-full">
                      Procedimiento destacado
                    </span>
                  )}
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {active.description}
              </p>

              <h4 className="font-heading font-semibold text-slate-800 mb-3 text-sm uppercase tracking-wide">
                Características del procedimiento
              </h4>
              <ul className="space-y-2.5">
                {active.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                      <ArrowRight className="w-3 h-3 text-primary-600" />
                    </span>
                    <span className="text-sm leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: stats grid */}
            <div className="lg:col-span-2 bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-900 p-8 lg:p-12 flex flex-col justify-center">
              <h4 className="font-heading text-white/80 text-sm uppercase tracking-wide mb-6">
                Información clave
              </h4>
              <div className="space-y-5">
                {[
                  { icon: Clock, label: 'Duración', value: active.duration },
                  { icon: Hospital, label: 'Estancia hospitalaria', value: active.hospitalStay },
                  { icon: HeartPulse, label: 'Recuperación', value: active.recovery },
                  { icon: TrendingDown, label: 'Pérdida de peso esperada', value: active.expectedLoss },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center ring-1 ring-white/15">
                      <stat.icon className="w-5 h-5 text-primary-300" />
                    </div>
                    <div>
                      <div className="text-white/60 text-xs font-medium">{stat.label}</div>
                      <div className="text-white font-heading font-semibold text-base">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink('Hola, me gustaría más información sobre ' + active.shortName + '.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-[#1ebe5d] transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="#contacto"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-primary-700 rounded-xl font-semibold text-sm hover:bg-white/90 transition-all duration-300"
                >
                  Más información
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
