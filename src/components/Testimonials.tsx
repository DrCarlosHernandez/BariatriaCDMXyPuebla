import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '@/types';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  const active = testimonials[index];

  return (
    <section
      id="testimonios"
      className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-5">
            Testimonios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-5 text-balance">
            Historias reales de transformación
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            La mejor medida de nuestro trabajo son los resultados y la
            satisfacción de quienes confiaron en nosotros.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-12">
          <Quote className="absolute top-6 right-6 w-16 h-16 text-primary-100" />

          <div key={active.id} className="animate-fade-in">
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: active.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent-500 fill-accent-500" />
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl text-slate-700 leading-relaxed font-medium mb-8 max-w-3xl">
              "{active.quote}"
            </blockquote>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-heading font-bold text-lg shadow-lg">
                  {active.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-slate-800">{active.name}</div>
                  <div className="text-sm text-slate-500">{active.procedure}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-heading text-2xl font-bold text-primary-600">
                  {active.weightLoss}
                </div>
                <div className="text-xs text-slate-400">Pérdida de peso</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? 'w-8 bg-primary-600' : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary-50 hover:border-primary-300 hover:text-primary-700 transition-all"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
