import { benefits } from '@/types';

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="relative py-24 bg-gradient-to-b from-primary-900 via-primary-800 to-secondary-900 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-primary-200 rounded-full text-sm font-semibold mb-5 ring-1 ring-white/15">
            Beneficios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 text-balance">
            Más allá de perder peso
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            La cirugía bariátrica no solo transforma tu cuerpo: mejora
            drásticamente tu salud general y previene enfermedades crónicas
            graves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-7 ring-1 ring-white/10 hover:ring-primary-400/40 hover:bg-white/10 transition-all duration-400 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            >
              <div className="w-13 h-13 mb-5">
                <div className="w-13 h-13 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 rounded-xl font-semibold text-base hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Da el primer paso hoy
          </a>
        </div>
      </div>
    </section>
  );
}
