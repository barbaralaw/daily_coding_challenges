// 7 kyu - Fix string case
function solve(s){
  let upCount = 0
  let loCount = 0
  s.split('').forEach(x => {
    if (x === x.toUpperCase()) {
      upCount++
    } else {
      loCount++
    }
  })
  return upCount > loCount ? s.split('').map(x=>x.toUpperCase()).join('') : s.split('').map(x=>x.toLowerCase()).join('')
}

// 7 kyu - The Coupon Code
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate) ? true : false
}
