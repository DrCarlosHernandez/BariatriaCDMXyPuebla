import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, User, MessageSquare, MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/components/WhatsAppButton';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contacto" className="relative py-24 bg-gradient-to-b from-slate-50 to-primary-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-5">
              Contacto
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6 text-balance">
              Agenda tu consulta hoy mismo
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Da el primer paso hacia una vida más saludable. Completa el
              formulario y nuestro equipo se pondrá en contacto contigo para
              agendar tu valoración con el Dr. Hernández.
            </p>

            <div className="space-y-4">
              {[
                { icon: MessageCircle, label: 'WhatsApp', value: '+52 56 6605 2103', href: whatsappLink() },
                { icon: Phone, label: 'Teléfono', value: '(686) 400 5502', href: 'tel:+526864005502' },
                { icon: Mail, label: 'Correo electrónico', value: 'info@drhernandezbariatricsurgeon.com', href: 'mailto:info@drhernandezbariatricsurgeon.com' },
                { icon: Clock, label: 'Horario de atención', value: 'Lun a Vie: 9:00 – 19:00 hrs', href: undefined },
              ].map((item) => {
                const content = (
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">{item.label}</div>
                      <div className="text-sm font-semibold text-slate-800">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-10">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-slate-800 mb-3">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-slate-600 max-w-sm">
                  Gracias por contactarnos. Nuestro equipo se comunicará contigo
                  muy pronto para agendar tu consulta.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(55) 1234 5678"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="tu@correo.com"
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Mensaje
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Cuéntanos sobre tu caso o dudas..."
                      className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all text-slate-800 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary-600 text-white rounded-xl font-semibold text-base hover:bg-primary-700 transition-all duration-300 shadow-lg shadow-primary-600/20 hover:scale-[1.02]"
                >
                  Enviar solicitud
                  <Send className="w-5 h-5" />
                </button>
                <div className="relative flex items-center my-2">
                  <div className="flex-1 border-t border-slate-200" />
                  <span className="px-3 text-xs text-slate-400 font-medium">o</span>
                  <div className="flex-1 border-t border-slate-200" />
                </div>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] text-white rounded-xl font-semibold text-base hover:bg-[#1ebe5d] transition-all duration-300 shadow-lg shadow-green-500/20 hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Escríbenos directo por WhatsApp
                </a>
                <p className="text-xs text-slate-400 text-center">
                  Al enviar este formulario aceptas ser contactado por nuestro
                  equipo médico.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
