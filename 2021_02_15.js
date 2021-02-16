// 8 kyu - BASIC: Making Six Toast
function sixToast(num) {
  return Math.abs(num-6)
}

// 7 kyu - Make techno
function perc (mins) {
 return mins < 1 || mins > 100 || typeof mins != 'number' ? 'invalid track time' : [`${Math.round(30*4*mins)} kicks`, `${Math.round(30*8*mins)} hihats`, `${Math.round(30*2*mins)} claps`]
};

// 8 kyu - Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter(bird => !geese.includes(bird));
};

// 8 kyu - Grasshopper - Variable Assignment Debug
var a = "dev"
var b = "Lab"

var name = a + b

// 7 kyu - Flatten and sort an array
function flattenAndSort(array) {
  let flatArray = []
  for (let i=0; i<array.length; i++) {
    array[i].forEach(elem => flatArray.push(elem))
  }
  return flatArray.sort((a,b)=>a-b)
}

// 7 kyu - Sort arrays - 1
sortme = function( names ){
  return names.sort()
}

// 7 kyu - Leap Years
sortme = function( names ){
  return names.sort()
}

// 7 kyu - JavaScript Array Filter
function getEvenNumbers(numbersArray){
  return numbersArray.filter(elem => elem%2 === 0)
}

// 7 kyu - Predict your age!
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let ages = [age1, age2, age3, age4, age5, age6, age7, age8]
  let multAges = ages.map(num => num*num)
  return Math.floor(Math.sqrt(multAges.reduce((acc,cur)=>acc+cur))/2)
}

// 7 kyu - Gauß needs help! (Sums of a lot of numbers)
function f(n){
  if (typeof n === 'number') {
    if (n > 0 && n%1 === 0) {
      return (n*(n+1))/2
    }
  }
  return false
};
