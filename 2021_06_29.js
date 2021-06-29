// Largest 5 digit number in a series
function solution(digits){
  let max = 0
  let str = String(digits)
  for (let i=0; i<digits.length-4; i++) {
    if (Number(str.substring(i, i+5)) > max) {
      max = Number(str.substring(i, i+5))
    }
  }
  return max
}

// 7 kyu - Triangular Treasure
function triangular( n ) {
  return n > 0 ? (n * (n+1))/2 : 0
}

// 7 kyu - Deodorant Evaporizer
function evaporator(content, evap_per_day, threshold){
  let curCap = 100
  let days = 0
  while (curCap >= threshold) {
    curCap = curCap * evap_per_day / 100
    days++
  }
  return days
}

// 7 kyu - WeIrD StRiNg CaSe
function toWeirdCase(string){
  let arr = string.split(' ')
  let weird = []
  for (let i=0; i<arr.length; i++) {
    let weirdWord = ''
    for (let j=0; j<arr[i].length; j++) {
      if (j%2) {
        weirdWord += arr[i][j].toLowerCase()
      } else {
        weirdWord += arr[i][j].toUpperCase()
      }
    }
    weird.push(weirdWord)
  }
  return weird.join(' ')
}
