import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '@/types';

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(faqItems[0].id);

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-5">
            Preguntas frecuentes
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-5 text-balance">
            Resolvemos tus dudas
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Entendemos que la decisión de someterte a una cirugía bariátrica
            requiere información clara y honesta.
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item) => {
            const isOpen = open === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-primary-200 bg-primary-50/30 shadow-md'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <span className={`font-heading font-semibold text-base sm:text-lg transition-colors ${
                    isOpen ? 'text-primary-700' : 'text-slate-800'
                  }`}>
                    {item.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-primary-600 text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-400 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
