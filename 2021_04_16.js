// 7 kyu - Count the divisors of a number
function getDivisorsCnt(n){
  const divisors = []
  let quot = 1
  if (n === 1) {
    return 1
  }
  while (quot <= n/2) {
    if (n%quot === 0 && !divisors.includes(quot)) {
      divisors.push(quot)
      if (quot != n/quot) {
        divisors.push(n/quot)
      }
    }
    quot++
  }
  return divisors.length
}
