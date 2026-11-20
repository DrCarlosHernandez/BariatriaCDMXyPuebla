import {
  Activity,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Brain,
  Utensils,
  Dumbbell,
  Smile,
  type LucideIcon,
} from 'lucide-react';

export interface Procedure {
  id: string;
  name: string;
  shortName: string;
  description: string;
  details: string[];
  duration: string;
  hospitalStay: string;
  recovery: string;
  expectedLoss: string;
  icon: LucideIcon;
  highlight: boolean;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: string;
  name: string;
  procedure: string;
  weightLoss: string;
  quote: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Credential {
  id: string;
  title: string;
  value: string;
}

export const benefits: Benefit[] = [
  {
    id: 'diabetes',
    title: 'Remisión de Diabetes Tipo 2',
    description:
      'Hasta el 80% de los pacientes experimentan mejoría significativa o remisión completa de la diabetes tipo 2 tras la cirugía bariátrica.',
    icon: Activity,
  },
  {
    id: 'hipertension',
    title: 'Control de Hipertensión',
    description:
      'La mayoría de los pacientes reducen o eliminan la necesidad de medicamentos para la presión arterial alta.',
    icon: HeartPulse,
  },
  {
    id: 'apnea',
    title: 'Mejora de Apnea del Sueño',
    description:
      'La pérdida de peso sostenida alivia significativamente los síntomas de la apnea obstructiva del sueño.',
    icon: Brain,
  },
  {
    id: 'articular',
    title: 'Alivio del Dolor Articular',
    description:
      'Menos carga en rodillas y caderas se traduce en mayor movilidad y reducción del dolor crónico.',
    icon: Stethoscope,
  },
  {
    id: 'cardiovascular',
    title: 'Reducción del Riesgo Cardiovascular',
    description:
      'Disminuye el riesgo de infarto, accidente cerebrovascular y otras enfermedades del corazón.',
    icon: ShieldCheck,
  },
  {
    id: 'calidad',
    title: 'Mejor Calidad de Vida',
    description:
      'Más energía, autoestima renovada y capacidad para disfrutar actividades que antes eran limitadas.',
    icon: Smile,
  },
];

export const procedures: Procedure[] = [
  {
    id: 'manga-gastrica',
    name: 'Manga Gástrica',
    shortName: 'Manga Gástrica',
    description:
      'También conocida como gastrectomía vertical. Se extirpa aproximadamente el 80% del estómago, creando un tubo estrecho con forma de banana que limita la cantidad de alimento y reduce la hormona del apetito (grelina).',
    details: [
      'Procedimiento restrictivo que reduce el tamaño del estómago',
      'Disminuye la producción de grelina, hormona que regula el apetito',
      'No altera el tracto intestinal — absorción normal de nutrientes',
      'Técnica laparoscópica de mínima invasión',
      'Menor tiempo quirúrgico que el bypass gástrico',
    ],
    duration: '1.5 – 2 horas',
    hospitalStay: '1 – 2 noches',
    recovery: '1 – 2 semanas',
    expectedLoss: '60 – 70% del exceso de peso',
    icon: Stethoscope,
    highlight: true,
  },
  {
    id: 'bypass-gastrico',
    name: 'Bypass Gástrico en Y de Roux',
    shortName: 'Bypass Gástrico',
    description:
      'Considerado el estándar de oro en cirugía bariátrica. Crea una pequeña bolsa gástrica y la conecta directamente al intestino delgado, combinando restricción y mala absorción para una pérdida de peso significativa.',
    details: [
      'Doble mecanismo: restricción + mala absorción controlada',
      'Excelente para pacientes con diabetes tipo 2 o reflujo severo',
      'Produce cambios hormonales que favorecen la saciedad',
      'Mayor pérdida de peso comparado con la manga gástrica',
      'Técnica laparoscópica con cirugía robótica disponible',
    ],
    duration: '2 – 3 horas',
    hospitalStay: '2 – 3 noches',
    recovery: '2 – 3 semanas',
    expectedLoss: '70 – 80% del exceso de peso',
    icon: HeartPulse,
    highlight: true,
  },
  {
    id: 'mini-bypass',
    name: 'Mini Bypass Gástrico',
    shortName: 'Mini Bypass',
    description:
      'Una variante simplificada del bypass gástrico tradicional. Crea una bolsa gástrica alargada conectada a una sola anastomosis intestinal, con resultados comparables y menor tiempo quirúrgico.',
    details: [
      'Una sola anastomosis — menor complejidad técnica',
      'Resultados de pérdida de peso similares al bypass tradicional',
      'Tiempo quirúrgico más corto',
      'Excelente opción para pacientes con BMI elevado',
      'Requiere suplementación nutricional de por vida',
    ],
    duration: '1.5 – 2 horas',
    hospitalStay: '1 – 2 noches',
    recovery: '1 – 2 semanas',
    expectedLoss: '65 – 75% del exceso de peso',
    icon: Activity,
    highlight: false,
  },
  {
    id: 'sadi-s',
    name: 'SADI-S',
    shortName: 'SADI-S',
    description:
      'Anastomosis duodeno-ileal de paso único con manga gástrica. Procedimiento de segunda etapa para pacientes con obesidad extrema, combinando manga gástrica con derivación intestinal simplificada.',
    details: [
      'Procedimiento híbrido: manga + derivación intestinal',
      'Indicado para obesidad mórbida extrema (BMI > 50)',
      'Máxima pérdida de peso entre todos los procedimientos',
      'Una sola anastomosis — menos complicaciones que la derivación clásica',
      'Requiere seguimiento nutricional estricto',
    ],
    duration: '2.5 – 3.5 horas',
    hospitalStay: '2 – 3 noches',
    recovery: '2 – 4 semanas',
    expectedLoss: '80 – 90% del exceso de peso',
    icon: ShieldCheck,
    highlight: false,
  },
  {
    id: 'revision',
    name: 'Cirugía de Revisión',
    shortName: 'Cirugía de Revisión',
    description:
      'Para pacientes que ya se sometieron a una cirugía bariátrica y presentan complicaciones, reganancia de peso o resultados insuficientes. Se evalúa cada caso individualmente para determinar el mejor enfoque.',
    details: [
      'Conversión de banda gástrica a manga o bypass',
      'Conversión de manga a bypass por reganancia o reflujo',
      'Corrección de complicaciones de cirugías previas',
      'Evaluación minuciosa con estudios endoscópicos y radiológicos',
      'Enfoque personalizado según anatomía y objetivos',
    ],
    duration: 'Variable',
    hospitalStay: '1 – 3 noches',
    recovery: '2 – 4 semanas',
    expectedLoss: 'Depende del caso',
    icon: Brain,
    highlight: false,
  },
  {
    id: 'balon-intragastrico',
    name: 'Balón Intragástrico',
    shortName: 'Balón Gástrico',
    description:
      'Opción no quirúrgica para pacientes con sobrepeso u obesidad leve. Se coloca un balón de silicona en el estómago mediante endoscopia, ocupando espacio y promoviendo la saciedad precoz.',
    details: [
      'Procedimiento no quirúrgico — sin incisiones',
      'Colocación por endoscopia ambulatoria',
      'Ideal para BMI entre 27 y 35',
      'Balón temporal (6 – 12 meses) con programa nutricional',
      'Puente hacia una cirugía definitiva si es necesario',
    ],
    duration: '20 – 30 minutos',
    hospitalStay: 'Ambulatorio',
    recovery: '3 – 5 días',
    expectedLoss: '15 – 25% del peso total',
    icon: Utensils,
    highlight: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Mariana G.',
    procedure: 'Manga Gástrica',
    weightLoss: '38 kg en 10 meses',
    quote:
      'El Dr. Hernández cambió mi vida. Su profesionalismo y seguimiento fueron excepcionales. Pude dejar mis medicamentos para la diabetes y hoy tengo una vida completamente activa.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Roberto M.',
    procedure: 'Bypass Gástrico',
    weightLoss: '52 kg en 14 meses',
    quote:
      'Excelente médico. Me explicó todo con claridad y siempre estuvo disponible para mis dudas. El equipo nutricional y psicológico me acompañaron en cada etapa del proceso.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Patricia L.',
    procedure: 'Manga Gástrica',
    weightLoss: '31 kg en 8 meses',
    quote:
      'Tenía mucho miedo antes de decidir la cirugía. El Dr. Hernández me transmitió confianza desde la primera consulta. Hoy duermo sin CPAP y mis rodillas ya no me duelen.',
    rating: 5,
  },
  {
    id: 't4',
    name: 'Javier R.',
    procedure: 'Mini Bypass',
    weightLoss: '45 kg en 12 meses',
    quote:
      'Mi cirugía de revisión salió perfecta. Después de fallar con la banda gástrica, el Dr. Hernández me ofreció el mini bypass y los resultados superaron mis expectativas.',
    rating: 5,
  },
];

export const faqItems: FAQItem[] = [
  {
    id: 'f1',
    question: '¿Soy candidato para cirugía bariátrica?',
    answer:
      'Generalmente, son candidatos personas con un índice de masa corporal (IMC) mayor a 35 con condiciones de salud relacionadas (diabetes, hipertensión, apnea) o IMC mayor a 40 sin comorbilidades. También se considera para IMC entre 30 y 35 con diabetes tipo 2 mal controlada. La evaluación final la realiza el cirujano considerando tu historial médico completo.',
  },
  {
    id: 'f2',
    question: '¿La cirugía bariátrica es segura?',
    answer:
      'Sí. La cirugía bariátrica realizada por un cirujano certificado en un hospital acreditado tiene una tasa de complicaciones muy baja (menos del 2%) y una mortalidad inferior al 0.1%. Las técnicas laparoscópicas de mínima invasión han reducido significativamente los riesgos. Es más seguro convivir con los riesgos de la obesidad que someterse a la cirugía.',
  },
  {
    id: 'f3',
    question: '¿Cuánto tiempo de recuperación necesito?',
    answer:
      'La mayoría de los pacientes regresan a sus actividades cotidianas en 1 a 2 semanas tras una manga gástrica, y 2 a 3 semanas tras un bypass. El dolor postoperatorio es mínimo gracias a la técnica laparoscópica. Se recomienda caminar desde el primer día y evitar esfuerzos intensos durante 4 semanas.',
  },
  {
    id: 'f4',
    question: '¿Volveré a recuperar el peso perdido?',
    answer:
      'La cirugía es una herramienta, no una solución mágica. Con adherencia al plan nutricional, actividad física y seguimiento médico, la pérdida de peso se mantiene a largo plazo en la gran mayoría de los casos. El equipo multidisciplinario te acompaña para garantizar resultados sostenibles.',
  },
  {
    id: 'f5',
    question: '¿Qué cambios alimentarios debo hacer después de la cirugía?',
    answer:
      'Existen etapas progresivas: la primera semana con líquidos claros, luego purés, alimentos blandos y finalmente sólidos. A largo plazo se recomienda una dieta rica en proteínas, porciones pequeñas, masticación lenta y suplementación vitamínica permanente. El nutrición especializado diseña tu plan personalizado.',
  },
  {
    id: 'f6',
    question: '¿La cirugía está cubierta por seguro de gastos médicos?',
    answer:
      'Algunos seguros de gastos médicos mayores cubren parcial o totalmente la cirugía bariátrica cuando existe justificación médica. Se recomienda verificar directamente con tu aseguradora. También ofrecemos planes de financiamiento y opciones de pago adaptadas a tu presupuesto.',
  },
  {
    id: 'f7',
    question: '¿Qué equipo acompaña el proceso quirúrgico?',
    answer:
      'El abordaje es multidisciplinario: cirujano bariatra, nutricionista, psicólogo y médico internista trabajan en conjunto desde la valoración preoperatoria hasta el seguimiento a largo plazo. Esto garantiza los mejores resultados y seguridad en cada etapa del proceso.',
  },
];

export const credentials: Credential[] = [
  { id: 'c1', title: 'Cédula Profesional', value: '11456160' },
  { id: 'c2', title: 'Cédula de Especialidad', value: '14461131' },
  { id: 'c3', title: 'Certificación', value: 'CB250033' },
  { id: 'c4', title: 'Consejo Mexicano de Cirugía General', value: 'Certificado' },
];
