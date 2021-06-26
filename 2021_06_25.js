// 7 kyu - Halving sum
function halvingSum(n) {
  let div = 1
  let sum = 0
  while (div <= n) {
    sum += Math.floor(n/div)
    div *= 2
  }
  return sum
}
