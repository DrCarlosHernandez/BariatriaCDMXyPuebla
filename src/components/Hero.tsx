import { ArrowRight, ShieldCheck, Award, Users, MessageCircle, MapPin, Calculator, Stethoscope, BadgeCheck } from 'lucide-react';
import { whatsappLink } from '@/components/WhatsAppButton';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 bg-gradient-animated animate-gradient" />
      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white animate-slide-in-left">
            {/* Name */}
            <h2 className="font-heading text-xl sm:text-2xl font-semibold text-primary-300 mb-1">
              Dr. Carlos de Jesús Hernández
            </h2>
            <p className="text-base sm:text-lg text-white/70 mb-4">
              Cirujano Bariatra Certificado en CDMX y Puebla
            </p>

            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full ring-1 ring-white/20 mb-6">
              <ShieldCheck className="w-4 h-4 text-accent-400" />
              <span className="text-sm font-medium text-white/90">Cirugía de Alta Especialidad</span>
            </div>

            {/* Main headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
              Recupera tu salud,{' '}
              <span className="bg-gradient-to-r from-primary-300 to-accent-400 bg-clip-text text-transparent">
                no solo tu peso.
              </span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-4 max-w-xl">
              Cirugía bariátrica y metabólica, con un enfoque integral, seguridad
              quirúrgica y acompañamiento multidisciplinario. Acompañamiento
              multidisciplinario completo para una transformación segura y duradera.
            </p>

            {/* Location */}
            <div className="flex items-start gap-2.5 mb-5 max-w-xl">
              <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/70 leading-relaxed">
                Centro Médico Nacional de Alta Especialidad 20 de Noviembre:
                cirugía bariátrica especializada para transformar tu salud.
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-col sm:flex-row gap-2.5 mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-accent-500/15 backdrop-blur-sm rounded-lg ring-1 ring-accent-400/30">
                <BadgeCheck className="w-4 h-4 text-accent-400" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  Consejo Mexicano de Cirugía General · C24013124
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-accent-500/15 backdrop-blur-sm rounded-lg ring-1 ring-accent-400/30">
                <BadgeCheck className="w-4 h-4 text-accent-400" />
                <span className="text-xs sm:text-sm font-medium text-white/90">
                  Cirugía Bariátrica · CB250033
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={whatsappLink('Hola, me gustaría agendar mi valoración con el Dr. Carlos de Jesús Hernández.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold text-base hover:bg-[#1ebe5d] transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Agenda tu valoración
              </a>
              <a
                href="#imc"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-base ring-1 ring-white/30 hover:bg-white/20 transition-all duration-300"
              >
                <Calculator className="w-5 h-5" />
                Calcula si eres candidato en 1 min
              </a>
              <a
                href="#procedimientos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-white/90 rounded-xl font-semibold text-base ring-1 ring-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <Stethoscope className="w-5 h-5" />
                Ver procedimientos
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {[
                { icon: Award, value: '15+', label: 'Años de experiencia' },
                { icon: Users, value: '500+', label: 'Cirugías realizadas' },
                { icon: ShieldCheck, value: '98%', label: 'Satisfacción' },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <stat.icon className="w-6 h-6 text-primary-300 mb-2 mx-auto sm:mx-0" />
                  <div className="font-heading text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-white/60 leading-tight mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] backdrop-blur-sm" />
              <div className="relative bg-white/5 backdrop-blur-md rounded-[2.5rem] ring-1 ring-white/20 p-8 overflow-hidden">
                {/* Floating cards */}
                <div className="space-y-4">
                  {[
                    { title: 'Manga Gástrica', desc: 'Mínima invasión · 1.5 hrs', color: 'from-primary-500/30 to-primary-700/30' },
                    { title: 'Bypass Gástrico', desc: 'Estándar de oro · 2-3 hrs', color: 'from-secondary-500/30 to-secondary-700/30' },
                    { title: 'Mini Bypass', desc: 'Recuperación rápida', color: 'from-accent-500/30 to-accent-700/30' },
                    { title: 'SADI-S', desc: 'Máxima pérdida de peso', color: 'from-primary-600/30 to-secondary-600/30' },
                  ].map((card, i) => (
                    <div
                      key={card.title}
                      className={`bg-gradient-to-r ${card.color} rounded-2xl p-5 ring-1 ring-white/10 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300 animate-fade-in-up`}
                      style={{ animationDelay: `${i * 0.15 + 0.3}s`, opacity: 0 }}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-heading font-semibold text-white text-lg">{card.title}</h3>
                          <p className="text-white/70 text-sm">{card.desc}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ring-1 ring-white/20">
                          <ArrowRight className="w-5 h-5 text-white/70" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-12 sm:h-20">
          <path d="M0 120V40C240 80 480 0 720 20C960 40 1200 100 1440 60V120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
