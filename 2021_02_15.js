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

// 8 kyu - SpeedCode #2 - Array Madness
function arrayMadness(a, b) {
  if (a.map(elem=>elem*elem).reduce((acc,cur)=>acc+cur) > (b.map(elem=>elem*elem*elem).reduce((acc,cur)=>acc+cur))) {
    return true;
  }
  return false;
}

// 8 kyu - Add Length
function addLength(str) {
  let arr = str.split(' ');
  return (arr.map(elem=>`${elem} ${elem.length}`))
}

// 8 kyu - Character Frequency
function charFreq(message) {
  let count = {};
  for (let i=0; i<message.length; i++) {
    if (!count[message[i]]) {
      console.log(message[i]);
      count[`${message[i]}`] = 1;
    } else {
      count[`${message[i]}`]++
    }
  }
  return count;
}

// 8 kyu - ES6 string addition
function joinStrings(string1, string2){
  return `${string1} ${string2}`
}

// 8 kyu - Sum Mixed Array
function sumMix(x){
  return x.map(elem=>Number(elem)).reduce((acc,cur)=>acc+cur)
}

// 8 kyu - Double Char
function doubleChar(str) {
  return str.split('').map(x=>x+x).join('')
}

// 8 kyu - Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s){
  let vowels = ['a','e','i','o','u']
  let arr = s.split('')
  for (let i=0; i<arr.length; i++) {
    if (vowels.includes(arr[i].toLowerCase())) {
      arr[i] = '!'
    }
  }
  return arr.join('')
}

// 8 kyu - Triple Trouble
function tripleTrouble(one, two, three){
  let str = '';
  for (let i=0; i<one.length; i++) {
    str += one[i];
    str += two[i];
    str += three[i]
  }
  return str
}

// 8 kyu - Collatz Conjecture (3n+1)
var hotpo = function(n){
  let count = 0
  while (n != 1) {
    n%2 === 0 ? n = n/2 : n = (3*n)+1
    count++
  }
  return count;
}

// 8 kyu - Type of sum
function typeOfSum(a, b) {
  return typeof (a+b)
}

// 8 kyu - Evil or Odious
function evil(n) {
  let bin = n.toString(2);
  let count = 0;
  for (let i=0; i<bin.length; i++) {
    if (bin[i] === '1') {
      count++
    }
  }
  return (`It's ` + (count%2===0?`Evil`:`Odious`) + '!')
}

// 8 kyu - Count Odd Numbers below n
function oddCount(n){
  return Math.floor(n/2)
}

// 8 kyu - I love you, a little, a lot, passionately ... not at all
function howMuchILoveYou(nbPetals) {
  switch (nbPetals%6) {
    case 1:
      return 'I love you'
      break;
    case 2:
      return 'a little'
      break;
    case 3:
      return 'a lot'
      break;
    case 4:
      return 'passionately'
      break;
    case 5:
      return 'madly'
      break;
    default:
      return 'not at all'
      break;
  }
}

// 8 kyu - Find the Difference in Age etween Oldest and Youngest Family Members
function differenceInAges(ages){
  ages.sort((a,b)=>a-b)
  return [ages[0], ages[ages.length-1], ages[ages.length-1]-ages[0]]
}

// 8 kyu - Define a card suit
function defineSuit(card) {
  if (deck.indexOf(card) <= 12) {
    return 'clubs'
  } else if (deck.indexOf(card) <= 25) {
    return 'diamonds'
  } else if (deck.indexOf(card) <= 38) {
    return 'hearts'
  } else {
    return 'spades'
  }
}
