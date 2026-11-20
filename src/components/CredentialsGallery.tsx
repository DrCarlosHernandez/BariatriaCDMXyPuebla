import { useEffect, useId, useMemo, useState } from 'react';
import { Award, GraduationCap, X, ChevronLeft, ChevronRight } from 'lucide-react';

const filtros = [
  { id: 'todas', etiqueta: 'Todas' },
  { id: 'certificacion', etiqueta: 'Certificaciones' },
  { id: 'diploma', etiqueta: 'Diplomas y Cursos' },
];

interface Documento {
  id: string;
  categoria: string;
  titulo: string;
  institucion: string;
  detalle: string;
  src: string;
}

const documentos: Documento[] = [
  {
    id: 'conacem-general',
    categoria: 'certificacion',
    titulo: 'Certificado CONACEM — Especialista en Cirugía General',
    institucion: 'Consejo Mexicano de Cirugía General, A.C.',
    detalle: 'Vigencia: 09 de marzo de 2024 a 09 de marzo de 2029',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/2fd014986955caa539ba10cb2eb18af3.png',
  },
  {
    id: 'conacem-bariatrica',
    categoria: 'certificacion',
    titulo: 'Certificado CONACEM — Especialista en Cirugía Bariátrica',
    institucion: 'Consejo Mexicano de Cirugía General, A.C.',
    detalle: 'Vigencia: 07 de junio de 2025 a 07 de junio de 2030',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/7928961398714180c49884c3d65cf158.png',
  },
  {
    id: 'atls',
    categoria: 'diploma',
    titulo: 'ATLS® Course for Doctors',
    institucion: 'ACS Committee on Trauma',
    detalle: 'Emisión: 13/10/2019 · Vencimiento indicado: 13/10/2023',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/b0cd349fcf30699fdbaea1c0fe267775.png',
  },
  {
    id: 'puc-basico',
    categoria: 'diploma',
    titulo: 'Curso de entrenamiento de habilidades en laparoscopía. Nivel básico',
    institucion: 'Pontificia Universidad Católica de Chile',
    detalle: '19 de agosto al 13 de septiembre de 2024 · Nota 9.5 · 54 horas',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/a86d85c698618e6785434589a2106972.png',
  },
  {
    id: 'puc-avanzado',
    categoria: 'diploma',
    titulo: 'Curso de entrenamiento de habilidades en laparoscopía. Nivel avanzado',
    institucion: 'Pontificia Universidad Católica de Chile',
    detalle: '17 de septiembre al 27 de octubre de 2024 · Nota 9,6 · 54 horas',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/9ad1e24a3a780e97716993ce0fb80205.png',
  },
  {
    id: 'cmn-lap',
    categoria: 'diploma',
    titulo: 'Diploma: Entrenamiento continuo en cirugía laparoscópica avanzada',
    institucion: 'Centro Médico Nacional "20 de Noviembre" · Servicio de Cirugía Experimental',
    detalle: '1 de marzo de 2024 al 28 de febrero de 2025 · Como alumno',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/596cdc9ba01268bbf959840c43195794.jpg',
  },
  {
    id: 'cmcoem',
    categoria: 'diploma',
    titulo: 'Constancia: Curso de Alta Especialidad',
    institucion: 'Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas, A.C.',
    detalle: '1 de marzo de 2024 al 28 de febrero de 2025 · Folio 4984',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/f110a28994f9ab7c95b5b0c72610752d.png',
  },
  {
    id: 'intuitive',
    categoria: 'diploma',
    titulo: 'Evaluación en línea del sistema quirúrgico da Vinci Si',
    institucion: 'Intuitive',
    detalle: 'Sistema Si · Sistema operativo P9 · 03/09/2024',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/2cc39c2c332b822d03abc9b9d55fa2a4.png',
  },
  {
    id: 'nih',
    categoria: 'diploma',
    titulo: 'Protecting Human Research Participants',
    institucion: 'NIH Office of Extramural Research',
    detalle: 'Fecha de conclusión: 06/30/2020 · Número 2885878',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/85a0ac178b3b5c00334b4125c124b586.png',
  },
  {
    id: 'cureus',
    categoria: 'diploma',
    titulo: 'Carta de participación como revisor',
    institucion: 'Cureus Journal of Medical Science',
    detalle: '24 de noviembre de 2023',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/772f52b992305d6da6ce947a8f7bfdbc.jpg',
  },
  {
    id: 'cmcoem-xxvii-cartel',
    categoria: 'diploma',
    titulo: 'Acalasia tipo II posterior a cirugía bariátrica (trabajo libre)',
    institucion: 'XXVII Congreso Internacional CMCOEM',
    detalle: 'Modalidad: cartel. 16 al 19 de julio de 2025, Tijuana, B.C.',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/80f963a1584368f7732f0d3f4647618c.png',
  },
  {
    id: 'cmcoem-xxvii-asistencia',
    categoria: 'diploma',
    titulo: 'Asistencia al XXVII Congreso Internacional CMCOEM',
    institucion: 'Colegio Mexicano de Cirugía para la Obesidad y Enfermedades Metabólicas, A.C.',
    detalle: '17 al 19 de julio de 2025, Tijuana, Baja California.',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/6255fc9460b4ca8812b4085a8a2b2cc2.png',
  },
  {
    id: 'cmcoem-xxvi-sangrado',
    categoria: 'diploma',
    titulo: 'Detección y resolución de sangrado en gastrectomía vertical transquirúrgico por endoscopia',
    institucion: 'XXVI Congreso Internacional CMCOEM',
    detalle: 'Modalidad: caso clínico. 10 al 13 de julio de 2024, Mazatlán, Sinaloa.',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/ff6da87b1d31518cac9387506e95ccdb.png',
  },
  {
    id: 'amce-2024',
    categoria: 'diploma',
    titulo: 'XXXII Congreso Internacional de Cirugía Endoscópica y XVI ALACE',
    institucion: 'Asociación Mexicana de Cirugía Endoscópica, A.C.',
    detalle: '2, 3 y 4 de mayo de 2024, Puerto Vallarta, Jalisco.',
    src: 'https://horizons-cdn.hostinger.com/0bf8b624-d911-4fbb-8c8c-441e04461e2a/468bfc7a90d3cc43aeb1cf0b594803a3.png',
  },
];

export default function CredentialsGallery() {
  const [filtro, setFiltro] = useState('todas');
  const [abierto, setAbierto] = useState<number | null>(null);
  const tituloId = useId();

  const visibles = useMemo(
    () => (filtro === 'todas' ? documentos : documentos.filter((d) => d.categoria === filtro)),
    [filtro],
  );

  useEffect(() => {
    if (abierto == null) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAbierto(null);
      if (e.key === 'ArrowRight') setAbierto((i) => ((i ?? 0) + 1) % visibles.length);
      if (e.key === 'ArrowLeft') setAbierto((i) => ((i ?? 0) - 1 + visibles.length) % visibles.length);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [abierto, visibles.length]);

  const actual = abierto != null ? visibles[abierto] : null;

  return (
    <section
      id="credenciales"
      className="py-20 bg-gradient-to-b from-white to-slate-50 scroll-mt-24"
      aria-labelledby={tituloId}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
            <Award className="w-4 h-4" />
            Documentos
          </span>
          <h2
            id={tituloId}
            className="font-heading text-3xl sm:text-4xl font-bold text-slate-800 mb-4 leading-tight text-balance"
          >
            Certificaciones, diplomas y constancias
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Certificaciones oficiales de consejos médicos y documentos de formación.
            Pulsa una imagen para verla en tamaño completo.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filtros.map((f) => {
            const activo = filtro === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFiltro(f.id)}
                className={`min-h-[44px] px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  activo
                    ? 'bg-primary-600 text-white border-primary-600 shadow-md'
                    : 'bg-white text-primary-700 border-primary-200 hover:border-primary-400'
                }`}
              >
                {f.etiqueta}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {visibles.map((doc, idx) => (
            <li key={doc.id}>
              <button
                onClick={() => setAbierto(idx)}
                className="group h-full w-full text-left rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-300"
              >
                <span className="block aspect-[3/4] rounded-xl overflow-hidden bg-slate-50 border border-slate-100 mb-3">
                  <img
                    src={doc.src}
                    alt={doc.titulo}
                    className="w-full h-full object-contain object-top"
                    loading="lazy"
                  />
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-accent-600 mb-1">
                  {doc.categoria === 'certificacion' ? (
                    <Award className="w-3.5 h-3.5" />
                  ) : (
                    <GraduationCap className="w-3.5 h-3.5" />
                  )}
                  {doc.categoria === 'certificacion' ? 'Certificación oficial' : 'Diploma o curso'}
                </span>
                <span className="block text-sm font-bold text-slate-800 leading-snug">{doc.titulo}</span>
                <span className="block text-xs text-slate-500 mt-1 leading-relaxed">{doc.institucion}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {actual && (
        <div
          className="fixed inset-0 z-[80] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setAbierto(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 px-5 py-4 border-b border-slate-200">
              <div className="min-w-0">
                <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">{actual.titulo}</p>
                <p className="text-xs text-slate-500 mt-0.5">{actual.detalle}</p>
              </div>
              <button
                onClick={() => setAbierto(null)}
                className="shrink-0 w-11 h-11 rounded-full border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-100 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="relative flex-1 min-h-0 bg-slate-50 flex items-center justify-center p-4">
              <img src={actual.src} alt={actual.titulo} className="max-h-[72vh] w-auto max-w-full object-contain" />
              {visibles.length > 1 && (
                <>
                  <button
                    onClick={() => setAbierto((i) => ((i ?? 0) - 1 + visibles.length) % visibles.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm hover:bg-white"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setAbierto((i) => ((i ?? 0) + 1) % visibles.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 border border-slate-200 text-slate-600 flex items-center justify-center shadow-sm hover:bg-white"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
