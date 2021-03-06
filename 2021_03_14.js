// 8 kyu - Regular Ball Super Ball
var Ball = function(ballType="regular") {
  this.ballType = ballType
};

// 8 kyu - The most asked question on CodeWars
function detect(comment) {
  if (comment.substring(0,19) === "Can someone explain") {
    return true;
  }
  return false;
}

// 8 kyu - Miles per gallon to kilometers per liter
function converter (mpg) {
  // mpg * 1.609344 / 4.54609188
  let str = ((mpg*1.609344/4.54609188).toFixed(2))+''
  if (str.charAt(str.length-1) != '0') {
    return Number(str)
  } else if (str.charAt(str.length-2) != '0') {
    return Number(str.substring(0,str.length-1))
  } else {
    return Number(str.substring(0,str.length-2))
  }
}

// 8 kyu - Miles per gallon to kilometers per liter
function converter (mpg) {
  // mpg * 1.609344 / 4.54609188
  return Number((mpg*1.609344/4.54609188).toFixed(2))
}

// 8 kyu - Lario and Muigi Pipe Problem
function pipeFix(numbers){
  let pipes = [];
  for (let i=Math.min(...numbers); i<=Math.max(...numbers); i++) {
    pipes.push(i)
  }
  return pipes
}

// 8 kyu - Smallest unused ID
function nextId(ids){
  ids.sort((a,b)=>a-b)
  for (let i=0; i<ids.length-1; i++) {
    if (ids[0] != 0) {
      return 0
    }
    if (ids[i]+1 != ids[i+1] && ids[i] != ids[i+1]) {
      return ids[i]+1
    }
  }
  return ids[ids.length-1]+1
}

// 8 kyu - Simple Fun #352: Reagent Formula
function isValid(formula){
  let str = formula.join('');
  if (str.includes('1') && str.includes('2')) {
    return false;
  }
  if (str.includes('3') && str.includes('4')) {
    return false;
  }
  if (str.includes('5') && !str.includes('6')) {
    return false;
  }
  if (!str.includes('5') && str.includes('6')) {
    return false;
  }
  if (!str.includes('7') && !str.includes('8')) {
    return false;
  }
  return true;
}

// 8 kyu - Alan Partridge II - Apple Turnover
function apple(x){
  return (Number(x)*Number(x) > 1000) ? `It's hotter than the sun!!` : `Help yourself to a honeycomb Yorkie for the glovebox.`
}

// 8 kyu - Holiday VI - Shark Pontoon
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin) {
    return (sharkDistance/sharkSpeed)*2 < pontoonDistance/youSpeed ? 'Shark Bait!' : 'Alive!'
  }
  return (sharkDistance/sharkSpeed) < pontoonDistance/youSpeed ? 'Shark Bait!' : 'Alive!'
}

// 8 kyu - Multiplication table for number
function multiTable(number) {
  return `1 * ${number} = ${number}\n2 * ${number} = ${2*number}\n3 * ${number} = ${3*number}\n4 * ${number} = ${4*number}\n5 * ${number} = ${5*number}\n6 * ${number} = ${6*number}\n7 * ${number} = ${7*number}\n8 * ${number} = ${8*number}\n9 * ${number} = ${9*number}\n10 * ${number} = ${10*number}`
}

// 8 kyu - No zeros for heros
function noBoringZeros(n) {
  let str = n+'';
  while (str[str.length-1] === '0') {
    str = str.slice(0,-1);
  }
  return Number(str)
}

// 8 kyu - Filling an array (part 1)
const arr = N => {
  let myArr = []
  for (let i=0; i<N; i++) {
    myArr.push(i)
  }
  return myArr
};

// 8 kyu - Sum of differences in array
function sumOfDifferences(arr) {
  arr.sort((a,b)=>b-a);
  let total = 0;
  for (let i=0; i<arr.length-1; i++) {
    total+= arr[i]-arr[i+1];
  }
  return total;
}

// 8 kyu - Grasshopper - Messi Goals
var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

// 8 kyu - Total pressure calculation
solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  return (((givenMass1/molarMass1)+(givenMass2/molarMass2))*.082*(temp+273.15))/volume
}

// 8 kyu - Coefficients of the Quadratic Equation
function quadratic(x1, x2){
  return [1, -1*(x1+x2), x1*x2]
}

// 8 kyu - Subtract the Sum
function SubtractSum(n){
  return 'apple'
}

// 8 kyu - altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
  let str = '';
  for (let i=0; i<this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      str += this[i].toLowerCase()
    } else {
      str += this[i].toUpperCase()
    }
  }
  return str
}

// 8 kyu - Thinkful - Number Drills: Blue and red marbles
function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  return (blueStart-bluePulled)/(blueStart+redStart-bluePulled-redPulled)
}

// 8 kyu - Enumerable Magic #25 - Take the First N Elements
function take(arr, n) {
  return arr.slice(0,n)
}

// 8 kyu - Draw stairs
function drawStairs(n) {
  let stairs = '';
  for (let i=1; i<n; i++) {
    let j = i-1
    while (j > 0) {
      stairs += ' ';
      j--
    }
    stairs += 'I\n'
  }
  let x = n-1
  while (x > 0) {
    stairs += ' ';
    x--
  }
  stairs += 'I'
  return stairs;
}
