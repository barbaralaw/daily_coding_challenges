// 8 kyu - Find the force of gravity between two objects
const solution = (arr_val, arr_unit) => {
  const G = 6.67 * Math.pow(10,-11) // N.kg^-2.m^2
  const massUnit = {'kg':1, 'g':.001, 'mg':.000001, 'μg':.000000001, 'lb':.453592} // relative to kg
  const distUnit = {'m':1, 'cm':.01, 'mm':.001, 'μm':.000001, 'ft':.3048} // relative to m
  return (G * (arr_val[0] * massUnit[arr_unit[0]]) * (arr_val[1] * massUnit[arr_unit[1]])) / (arr_val[2] * distUnit[arr_unit[2]])**2
};
