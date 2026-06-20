import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceDot,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  ReferenceLine
} from 'recharts';
import { generateStandardData, criticalPoints } from '../utils/mathData';

const data = generateStandardData();

export const MainFunctionChart = ({ height = 400 }: { height?: number | string }) => {
  const yearTicks = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 50, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="year"
          type="number"
          domain={[2014, 2025]}
          ticks={yearTicks}
          tickFormatter={(tick) => tick.toString()}
          label={{ value: 'Años (2014 - 2025)', position: 'insideBottom', offset: -10 }}
          tick={{ fontSize: 12 }}
        />
        <YAxis
          width={90} //agregado para ver si funciona
          domain={['dataMin - 1000', 'dataMax + 1000']}
          label={{ value: 'Cantidad de Suicidios', angle: -90, position: 'insideLeft', offset: -10 }}
        />
        <Tooltip
          formatter={(value: number) => [value, 'Suicidios']}
          labelFormatter={(label) => `Año: ${Number(label).toFixed(1)}`}
        />
        <Legend verticalAlign="top" height={36} />
        <Line
          type="monotone"
          dataKey="suicides"
          name="g(x) = -28.11046x³ + 517.37834x² - 2886.08007x + 25844.1685"
          stroke="#3b82f6"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 8 }}
        />
        {criticalPoints.map((pt, idx) => (
          <ReferenceDot
            key={idx}
            x={pt.year}
            y={pt.val}
            r={6}
            fill="#ef4444"
            stroke="white"
            strokeWidth={2}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export const FirstDerivativeChart = () => {
  const yearTicks = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 50, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="year"
          type="number"
          domain={[2014, 2025]}
          ticks={yearTicks}
          tickFormatter={(tick) => tick.toString()}
        />
        <YAxis />
        <Tooltip
          formatter={(value: number) => [value, "g'(x)"]}
          labelFormatter={(label) => `Año: ${Number(label).toFixed(1)}`}
        />
        <Legend verticalAlign="top"/>
        <Line type="monotone" dataKey="derivative" name="Derivada Primera g'(x)" stroke="#8b5cf6" strokeWidth={2} dot={false} />
        <ReferenceLine y={0} stroke="#ef4444" strokeDasharray="3 3" />
        <ReferenceDot x={2018.28} y={0} r={5} fill="#ef4444" />
        <ReferenceDot x={2021.98} y={0} r={5} fill="#ef4444" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const SecondDerivativeChart = ({ height = 300 }: { height?: number | string }) => {
  const yearTicks = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 50, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="year"
          type="number"
          domain={[2014, 2025]}
          ticks={yearTicks}
          tickFormatter={(tick) => tick.toString()}
        />
        <YAxis />
        <Tooltip
          formatter={(value: number) => [value, "g''(x)"]}
          labelFormatter={(label) => `Año: ${Number(label).toFixed(1)}`}
        />
        <Legend verticalAlign="top"/>
        <Line type="monotone" dataKey="accel" name="Derivada Segunda g''(x)" stroke="#10b981" strokeWidth={2} dot={false} />
        <ReferenceLine y={0} stroke="#ef4444" strokeDasharray="3 3" />
        <ReferenceDot x={2020.135} y={0} r={5} fill="#f59e0b" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const IntegralAreaChart = () => {
  const yearTicks = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 50, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="year"
          type="number"
          domain={[2014, 2025]}
          ticks={yearTicks}
          tickFormatter={(tick) => tick.toString()}
        />
        <YAxis domain={[0, 30000]} />
        <Tooltip
          formatter={(value: number) => [value, 'Suicidios']}
          labelFormatter={(label) => `Año: ${Number(label).toFixed(1)}`}
        />
        <Legend verticalAlign="top"/>
        <Area
          type="monotone"
          dataKey="suicides"
          name="Área bajo la curva (Total Acumulado)"
          stroke="#0ea5e9"
          fill="#38bdf8"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};