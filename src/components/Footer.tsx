import { Activity, Mail, MapPin, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/components/WhatsAppButton';

const socialLinks = [
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@drhernandezcirujano',
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path fill="#25F4EE" d="M19.6 6.32a7.4 7.4 0 0 1-4.07-1.27 7.45 7.45 0 0 1-1.39-1.3 7.3 7.3 0 0 1-1.06-1.9h-3.1v12.46a2.97 2.97 0 0 1-2.97 2.97 2.97 2.97 0 1 1 .9-5.8V7.98a6.36 6.36 0 1 0 4.46 6.07V8.55a10.4 10.4 0 0 0 6.07 1.94V7.34a7.4 7.4 0 0 1-.84-.05z" opacity="0.9" />
        <path fill="#FE2C55" d="M20.44 7.34v3.15a10.4 10.4 0 0 1-6.07-1.94v5.5a6.36 6.36 0 1 1-4.46-6.07v3.5a2.97 2.97 0 1 0-.9 5.8 2.97 2.97 0 0 0 2.97-2.97V1.85h3.1a7.3 7.3 0 0 0 1.06 1.9 7.45 7.45 0 0 0 1.39 1.3 7.4 7.4 0 0 0 4.07 1.27c.28.02.56.03.84.05z" opacity="0.9" />
        <path fill="#000" d="M20.44 7.34v3.15a10.4 10.4 0 0 1-6.07-1.94v5.5a6.36 6.36 0 1 1-4.46-6.07v3.5a2.97 2.97 0 1 0-.9 5.8 2.97 2.97 0 0 0 2.97-2.97V1.85h3.1a7.3 7.3 0 0 0 1.06 1.9 7.45 7.45 0 0 0 1.39 1.3 7.4 7.4 0 0 0 4.07 1.27c.28.02.56.03.84.05z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/dr.hernandezcirujano/',
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <defs>
          <radialGradient id="igGradFooter" cx="30%" cy="107%" r="135%">
            <stop offset="0%" stopColor="#FED576" />
            <stop offset="26%" stopColor="#F58529" />
            <stop offset="61%" stopColor="#DD2A7B" />
            <stop offset="100%" stopColor="#8134AF" />
          </radialGradient>
        </defs>
        <path fill="url(#igGradFooter)" d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
        <path fill="url(#igGradFooter)" d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4M18.41 4.15a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@Dr.Carlos.de.Jesus.Hern%C3%A1ndez',
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path fill="#FF0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8z" />
        <path fill="#fff" d="M9.6 15.6V8.4l6.2 3.6z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/Dr.CarlosHernandezCirujano',
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
        <path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
  },
];

const footerLinks = [
  {
    title: 'Procedimientos',
    links: [
      { label: 'Manga Gástrica', href: '#procedimientos' },
      { label: 'Bypass Gástrico', href: '#procedimientos' },
      { label: 'Mini Bypass', href: '#procedimientos' },
      { label: 'SADI-S', href: '#procedimientos' },
      { label: 'Cirugía de Revisión', href: '#procedimientos' },
    ],
  },
  {
    title: 'Información',
    links: [
      { label: 'Sobre nosotros', href: '#nosotros' },
      { label: 'Beneficios', href: '#beneficios' },
      { label: 'Calcula tu IMC', href: '#imc' },
      { label: 'Testimonios', href: '#testimonios' },
      { label: 'Preguntas frecuentes', href: '#faq' },
      { label: 'Ubicaciones', href: '#ubicaciones' },
      { label: 'Credenciales', href: '#credenciales' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-400 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-600">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-base text-white block leading-tight">
                  Dr. Carlos Hernández
                </span>
                <span className="text-[11px] text-primary-400 leading-tight">
                  Cirujano Bariatra · CDMX y Puebla
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Cirugía bariátrica y metabólica de excelencia con enfoque
              multidisciplinario.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wide mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm hover:text-primary-400 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wide mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm hover:text-primary-400 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>WhatsApp: +52 56 6605 2103</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@drhernandezbariatricsurgeon.com"
                  className="flex items-start gap-3 text-sm hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span className="break-all">info@drhernandezbariatricsurgeon.com</span>
                </a>
              </li>
              <li>
                <a
                  href="#ubicaciones"
                  className="flex items-start gap-3 text-sm hover:text-primary-400 transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Ver ubicaciones</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* CONACEM certifications */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <p className="text-xs font-bold uppercase tracking-wider text-primary-400 mb-3 text-center sm:text-left">
            Certificaciones CONACEM
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center sm:justify-start mb-4">
            <a
              href="https://conacem.mx/conacem/certificados/registro.php?a=RUZBRVNP&c=RGVzYXJyb2xsYWRv&e3=SW5nLiBMdWlzIEFsYmVydG8gRGVsZ2FkbyBTb3Nh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-full bg-primary-600 text-white text-xs sm:text-sm font-semibold hover:bg-primary-700 transition-colors text-center"
            >
              Cirugía General No. C24013124
            </a>
            <a
              href="https://conacem.mx/conacem/certificados/registro.php?a=QUFFR1Na&c=RGVzYXJyb2xsYWRv&e3=SW5nLiBMdWlzIEFsYmVydG8gRGVsZ2FkbyBTb3Nh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[40px] px-4 py-2 rounded-full bg-accent-600 text-white text-xs sm:text-sm font-semibold hover:bg-accent-700 transition-colors text-center"
            >
              Cirugía Bariátrica No. CB250033
            </a>
          </div>

          <p className="text-xs font-bold uppercase tracking-wider text-primary-400 mb-1.5 text-center sm:text-left">
            Cédulas profesionales · Dr. Carlos de Jesús Hernández López
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center sm:justify-start">
            <span className="inline-flex items-center justify-center min-h-[36px] px-4 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-semibold text-center">
              Cédula profesional 11456160
            </span>
            <span className="inline-flex items-center justify-center min-h-[36px] px-4 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs sm:text-sm font-semibold text-center">
              Cédula profesional 14461131
            </span>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Dr. Carlos de Jesús Hernández López. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
