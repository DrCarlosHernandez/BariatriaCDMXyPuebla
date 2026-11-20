import { Award, BadgeCheck, GraduationCap, Hospital } from 'lucide-react';
import { credentials } from '@/types';

export default function About() {
  return (
    <section id="nosotros" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Decorative tiles */}
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl p-6 shadow-xl h-48 flex flex-col justify-end">
                  <Award className="w-8 h-8 text-white/80 mb-2" />
                  <div className="text-white">
                    <div className="font-heading text-3xl font-bold">15+</div>
                    <div className="text-sm text-white/80">Años de experiencia</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-secondary-500 to-secondary-700 rounded-3xl p-6 shadow-xl h-40 flex flex-col justify-end">
                  <GraduationCap className="w-8 h-8 text-white/80 mb-2" />
                  <div className="text-white">
                    <div className="font-heading text-xl font-bold">Cirugía Robótica</div>
                    <div className="text-sm text-white/80">Robot Da Vinci</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-accent-500 to-accent-700 rounded-3xl p-6 shadow-xl h-40 flex flex-col justify-end">
                  <BadgeCheck className="w-8 h-8 text-white/80 mb-2" />
                  <div className="text-white">
                    <div className="font-heading text-xl font-bold">Certificado</div>
                    <div className="text-sm text-white/80">Consejo Mexicano</div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary-600 to-secondary-700 rounded-3xl p-6 shadow-xl h-48 flex flex-col justify-end">
                  <Hospital className="w-8 h-8 text-white/80 mb-2" />
                  <div className="text-white">
                    <div className="font-heading text-3xl font-bold">500+</div>
                    <div className="text-sm text-white/80">Cirugías exitosas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-5">
              Sobre el especialista
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6 text-balance">
              Dr. Carlos de Jesús Hernández López
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-5">
              Cirujano General y Cirujano Bariatra certificado, especialista en
              el tratamiento integral de la obesidad y enfermedades metabólicas.
              Con más de 15 años de experiencia, ha transformado la vida de
              cientos de pacientes mediante técnicas de mínima invasión en CDMX y Puebla.
            </p>
            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Su formación incluye Cirugía de Mínima Invasión, Cirugía
              Laparoscópica Avanzada y Cirugía Robótica (robot Da Vinci). Está
              enfocado en el tratamiento de padecimientos de esófago, estómago,
              hígado, vesícula y vías biliares, hernias, colon y recto.
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-4">
              {credentials.map((cred) => (
                <div
                  key={cred.id}
                  className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary-200 hover:bg-primary-50/50 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <BadgeCheck className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">{cred.title}</div>
                    <div className="text-sm font-semibold text-slate-800">{cred.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
