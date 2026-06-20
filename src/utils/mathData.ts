export const g = (x: number) =>
  -28.11046 * Math.pow(x, 3) +
  517.37834 * Math.pow(x, 2) -
  2886.08007 * x +
  25844.1685;

export const gPrime = (x: number) =>
  -84.33139 * Math.pow(x, 2) + 1034.75669 * x - 2886.08007;

export const gDoublePrime = (x: number) => -168.66278 * x + 1034.75669;

export const generateStandardData = () => {
  const data = [];
  for (let x = 0; x <= 11; x += 0.1) {
    data.push({
      x: Number(x.toFixed(2)),
      year: 2014 + x,
      yearLabel: (2014 + x).toFixed(1),
      suicides: Number(g(x).toFixed(2)),
      derivative: Number(gPrime(x).toFixed(2)),
      accel: Number(gDoublePrime(x).toFixed(2)),
    });
  }
  return data;
};

export const criticalPoints = [
  { x: 0, year: 2014, val: 25844, label: "Máximo Absoluto" },
  { x: 4.28, year: 2018.28, val: 20765, label: "Mínimo Local" },
  { x: 6.135, year: 2020.14, val: 21120, label: "Pto. de Inflexión" },
  { x: 7.98, year: 2021.98, val: 21475, label: "Máximo Local" },
  { x: 11, year: 2025, val: 19285, label: "Mínimo Absoluto" },
];
