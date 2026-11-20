import { useEffect, useState } from 'react';
import { Menu, X, Phone, Activity, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/components/WhatsAppButton';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#procedimientos', label: 'Procedimientos' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#imc', label: 'Calcula tu IMC' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'Preguntas' },
  { href: '#ubicaciones', label: 'Ubicaciones' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2.5 group">
          <div
            className={`flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 group-hover:scale-110 ${
              scrolled ? 'bg-primary-600' : 'bg-white/15 backdrop-blur-sm ring-1 ring-white/30'
            }`}
          >
            <Activity className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-white'}`} />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-heading font-bold text-base leading-tight transition-colors ${
                scrolled ? 'text-slate-800' : 'text-white'
              }`}
            >
              Dr. Carlos de Jesús Hernández
            </span>
            <span
              className={`text-[11px] leading-tight transition-colors ${
                scrolled ? 'text-primary-600' : 'text-white/80'
              }`}
            >
              Cirujano Bariatra Certificado · CDMX y Puebla
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? scrolled
                      ? 'bg-primary-50 text-primary-700'
                      : 'bg-white/15 text-white'
                    : scrolled
                      ? 'text-slate-600 hover:bg-slate-100 hover:text-primary-700'
                      : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className={`inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 hover:scale-105 ${
              scrolled
                ? 'bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-md'
                : 'bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-lg'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <a
            href="#contacto"
            className={`hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${
              scrolled
                ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg'
                : 'bg-white text-primary-700 hover:bg-white/90 shadow-lg'
            }`}
          >
            <Phone className="w-4 h-4" />
            Agenda tu valoración
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
          }`}
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white mx-4 mt-3 rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
          <ul className="flex flex-col p-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="p-2 space-y-2">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-[#25D366] text-white hover:bg-[#1ebe5d] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm bg-primary-600 text-white hover:bg-primary-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Agenda tu valoración
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
