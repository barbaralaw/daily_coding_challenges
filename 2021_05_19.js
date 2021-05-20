// 7 kyu - Basic Math (Add or Subtract)
function calculate(str) {
  str = str.split('plus').join('+')
  str = str.split('minus').join('+-')
  return str.split('+').reduce((a,c)=>a + Number(c), 0).toString()
}
