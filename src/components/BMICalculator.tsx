import { useState, useMemo } from 'react';
import { Calculator, Activity, CheckCircle2, Target, TrendingDown, Send, MessageCircle, CreditCard, ExternalLink, CalendarCheck, Info } from 'lucide-react';
import { whatsappLink } from '@/components/WhatsAppButton';

const CONDITIONS_LIST = [
  { id: 'diabetes', label: 'Diabetes tipo 2' },
  { id: 'hypertension', label: 'Hipertensión' },
  { id: 'cholesterol', label: 'Colesterol / triglicéridos altos' },
  { id: 'apnea', label: 'Apnea del sueño' },
  { id: 'fatty_liver', label: 'Hígado graso' },
  { id: 'joint_pain', label: 'Problemas articulares por peso' },
  { id: 'insulin_resistance', label: 'Resistencia a la insulina' },
  { id: 'fertility', label: 'Problemas de fertilidad' },
  { id: 'reflux', label: 'Reflujo gastroesofágico' },
  { id: 'other', label: 'Otra enfermedad asociada' },
  { id: 'none', label: 'Ninguna' },
];

const SOPHIA_MONTHS = [0, 1, 3, 12, 24, 60];
const SOPHIA_MEDIAN = [1.0, 0.895, 0.810, 0.695, 0.621, 0.673];
const SOPHIA_MIN = [1.0, 0.860, 0.760, 0.663, 0.578, 0.631];
const SOPHIA_MAX = [1.0, 0.930, 0.860, 0.757, 0.715, 0.757];

interface BMIData {
  bmi: number;
  category: string;
  candidacyLevel: 'high' | 'medium' | 'low';
  message: string;
  pesoIdealBase: number;
  excesoPeso: number;
  pesoIdealAjustado: number;
  medianSeries: number[];
  minSeries: number[];
  maxSeries: number[];
}

function TrajectoryChart({
  median,
  min,
  max,
}: {
  median: number[];
  min: number[];
  max: number[];
}) {
  const w = 520;
  const h = 260;
  const pad = { left: 50, right: 20, top: 20, bottom: 40 };
  const cw = w - pad.left - pad.right;
  const ch = h - pad.top - pad.bottom;

  const allValues = [...median, ...min, ...max];
  const yMin = Math.floor(Math.min(...allValues) * 0.9);
  const yMax = Math.ceil(Math.max(...allValues) * 1.05);

  const xStep = cw / (SOPHIA_MONTHS.length - 1);

  const toX = (i: number) => pad.left + i * xStep;
  const toY = (val: number) => pad.top + ch - ((val - yMin) / (yMax - yMin)) * ch;

  // Build smooth path using simple line segments
  const buildPath = (series: number[]) =>
    series.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(v)}`).join(' ');

  // Build area between max and min
  const areaPath =
    max.map((v, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(v)}`).join(' ') +
    ' ' +
    min
      .slice()
      .reverse()
      .map((v, i) => `L ${toX(SOPHIA_MONTHS.length - 1 - i)} ${toY(v)}`)
      .join(' ') +
    ' Z';

  const yTicks = 4;
  const tickValues = Array.from({ length: yTicks + 1 }, (_, i) =>
    Math.round(yMin + ((yMax - yMin) / yTicks) * i),
  );

  return (
    <div className="w-full overflow-x-auto">
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto min-w-[400px]">
        {/* Grid lines */}
        {tickValues.map((tv, i) => {
          const y = pad.top + ch - (i / yTicks) * ch;
          return (
            <g key={i}>
              <line x1={pad.left} y1={y} x2={w - pad.right} y2={y} stroke="rgba(255,255,255,0.08)" />
              <text x={pad.left - 8} y={y + 4} fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="end">
                {tv}
              </text>
            </g>
          );
        })}

        {/* X labels */}
        {SOPHIA_MONTHS.map((m, i) => (
          <text key={i} x={toX(i)} y={h - 12} fill="rgba(255,255,255,0.5)" fontSize="10" textAnchor="middle">
            {m === 0 ? 'Hoy' : `M${m}`}
          </text>
        ))}

        {/* Area between min and max */}
        <path d={areaPath} fill="rgba(76,175,127,0.18)" stroke="none" />

        {/* Median line (dashed) */}
        <path d={buildPath(median)} fill="none" stroke="#4CAF7F" strokeWidth="2.5" strokeDasharray="5 4" />

        {/* Data points */}
        {median.map((v, i) => (
          <circle key={i} cx={toX(i)} cy={toY(v)} r="4" fill="#4CAF7F" stroke="white" strokeWidth="1.5" />
        ))}

        {/* Axis titles */}
        <text x={pad.left + cw / 2} y={h - 2} fill="rgba(255,255,255,0.7)" fontSize="10" textAnchor="middle" fontWeight="600">
          Meses después de la cirugía
        </text>
        <text
          x={-pad.top - ch / 2}
          y={14}
          fill="rgba(255,255,255,0.7)"
          fontSize="10"
          textAnchor="middle"
          fontWeight="600"
          transform="rotate(-90)"
        >
          Peso (kg)
        </text>
      </svg>
    </div>
  );
}

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [isAsian, setIsAsian] = useState(false);
  const [conditions, setConditions] = useState<string[]>([]);
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [result, setResult] = useState<BMIData | null>(null);
  const [contactSent, setContactSent] = useState(false);

  const toggleCondition = (id: string) => {
    setConditions((prev) => {
      if (id === 'none') return prev.includes('none') ? [] : ['none'];
      const withoutNone = prev.filter((c) => c !== 'none');
      if (withoutNone.includes(id)) return withoutNone.filter((c) => c !== id);
      return [...withoutNone, id];
    });
  };

  const calculate = () => {
    const rawHeight = parseFloat(String(height).replace(',', '.'));
    const weightKg = parseFloat(weight);
    if (!rawHeight || isNaN(rawHeight) || !weightKg || isNaN(weightKg)) return;

    const heightCm = rawHeight < 3 ? rawHeight * 100 : rawHeight;
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    const roundedBMI = parseFloat(bmi.toFixed(1));
    const activeConditions = conditions.filter((c) => c !== 'none');
    const hasMetabolic = activeConditions.some((c) => ['diabetes', 'insulin_resistance'].includes(c));
    const hasComorbidities = activeConditions.length > 0;

    let category = '';
    let candidacyLevel: 'high' | 'medium' | 'low' = 'low';
    let message = '';

    if (bmi < 18.5) category = 'Bajo Peso';
    else if (bmi < 25) category = 'Peso Normal';
    else if (bmi < 30) category = 'Sobrepeso';
    else if (bmi < 35) category = 'Obesidad Grado I';
    else if (bmi < 40) category = 'Obesidad Grado II';
    else category = 'Obesidad Grado III (Mórbida)';

    if (isAsian) {
      if (bmi >= 27.5) {
        candidacyLevel = 'high';
        message = hasComorbidities
          ? 'Candidato Alta Prioridad. Eres un candidato ideal para cirugía bariátrica.'
          : 'Candidato Ideal para Cirugía Metabólica y Bariátrica. Tu perfil califica para un procedimiento bariátrico; una valoración personalizada confirmará la mejor opción para ti.';
      } else if (bmi >= 25 && hasComorbidities) {
        candidacyLevel = 'high';
        message = 'Candidato Ideal para Cirugía Metabólica y Bariátrica. Tu perfil con padecimientos asociados califica perfectamente para un procedimiento que puede mejorar significativamente tu salud.';
      } else if (bmi >= 23 && bmi < 25) {
        candidacyLevel = 'low';
        message = 'Tienes sobrepeso según los estándares asiáticos. Te invitamos a una valoración médica personalizada para evaluar alternativas como nutrición clínica o medicina bariátrica.';
      } else if (bmi >= 18.5 && bmi < 23) {
        candidacyLevel = 'low';
        message = '¡Felicidades! Tienes un peso saludable. Si deseas asesoría para mantener tu salud, te invitamos a una consulta de nutrición clínica.';
      } else {
        candidacyLevel = 'low';
        message = 'Tu peso está por debajo de lo recomendado. Te sugerimos una valoración nutricional para alcanzar un peso saludable.';
      }
    } else {
      if (bmi >= 35) {
        candidacyLevel = 'high';
        message = 'Candidato Alta Prioridad. Eres un candidato ideal para cirugía bariátrica.';
      } else if (bmi >= 30) {
        candidacyLevel = 'high';
        message = hasMetabolic
          ? 'Candidato Ideal para Cirugía Metabólica y Bariátrica. Tu perfil con comorbilidades metabólicas califica perfectamente para un procedimiento que puede mejorar significativamente tu salud.'
          : 'Candidato Ideal para Cirugía Metabólica y Bariátrica. Tu IMC indica obesidad y calificas para un procedimiento bariátrico; una valoración personalizada confirmará la mejor opción para ti.';
      } else if (bmi >= 27.5 && bmi < 30) {
        candidacyLevel = 'low';
        message = 'Tu IMC se encuentra en rango de sobrepeso alto. Aunque por el momento no alcanzas los criterios de las guías para cirugía bariátrica, te invitamos a una valoración médica personalizada para evaluar alternativas como nutrición clínica o medicina bariátrica.';
      } else if (bmi >= 25 && bmi < 27.5) {
        candidacyLevel = 'low';
        message = 'Tienes sobrepeso. Te invitamos a una consulta médica personalizada para diseñar un plan de nutrición clínica y evaluar opciones de medicina bariátrica adaptadas a ti.';
      } else if (bmi >= 18.5 && bmi < 25) {
        candidacyLevel = 'low';
        message = '¡Felicidades! Tienes un peso saludable. Si deseas asesoría para mantener tu salud, te invitamos a una consulta de nutrición clínica.';
      } else {
        candidacyLevel = 'low';
        message = 'Tu peso está por debajo de lo recomendado. Te sugerimos una valoración nutricional para alcanzar un peso saludable.';
      }
    }

    const pesoIdealBase = 52 + 0.75 * (heightCm - 152.4);
    const excesoPeso = weightKg - pesoIdealBase;
    const pesoIdealAjustado = excesoPeso * 0.25 + pesoIdealBase;

    setResult({
      bmi: roundedBMI,
      category,
      candidacyLevel,
      message,
      pesoIdealBase: parseFloat(pesoIdealBase.toFixed(1)),
      excesoPeso: parseFloat(excesoPeso.toFixed(1)),
      pesoIdealAjustado: parseFloat(pesoIdealAjustado.toFixed(1)),
      medianSeries: SOPHIA_MEDIAN.map((f) => parseFloat((weightKg * f).toFixed(1))),
      minSeries: SOPHIA_MIN.map((f) => parseFloat((weightKg * f).toFixed(1))),
      maxSeries: SOPHIA_MAX.map((f) => parseFloat((weightKg * f).toFixed(1))),
    });
  };

  const sendToWhatsApp = () => {
    if (!result) return;
    const conditionNames = conditions
      .map((c) => CONDITIONS_LIST.find((cl) => cl.id === c)?.label)
      .join(', ');
    const text = `Hola Dr. Hernández, realicé mi cálculo de IMC en su sitio web:
- IMC: ${result.bmi} (${result.category})
- Edad: ${age || 'No especificada'}
- Ascendencia Asiática: ${isAsian ? 'Sí' : 'No'}
- Padecimientos: ${conditionNames || 'Ninguno'}
- Resultado: ${result.message}
- Peso Ideal Base: ${result.pesoIdealBase} kg
- Exceso de Peso: ${result.excesoPeso} kg
- Peso Ideal Ajustado (Meta Realista): ${result.pesoIdealAjustado} kg
- Trayectoria proyectada (mediana): Mes 0: ${result.medianSeries[0]} kg | Mes 1: ${result.medianSeries[1]} kg | Mes 3: ${result.medianSeries[2]} kg | Mes 12: ${result.medianSeries[3]} kg | Mes 24: ${result.medianSeries[4]} kg | Mes 60: ${result.medianSeries[5]} kg
Me gustaría agendar una valoración.`;
    window.open(whatsappLink(text), '_blank');
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!result || !contactName || !contactPhone) return;
    setContactSent(true);
    setTimeout(() => {
      setContactSent(false);
      setContactName('');
      setContactPhone('');
    }, 4000);
  };

  const canCalculate = useMemo(() => {
    const rawHeight = parseFloat(String(height).replace(',', '.'));
    const weightKg = parseFloat(weight);
    return !isNaN(rawHeight) && rawHeight > 0 && !isNaN(weightKg) && weightKg > 0;
  }, [height, weight]);

  return (
    <section
      id="imc"
      className="relative py-24 bg-gradient-to-br from-[#0D4A7A] via-[#0d4a7a] to-[#0a2f4a] overflow-hidden"
    >
      {/* Decorative orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-primary-200 rounded-full text-sm font-semibold mb-5 ring-1 ring-white/15">
            Pre-evaluación Bariátrica
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 text-balance">
            Descubre si eres candidato
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Ingresa tus datos para obtener un pre-diagnóstico instantáneo con
            proyección de pérdida de peso.
          </p>

          {/* Financing button */}
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full border border-white/30 bg-white/5 text-white font-semibold text-sm backdrop-blur-md hover:bg-white/15 transition-all duration-300"
          >
            <CreditCard className="w-4 h-4 text-primary-300" />
            Opciones de financiamiento disponibles
            <ExternalLink className="w-3.5 h-3.5 text-white/60" />
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Input form */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl overflow-hidden">
              <div className="px-6 py-4 border-b border-white/10">
                <h3 className="flex items-center gap-2 text-white font-heading text-lg">
                  <Calculator className="w-5 h-5 text-primary-300" />
                  Tus Datos
                </h3>
                <p className="text-xs text-white/50 mt-1">
                  Ingresa tu información corporal actual.
                </p>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Altura (cm o m)
                    </label>
                    <input
                      type="text"
                      inputMode="decimal"
                      placeholder="Ej. 170 o 1.70"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30 outline-none transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-1.5">
                      Peso (kg)
                    </label>
                    <input
                      type="number"
                      placeholder="Ej. 95"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30 outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">
                    Edad (años)
                  </label>
                  <input
                    type="number"
                    placeholder="Ej. 35"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:bg-white/20 focus:border-primary-400 focus:ring-2 focus:ring-primary-400/30 outline-none transition-all text-sm"
                  />
                </div>

                {/* Asian ancestry */}
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAsian}
                    onChange={(e) => setIsAsian(e.target.checked)}
                    className="w-4 h-4 rounded border-white/30 bg-white/10 text-primary-500 focus:ring-primary-400"
                  />
                  <span className="text-sm text-white/80">Tengo ascendencia asiática</span>
                </label>

                {/* Conditions */}
                <div className="pt-2">
                  <label className="block text-sm font-semibold text-white mb-2.5">
                    Padecimientos Actuales
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {CONDITIONS_LIST.map((condition) => (
                      <label
                        key={condition.id}
                        className="flex items-start gap-2 cursor-pointer hover:bg-white/5 rounded-lg px-1.5 py-1 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={conditions.includes(condition.id)}
                          onChange={() => toggleCondition(condition.id)}
                          className="mt-0.5 w-4 h-4 rounded border-white/30 bg-white/10 text-primary-500 focus:ring-primary-400 flex-shrink-0"
                        />
                        <span className="text-xs text-white/75 leading-tight">
                          {condition.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={calculate}
                  disabled={!canCalculate}
                  className="w-full px-5 py-3 bg-primary-500 hover:bg-primary-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-heading font-bold text-base rounded-xl transition-all duration-300 shadow-lg"
                >
                  Calcular mi IMC
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7">
            {!result ? (
              <div className="h-full min-h-[350px] flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
                <Activity className="w-12 h-12 text-white/30 mb-3" />
                <h3 className="text-lg font-heading font-medium text-white/50">
                  Completa tus datos para ver tu análisis
                </h3>
                <p className="text-sm text-white/30 mt-2 max-w-xs">
                  El resultado incluirá tu IMC, nivel de candidatura, metas de peso y proyección de pérdida.
                </p>
              </div>
            ) : (
              <div className="space-y-5 animate-fade-in-up">
                {/* Main result card */}
                <div className="p-6 lg:p-7 rounded-2xl border border-white/10 shadow-lg bg-white/5 backdrop-blur-sm relative overflow-hidden">
                  <div className="relative z-10 text-white">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">
                          Tu Resultado
                        </p>
                        <h3 className="text-2xl font-heading font-bold">{result.category}</h3>
                      </div>
                      <div className="text-right">
                        <span className="text-4xl font-heading font-extrabold">{result.bmi}</span>
                        <span className="text-xs block font-medium opacity-60">IMC (kg/m²)</span>
                      </div>
                    </div>

                    <div className="my-4 p-4 bg-white/10 rounded-xl border border-white/10">
                      <p className="text-base font-medium leading-relaxed">{result.message}</p>
                    </div>

                    {/* Candidacy badge */}
                    <div className="flex flex-wrap gap-3 mt-4">
                      {result.candidacyLevel === 'high' && (
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-green-500/20 text-white border border-green-400/50">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-green-400" />
                          Candidato Alta Prioridad
                        </span>
                      )}
                      {result.candidacyLevel === 'low' && (
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-primary-500/20 text-white border border-primary-400/50">
                          Consulta Recomendada
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Weight goals */}
                <div className="p-5 lg:p-6 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm shadow-lg">
                  <h4 className="font-heading font-bold text-white mb-4 flex items-center gap-2 text-base">
                    <Target className="w-5 h-5 text-green-400" />
                    Metas de Peso
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                      <p className="text-xs text-white/60 mb-1">Peso Ideal Base</p>
                      <p className="text-xl font-heading font-bold text-white">
                        {result.pesoIdealBase}
                        <span className="text-sm font-medium opacity-70 ml-1">kg</span>
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                      <p className="text-xs text-white/60 mb-1">Exceso de Peso</p>
                      <p className="text-xl font-heading font-bold text-white">
                        {result.excesoPeso}
                        <span className="text-sm font-medium opacity-70 ml-1">kg</span>
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-green-500/15 border border-green-400/40">
                      <p className="text-xs text-white/70 mb-1">Meta Realista</p>
                      <p className="text-xl font-heading font-bold text-green-300">
                        {result.pesoIdealAjustado}
                        <span className="text-sm font-medium opacity-80 ml-1">kg</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Trajectory chart */}
                <div className="p-5 lg:p-6 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm shadow-lg">
                  <h4 className="font-heading font-bold text-white mb-1 flex items-center gap-2 text-base">
                    <TrendingDown className="w-5 h-5 text-green-400" />
                    Gráfica de Trayectoria
                  </h4>
                  <p className="text-xs text-white/50 mb-4">
                    Proyección de peso estimada tras cirugía bariátrica.
                  </p>
                  <TrajectoryChart median={result.medianSeries} min={result.minSeries} max={result.maxSeries} />
                  <p className="text-[11px] leading-snug text-white/45 mt-3 italic">
                    Trayectoria de peso modelada mediante algoritmos predictivos del Consorcio SOPHIA
                    (The Lancet Digital Health). La línea punteada representa la mediana proyectada y
                    la franja sombreada el rango de variabilidad esperada.
                  </p>
                </div>

                {/* Actions: WhatsApp + Contact form */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* WhatsApp */}
                  <div className="bg-white/5 p-5 rounded-xl border border-white/15 flex flex-col justify-between shadow-lg backdrop-blur-sm">
                    <div>
                      <h4 className="font-heading font-bold text-white mb-2 flex items-center gap-2 text-sm">
                        <MessageCircle className="w-4 h-4 text-green-400" />
                        Respuesta Rápida
                      </h4>
                      <p className="text-xs text-white/60 mb-3">
                        Envía tu resultado directamente al Dr. Hernández por WhatsApp.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <a
                        href="#contacto"
                        className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold text-sm shadow-md transition-all duration-300"
                      >
                        <CalendarCheck className="w-4 h-4" />
                        Agendar valoración médica
                      </a>
                      <button
                        onClick={sendToWhatsApp}
                        className="inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm transition-all duration-300"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Enviar por WhatsApp
                      </button>
                    </div>
                  </div>

                  {/* Contact form */}
                  <div className="bg-white/5 p-5 rounded-xl border border-white/15 shadow-lg backdrop-blur-sm">
                    <h4 className="font-heading font-bold text-white mb-3 flex items-center gap-2 text-sm">
                      <Send className="w-4 h-4 text-primary-300" />
                      Solicitar Cita Formal
                    </h4>
                    {contactSent ? (
                      <div className="flex flex-col items-center justify-center text-center py-6 animate-fade-in-up">
                        <CheckCircle2 className="w-8 h-8 text-green-400 mb-2" />
                        <p className="text-sm text-white/80">
                          Datos enviados. El equipo del Dr. Hernández te contactará pronto.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmitContact} className="space-y-2.5">
                        <input
                          placeholder="Tu Nombre"
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          required
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:bg-white/20 focus:border-primary-400 outline-none transition-all"
                        />
                        <input
                          placeholder="Tu Teléfono o Email"
                          value={contactPhone}
                          onChange={(e) => setContactPhone(e.target.value)}
                          required
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white text-sm placeholder:text-white/40 focus:bg-white/20 focus:border-primary-400 outline-none transition-all"
                        />
                        <button
                          type="submit"
                          className="w-full px-4 py-2.5 rounded-lg border border-white/30 text-white hover:bg-white hover:text-[#0D4A7A] bg-transparent text-sm font-semibold transition-all duration-300"
                        >
                          Enviar mis datos
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <Info className="w-4 h-4 text-primary-300 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white/50 leading-relaxed">
                    Esta pre-evaluación es una guía informativa basada en guías ASMBS/IFSO.
                    La evaluación definitiva la realiza el cirujano considerando tu historial médico completo.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
