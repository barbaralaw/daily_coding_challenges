// 7 kyu - Area of an annulus
function annulusArea(a) {
  return Number((Math.PI*(Math.pow(a/2,2))).toFixed(2))
}

// 8 kyu - Pole Vault Starting Marks
function startingMark(bodyHeight){
  return Number((3.47 + bodyHeight*3.93442).toFixed(2))
}

// 8 kyu - Localize The Barycenter of a Triangle
function barTriang(p1, p2, p3){
  return [Number(((p1[0]+p2[0]+p3[0])/3).toFixed(4)), Number(((p1[1]+p2[1]+p3[1])/3).toFixed(4))]
}

// 8 kyu - Heads and Legs
function animals(heads, legs){
  let chickens = (legs-2*heads)/2
  return heads-chickens >= 0 && chickens >= 0 && chickens%1 == 0 ? [heads-chickens, chickens] : 'No solutions'
}

// 8 kyu - Improving Math.round(x)
Math.roundTo = function (number, precision) {
  return Number(number.toFixed(precision))
}

// 8 kyu - Wilson primes
function amIWilson(p) {
  let fact = p-1
  let num = p-2
  while (num > 0) {
    fact *= num
    num--
  }
  return ( (fact + 1) / (p ** 2) ) % 1 ? false : true
}

// 8 kyu - For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
var quote = function(fighter) {
  return fighter.toLowerCase() === 'conor mcgregor' ?
    "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    : "I am not impressed by your performance."
};

// 8 kyu - Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s,n){
  for (let i=0; i<n; i++) {
    s = s.replace('!','')
  }
  return s
}
