// 7 kyu - Divide and Conquer
function divCon(x){
  return (x.filter(e => typeof e === 'number').reduce((a,c)=>a+c,0)) - (x.filter(e => typeof e === 'string').reduce((a,c)=>a+Number(c),0))
}

// 7 kyu - Use reduce() to calculate the sum of the values in an array
function sum(arr) {
  // Write + PREP
  // Given an array, return the sum of the values in that array using reduce()
  // P - Parameters
  // one dimensional array of numbers
  // R - Returns
  // return (as a number) the sum of the values in the array
  // E - Examples
  // [1,2,3,4] => 10 ( GET THEM TO SAY YES)
  // [-3, 10, 10, 10, 1] => 28
  // [1.     *10000000 1s] => 1000001
  // P - Pseudocode


  // function will take in an array of numbers
  // use reduce() to sum the numbers
  // return that sum
  return arr.reduce((acc, cur) => acc + cur, 0)

}

// 7 kyu - Use map() to double the values in an array
function double(arr) {
  return arr.map(x=>x*2)
}

// 7 kyu - Average scores
function average(scores) {
  return Math.round(scores.reduce((a,c)=>a+c,0)/scores.length)
}

// 7 kyu - Factorial
function factorial(n){
  let total = 1
  while (n > 0) {
    total *= n
    n--
  }
  return total
}

// 7 kyu - Spraying trees
function task(w, n, c) {
  let worker = ''
  switch (w) {
    case 'Monday':
      worker = 'James'
      break;
    case 'Tuesday':
      worker = 'John'
      break;
    case 'Wednesday':
      worker = 'Robert'
      break;
    case 'Thursday':
      worker = 'Michael'
      break;
    case 'Friday':
      worker = 'William'
      break;
    default:
      break;
  }
  return `It is ${w} today, ${worker}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`
}

// 7 kyu - Folding your way to the moon
function foldTo(distance) {
  if (distance >= 0) {
    let p = 0.0001
    let count = 0
    while (p < distance) {
      p *= 2
      count++
    }
    return count
  }
  return null
}
