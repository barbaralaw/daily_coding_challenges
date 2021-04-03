// 7 kyu - Going to the cinema
function movie(card, ticket, perc) {
  let aTotal = 0
  let bTotal = card
  let movieCt = 0
  let prevB = ticket
  while (Math.ceil(bTotal) >= aTotal) {
    movieCt++
    aTotal += ticket
    bTotal += perc*prevB
    prevB = perc*prevB
  }
  return movieCt
};

// 7 kyu - Speed Control
function gps(s, x) {
  let distances = x.slice(0,x.length-1).map((dis, i) => x[i+1]-x[i])
  let speeds = distances.map(dis => Math.floor(dis * 3600/s))
  return Math.max(...speeds) > 1 ? Math.max(...speeds) : 0
}

// 7 kyu - Thinkful - String Drills: Repeater
function repeater(string, n){
  let i=1
  let str = string
  while (i < n) {
    str += string
    i++
  }
  return str
}

// 7 kyu - Number of Divisions
const divisions = (n, divisor) => {
  let count = 0
  while (n/divisor >= 1) {
    n = n/divisor;
    count++
  }
  return count
};

// 7 kyu - Birthday I - Cake
function cake(x, y){
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  let num = []
  for (let i=0; i<y.length; i++) {
    if (i % 2 === 0) {
      num.push(y.charCodeAt(i))
    } else {
      num.push(alpha.indexOf(y[i].toLowerCase()))
    }
  }
  let total = num.reduce((a,c)=>a+c,0)
  if (total > .7*x) {
    return 'Fire!'
  }
  return 'That was close!'
}
