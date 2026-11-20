import { MapPin, Clock, Navigation, Phone } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  hours: string;
  phone: string;
  mapsUrl: string;
}

const locations: Location[] = [
  {
    id: 'cdmx',
    name: 'CDMX — Centro Médico 20 de Noviembre',
    address: 'Av. Coyoacán 2000, Colonia del Valle',
    city: 'Ciudad de México',
    hours: 'Lun a Vie: 9:00 – 19:00 hrs',
    phone: '(55) 5555 1234',
    mapsUrl: 'https://maps.google.com/?q=Centro+Medico+20+de+Noviembre+CDMX',
  },
  {
    id: 'puebla',
    name: 'Puebla — Consultorio',
    address: 'Av. Reforma 1234, Consultorio 405',
    city: 'Puebla, Puebla',
    hours: 'Atención con cita previa',
    phone: '(222) 400 5502',
    mapsUrl: 'https://maps.google.com/?q=Puebla+Puebla+Mexico',
  },
];

export default function Locations() {
  return (
    <section id="ubicaciones" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-5">
            Ubicaciones
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-5 text-balance">
            Dónde puedes atenderte
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Atendemos en CDMX y Puebla para brindarte atención cercana y cómoda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className="group bg-gradient-to-br from-slate-50 to-primary-50/30 rounded-2xl p-7 border border-slate-100 hover:border-primary-200 hover:shadow-xl transition-all duration-400"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-slate-800">{loc.name}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{loc.city}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>{loc.hours}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-600">
                  <Phone className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>{loc.phone}</span>
                </div>
              </div>

              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-primary-700 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-all duration-300 border border-primary-200"
              >
                <Navigation className="w-4 h-4" />
                Cómo llegar
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Si no puedes acudir a ninguna de estas ubicaciones, escríbenos por
          WhatsApp y buscaremos la mejor opción para ti.
        </p>
      </div>
    </section>
  );
}
