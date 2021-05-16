// 7 kyu - Sum of all the multiples of 3 or 5
function findSum(n) {
  let total = 0
  for (let i=0; i<=n; i++) {
    if (i%3 === 0 || i%5 === 0) {
      total+=i
    }
  }
  return total
}
