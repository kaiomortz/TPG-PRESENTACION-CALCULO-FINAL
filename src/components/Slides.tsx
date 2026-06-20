import React from 'react';
import { MainFunctionChart, FirstDerivativeChart, SecondDerivativeChart, IntegralAreaChart } from './Charts';
import { criticalPoints } from '../utils/mathData';
import { Users, TrendingDown, Target, FileText, CheckCircle, Activity, Info, BookOpen, Clock, HelpCircle, Briefcase, Network, AlertTriangle, ArrowDown, ArrowRightLeft, Search, XCircle } from 'lucide-react';

export const slideList = [
  // Slide 1: Portada
  ({ nextSlide }: any) => (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-in fade-in duration-700">
      <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
        <BookOpen size={48} />
      </div>
      {/* <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-semibold tracking-wide mb-2">
        GUÍA DE ESTUDIO / PRESENTACIÓN
      </div>  */}
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
        Análisis de la evolución de la<br />
        <span className="text-blue-600">cantidad de suicidios en Japón</span>
      </h1>
      <h2 className="text-xl md:text-2xl text-slate-500 font-medium">(2014 - 2025)</h2>
      <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-slate-100 max-w-lg w-full text-left mt-8">
        <p className="text-sm text-slate-400 font-semibold mb-3 uppercase tracking-wider">Integrantes del Equipo:</p>
        <ul className="text-slate-700 space-y-1">
          <li>• Palma Malena Agustina</li>
          <li>• Pérez Almada Federico</li>
          <li>• Reyes Diego Edgardo</li>
          <li>• Rios Mariela Gisel</li>
          <li>• Rivas Sergio Lautaro</li>
        </ul>
        <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-end">
          <div>
            <p className="text-sm font-medium text-slate-500">Materia: Cálculo I</p>
            <p className="text-sm text-slate-500">Lic. de Análisis y Gestión de Datos - UNSL</p>
          </div>
        </div>
      </div>
    </div>
  ),

  // Slide 2: El peso del honor y la presión social
  () => (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-6">
        <Info className="text-blue-600 w-10 h-10" />
        <h2 className="text-3xl font-bold text-slate-800">El peso del honor y la presión social</h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 flex-1">
        {/* Columna Izquierda: Imagen */}
        <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-sm border border-slate-100 min-h-[250px] md:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Paisaje urbano en Japón"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
        </div>

        {/* Columna Derecha: Texto y Diagrama */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10">
            El suicidio en la cultura japonesa no es solo una estadística; es un fenómeno complejo profundamente arraigado en la sociedad. Históricamente, el país ha mantenido tasas de mortalidad por esta causa muy superiores al promedio mundial.
          </p>

          {/* Diagrama de 3 Cajas Conectadas */}
          <div className="flex flex-col gap-4">
            {/* Caja Superior */}
            <div className="bg-white p-5 rounded-xl border border-blue-100 shadow-sm relative z-10 w-[95%] lg:w-[85%] mx-auto">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                <Briefcase className="w-5 h-5 text-blue-600"/> Presión Laboral
              </h4>
              <p className="text-sm text-slate-600">Culturas de sobretrabajo extremo y exigencia de lealtad absoluta corporativa.</p>
            </div>

            {/* Flechas conectoras */}
            <div className="flex justify-center -my-3 opacity-50 relative z-0">
               <ArrowDown className="w-6 h-6 text-slate-400" />
            </div>

            {/* Fila Inferior de cajas */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white p-5 rounded-xl border border-emerald-100 shadow-sm flex-1 relative z-10">
                <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <Network className="w-5 h-5 text-emerald-600"/> Normas Sociales
                </h4>
                <p className="text-sm text-slate-600">Expectativas inquebrantables de comportamiento, rigidez y éxito cultural.</p>
              </div>

              <div className="hidden sm:flex items-center justify-center -mx-2 opacity-50 relative z-0">
                <ArrowRightLeft className="w-6 h-6 text-slate-400" />
              </div>

              <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-sm flex-1 relative z-10">
                <h4 className="font-bold text-rose-900 mb-2 flex items-center gap-2 text-sm uppercase tracking-wide">
                  <AlertTriangle className="w-5 h-5 text-rose-600"/> Peso del Honor
                </h4>
                <p className="text-sm text-slate-600">La percepción del fracaso personal como una deshonra individual insalvable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),

  // Slide 3: La búsqueda del modelo óptimo
  () => (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-6">
        <Search className="text-blue-600 w-10 h-10" />
        <h2 className="text-3xl font-bold text-slate-800">La búsqueda del modelo óptimo</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 flex-1">
        {/* Card 1: Trigonométrico */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
          <h3 className="text-center font-bold text-slate-700 md:text-lg mb-6">Modelo Trigonométrico</h3>
          <div className="flex-1 bg-slate-800 rounded-xl mb-6 p-4 relative overflow-hidden flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 100 50" className="w-full h-full stroke-amber-400 fill-transparent stroke-[1.5]">
              {/* Grid lines */}
              <line x1="0" y1="25" x2="100" y2="25" stroke="#334155" strokeWidth="0.5" />
              <line x1="50" y1="0" x2="50" y2="50" stroke="#334155" strokeWidth="0.5" />
              {/* Curve */}
              <path d="M 0,25 Q 12,15 25,25 T 50,25 T 75,25 T 100,25" />
              {/* Scatter dots */}
              <circle cx="10" cy="22" r="1.5" className="fill-amber-200 stroke-none" />
              <circle cx="20" cy="28" r="1.5" className="fill-amber-200 stroke-none" />
              <circle cx="30" cy="24" r="1.5" className="fill-amber-200 stroke-none" />
              <circle cx="40" cy="26" r="1.5" className="fill-amber-200 stroke-none" />
              <circle cx="50" cy="20" r="1.5" className="fill-amber-200 stroke-none" />
            </svg>
          </div>
          <div className="flex gap-3 items-start md:h-24">
            <XCircle className="text-rose-500 w-6 h-6 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              No refleja la tendencia real. Coeficiente de determinación insuficiente.
            </p>
          </div>
        </div>

        {/* Card 2: Logístico */}
        <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
          <h3 className="text-center font-bold text-purple-700 md:text-lg mb-6">Modelo Logístico</h3>
          <div className="flex-1 bg-slate-800 rounded-xl mb-6 p-4 relative overflow-hidden flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 100 50" className="w-full h-full stroke-purple-400 fill-transparent stroke-[1.5]">
              {/* Grid lines */}
              <line x1="0" y1="35" x2="100" y2="35" stroke="#334155" strokeWidth="0.5" />
              <line x1="20" y1="0" x2="20" y2="50" stroke="#334155" strokeWidth="0.5" />
              {/* Curve */}
              <path d="M 0,5 Q 15,35 40,35 L 100,35" />
              {/* Scatter dots */}
              <circle cx="10" cy="18" r="1.5" className="fill-purple-200 stroke-none" />
              <circle cx="20" cy="28" r="1.5" className="fill-purple-200 stroke-none" />
              <circle cx="30" cy="33" r="1.5" className="fill-purple-200 stroke-none" />
              <circle cx="40" cy="36" r="1.5" className="fill-purple-200 stroke-none" />
              <circle cx="50" cy="34" r="1.5" className="fill-purple-200 stroke-none" />
            </svg>
          </div>
          <div className="flex gap-3 items-start md:h-24">
            <AlertTriangle className="text-amber-500 w-6 h-6 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-600 leading-relaxed font-medium">
              Refleja un comportamiento realista a largo plazo, pero pierde precisión para capturar las variaciones en el periodo de estudio.
            </p>
          </div>
        </div>

        {/* Card 3: Polinomio */}
        <div className="flex-1 bg-blue-50/50 p-6 rounded-2xl shadow-md border-2 border-blue-400 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
          <h3 className="text-center font-bold text-blue-900 md:text-lg mb-2 relative z-10">Polinomio de Grado 3</h3>
          <p className="text-center text-xs font-bold text-blue-600 mb-4 uppercase tracking-wider relative z-10">(Modelo Elegido)</p>
          
          <div className="flex-1 bg-slate-800 rounded-xl mb-6 p-4 relative overflow-hidden flex items-center justify-center shadow-inner z-10">
            <svg viewBox="0 0 100 50" className="w-full h-full stroke-cyan-400 fill-transparent stroke-[1.5]">
              {/* Grid lines */}
              <line x1="0" y1="25" x2="100" y2="25" stroke="#334155" strokeWidth="0.5" />
              <line x1="50" y1="0" x2="50" y2="50" stroke="#334155" strokeWidth="0.5" />
              {/* Curve */}
              <path d="M 0,10 Q 20,35 45,20 T 90,60" />
              {/* Scatter dots */}
              <circle cx="10" cy="18" r="1.5" className="fill-cyan-200 stroke-none" />
              <circle cx="20" cy="24" r="1.5" className="fill-cyan-200 stroke-none" />
              <circle cx="30" cy="27" r="1.5" className="fill-cyan-200 stroke-none" />
              <circle cx="40" cy="22" r="1.5" className="fill-cyan-200 stroke-none" />
              <circle cx="50" cy="21" r="1.5" className="fill-cyan-200 stroke-none" />
              <circle cx="60" cy="28" r="1.5" className="fill-cyan-200 stroke-none" />
            </svg>
          </div>
          <div className="flex gap-3 items-start md:h-24 relative z-10">
            <CheckCircle className="text-emerald-500 w-6 h-6 shrink-0 mt-0.5 bg-white rounded-full" />
            <p className="text-sm text-blue-900 leading-relaxed font-semibold">
              Excelente ajuste a corto plazo. Permite analizar con alta precisión la volatilidad actual (2014-2025).
            </p>
          </div>
        </div>
      </div>
    </div>
  ),

  // Slide 4: Gráfica de la Problemática
  () => (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <TrendingDown className="text-blue-600 w-10 h-10" />
          <h2 className="text-3xl font-bold text-slate-800">Visualización de la Problemática</h2>
        </div>
        <div className="text-sm px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium shadow-sm">
          Vista Principal f(x)
        </div>
      </div>
      <div className="flex-1 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 relative">
        <MainFunctionChart />
      </div>
      <div className="flex gap-4 p-4 mt-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-600">
        <Clock className="w-5 h-5 text-slate-400 shrink-0" />
        <p>El eje temporal 'x' sitúa <strong>x=0 en el 2014</strong>, desarrollándose hasta <strong>x=11 para el 2025</strong>. Los puntos rojos sobre la curva resaltan los extremos absolutos, mínimos y máximos locales hallados a través del análisis de cálculo numérico.</p>
      </div>
    </div>
  ),

  // Slide 5: Conceptos Clave: Derivadas
  () => (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-6">
        <Activity className="text-purple-600 w-10 h-10" />
        <h2 className="text-3xl font-bold text-slate-800">Cálculo Diferencial: 1ra Derivada</h2>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 flex-1">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <div className="bg-purple-50 border border-purple-100 p-6 rounded-2xl h-full flex flex-col justify-center">
            <h3 className="font-bold text-purple-900 mb-4 border-b border-purple-200 pb-2">Tabla de Puntos Críticos</h3>
            <div className="space-y-3">
              {criticalPoints.filter(p => [0, 4.28, 7.98, 11].includes(p.x)).map((pt, i) => (
                <div key={i} className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-xs text-slate-500 font-mono">x = {pt.x}</p>
                    <p className="text-xs font-semibold text-slate-600">({Math.floor(pt.year)})</p>
                  </div>
                  <p className="text-sm font-bold text-slate-800">{pt.label}</p>
                  <p className="text-base font-semibold text-purple-600">{pt.val} casos</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-1 relative">
            <h4 className="text-center font-semibold text-slate-600 mb-2 font-mono text-sm">Cambio en la tasa de muertes: g'(x)</h4>
            <FirstDerivativeChart />
          </div>
          <div className="text-sm text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 flex gap-3">
            <Info className="text-blue-500 shrink-0" />
            <p>Calculando <span className="font-mono font-semibold">g'(x) = 0</span>, notamos en <span className="font-mono">x=4.29 (2018)</span> un pase de decrecer a crecer (mínimo local). En <span className="font-mono">x=7.98 (2022)</span>, la tasa vuelve a caer marcando un claro máximo local.</p>
          </div>
        </div>
      </div>
    </div>
  ),

  // Slide 6: Conceptos Clave: Segunda Derivada (Aceleración)
  () => (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row gap-6 flex-1 h-full">
        <div className="w-full md:w-2/3 xl:w-3/4 flex flex-col gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-1 flex flex-col gap-1">
            <h4 className="text-center font-bold text-blue-800 text-sm bg-blue-50 py-1 rounded">Función Original g(x)</h4>
            <div className="flex-1 min-h-[220px]">
              <MainFunctionChart height="100%" />
            </div>
            <div className="border-t border-slate-100 my-1"></div>
            <h4 className="text-center font-bold text-emerald-800 text-sm bg-emerald-50 py-1 rounded">Aceleración y Concavidad: g''(x)</h4>
            <div className="flex-1 min-h-[220px]">
              <SecondDerivativeChart height="100%" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/4 flex flex-col gap-4">
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl h-full flex flex-col justify-center">
            <div className="mb-6 flex items-start gap-3 border-b border-emerald-200 pb-4">
              <TrendingDown className="text-emerald-600 w-8 h-8 shrink-0" />
              <h2 className="text-2xl font-bold text-slate-800 leading-tight">Cálculo Diferencial: 2da Derivada</h2>
            </div>
            <div className="mb-6 bg-white p-4 rounded-xl shadow-sm">
              <h3 className="font-bold text-emerald-900 mb-1 text-sm uppercase tracking-wide">Punto de Inflexión</h3>
              <p className="text-slate-800 font-mono font-bold text-2xl">
                x = 6.135
              </p>
              <p className="text-sm mt-1 text-emerald-700 font-medium">Equivale a mediados del 2020.</p>
            </div>
            
            <ul className="space-y-4 text-emerald-800 text-sm leading-relaxed">
              <li className="flex gap-2 items-start"><span className="text-emerald-500 font-bold">↑</span> <div>En <strong>[0, 6.13)</strong> g''(x) &gt; 0. La curva es cóncava hacia arriba.</div></li>
              <li className="flex gap-2 items-start"><span className="text-emerald-500 font-bold">↓</span> <div>En <strong>(6.13, 11]</strong> g''(x) &lt; 0. Se vuelve cóncava hacia abajo.</div></li>
              <li className="p-3 bg-emerald-100 rounded-lg text-emerald-900 border border-emerald-200 mt-2 text-xs font-medium">Tras la inflexión, el decrecimiento se torna más acelerado.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),

  // Slide 7: Conceptos Clave: Integrales
  () => (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-6">
        <FileText className="text-sky-600 w-10 h-10" />
        <h2 className="text-3xl font-bold text-slate-800">Cálculo Integral: Muertes Acumuladas</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-6 flex-1">
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-slate-800 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
            <h3 className="text-slate-300 text-sm font-semibold mb-2">Total Acumulado (2014 - 2025)</h3>
            <div className="text-4xl md:text-5xl font-black mb-1">236.330</div>
            <p className="text-sky-300 text-sm font-medium">Vidas perdidas en el periodo</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex-1">
            <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2"><Activity size={18}/> Operación</h3>
            <div className="bg-slate-50 p-4 font-mono text-xs text-slate-700 rounded-xl overflow-x-auto shadow-inner border border-slate-200 border-b-4 mb-4">
              <span className="text-sky-600 font-bold">∫</span> [11, 0] g(x) dx <br/>
              = G(11) - G(0) <br/>
              ≈ 236,330
            </div>
            <p className="text-xs text-slate-600 leading-relaxed text-justify">
              Al integrar la función del modelo matemático, calculamos el área entera bajo esta curva en el intervalo fijado; esto se traduce de la variable temporal a un total de casos acumulado.
            </p>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 h-full flex flex-col justify-center">
            <h4 className="text-center font-semibold text-slate-600 mb-2 text-sm">Área Integral = G(x)</h4>
            <IntegralAreaChart />
          </div>
        </div>
      </div>
    </div>
  ),

// Slide 8: FAQ & Conclusiones Socio-Históricas
  () => (
    <div className="flex flex-col h-full animate-in fade-in duration-500 overflow-y-auto pb-4">
      <div className="flex items-center gap-4 mb-6 shrink-0">
        <HelpCircle className="text-blue-600 w-10 h-10" />
        <h2 className="text-3xl font-bold text-slate-800">Preguntas Frecuentes y Conclusión</h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        <div className="lg:w-1/2 space-y-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-blue-500">
            <h3 className="font-bold text-slate-800 text-sm mb-1 uppercase text-blue-900 tracking-wide flex items-center gap-2">
              <Clock size={16} /> ¿Por qué bajaron los casos hacia 2018?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              El mínimo local alrededor de 2018 coincide con los primeros efectos positivos de las políticas implementadas desde 2009. En dicho año se creó un fondo nacional para las prefecturas y autoridades locales para implementar iniciativas de prevención. Además, en 2006 fue promulgada la Ley Básica sobre Medidas para la Prevención del Suicidio.
            </p>
          </div>
          
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-amber-500">
            <h3 className="font-bold text-slate-800 text-sm mb-1 uppercase text-amber-900 tracking-wide flex items-center gap-2">
              <TrendingDown size={16} /> ¿Qué explica el pico de 2022?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              El máximo hacia 2022 probablemente refleje el impacto de la pandemia de COVID-19. Esta situación agravó el aislamiento y la crisis laboral.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-emerald-500">
            <h3 className="font-bold text-slate-800 text-sm mb-1 uppercase text-emerald-900 tracking-wide flex items-center gap-2">
              <Users size={16} /> ¿Existen otros factores involucrados?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mt-2">
              El fenómeno está influenciado por múltiples factores sociales, económicos y sanitarios. Resulta pertinente evaluar causas según rango etario, prefecturas, ocupación y género.
            </p>
          </div>
        </div>
        
        <div className="lg:w-1/2 bg-slate-800 p-8 rounded-2xl shadow-xl text-white flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
          <h3 className="text-2xl font-bold mb-4 relative z-10 flex items-center gap-3">
            <CheckCircle className="text-blue-400" /> Pensamiento Final
          </h3>
          <div className="relative z-10">
            <p className="text-slate-200 leading-relaxed text-sm lg:text-base mb-6 font-light">
              La tendencia decreciente observada en la función ajustada es consistente con la evolución histórica de los suicidios en Japón. Los resultados obtenidos permiten reflexionar sobre la importancia de las políticas públicas y del acceso a la salud mental como herramientas de prevención. Se estima que, si continúan con estas medidas, la cantidad de muertes disminuirían.
            </p>
            <blockquote className="border-l-2 border-blue-400 pl-4 py-2 italic text-sm text-blue-200 font-medium bg-slate-900/30 rounded-r-lg">
              Dejando de considerar al suicidio como un asunto estrictamente individual para reconocerlo como una problemática social en la que el Estado, las instituciones y la comunidad desempeñan un papel fundamental para brindar contención y reducir su incidencia.
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
];

