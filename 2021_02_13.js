// 7 kyu - List Filtering
function filter_list(list) {
  let newArray = [];
  for (i=0; i < list.length; i++) {
    let curItem = list[i]
    if (typeof list[i] !== "string") {
      newArray.push(curItem);
    }
  }
  return newArray;
}

// 8 kyu - Multiply
function multiply(a, b){
  return(a * b);
}

// 6 kyu - Does my number look big in this?
function narcissistic(value) {
  let valStr = value.toString();
  let valDigMult = 0;
  for (let i=0; i<valStr.length; i++) {
    valDigMult += Number(valStr.charAt(i))**valStr.length;
  }
  if (valDigMult === value) {
    return true;
  } else {
    return false;
  }
}

// 6 kyu - Array.diff
function arrayDiff(a, b) {
  let toRemove = [];
  for (let i=0; i<a.length; i++) {
    for (let j=0; j<b.length; j++) {
      if (a[i] === b[j]) {
        a.splice(i, 1);
        i --;

      }
    }
  }
  return a;
}

// 6 kyu - Create Phone Number
function createPhoneNumber(numbers){
  let areaCode = "" + numbers[0] + numbers[1] + numbers[2];
  let first3Dig = "" + numbers[3] + numbers[4] + numbers[5];
  let last4Dig = "" + numbers[6] + numbers[7] + numbers[8] + numbers[9];
  let phoneNumber = "(" + areaCode + ") " + first3Dig + "-" + last4Dig;
  return phoneNumber
}

// 7 kyu - Find the divisors!
function divisors(integer) {
  let divisorsArray = [];
  for (let i=2; i<=integer/2; i++) {
    if (integer%i === 0) {
      divisorsArray.push(i);
    }
  }
  if (divisorsArray.length === 0) {
    return `${integer} is prime`;
  } else {
    return divisorsArray;
  }
};

// 8 kyu - Reversed Strings
function solution(str){
  let splitArr = str.split("");
  let reverseArr = splitArr.reverse();
  let reverseStr = reverseArr.join("");
  return reverseStr
}

// 8 kyu - Return Negative
function makeNegative(num) {
  if (num > 0) {
    return num*-1
  }
  return num;
}

// 8 kyu - Remove First and Last Character
function removeChar(str){
 let shortStr = str.substring(1, str.length-1);
  return shortStr;
};

// 8 kyu - Convert a Number to a String!
function numberToString(num) {
  return ""+num;
}

// 8 kyu - Convert boolean values to strings 'Yes' or 'No'
function boolToWord( bool ){
  if (bool) {
    return "Yes"
  }
  return "No"
}

// 8 kyu - Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let currSmall = args[0]
    for (let i=0; i<args.length; i++) {
      if (args[i] < currSmall) {
        currSmall = args[i];
      }
    }
    return currSmall
  }
}

// 8 kyu - Grasshopper - Summation
var summation = function (num) {
  let total = 0;
  for (let i=0; i<=num; i++) {
    total += i;
  }
  return total;
}

// 8 kyu - Square(n) Sum
function squareSum(numbers){
  let total = 0;
  for (let i=0; i<numbers.length; i++) {
    total += numbers[i]*numbers[i];
  }
  return total;
}

// 8 kyu - Counting sheep...
function countSheeps(arrayOfSheep) {
  let total = 0;
  for (let i=0; i<arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      total++;
    }
  }
  return total;
}

// 8 kyu - Function 1 - hello world
// Write a function "greet" that returns "hello world!"
function greet() {
  return "hello world!"
}

// 8 kyu - Basic Mathematical Operations
function basicOp(operation, value1, value2)
{
  switch (operation) {
      case "+":
        return (value1+value2);
      case "-":
        return (value1-value2);
      case "*":
        return (value1*value2);
      case "/":
        return (value1/value2);
      default:
        break;
  }
}

// 8 kyu - N-th Power
function index(array, n){
  if (n > array.length-1) {
    return -1;
  }
  let nthOfValue = Math.pow(array[n], n);
  return nthOfValue;
}

// 8 kyu - Grasshopper - Basic Function Fixer
function addFive(num) {
  var total = num + 5;
  return total;
}

// 8 kyu - Aspect Ratio Cropping - Part 1
function aspectRatio(x,y){
  let newWidth = Math.ceil(y/9*16);
  return ([newWidth, y]);
}

// 8 kyu - Convert a Boolean to a String
function booleanToString(b){
  if (b) {
    return 'true';
  }
  return 'false';
}

// 8 kyu - NBA full 48 minutes average
function pointsPer48(ppg, mpg) {
  if (ppg === 0) {
    return 0;
  }
  let percentPlayed = mpg/48;
  let pointsPerFullGame = ppg/percentPlayed;
  if (pointsPerFullGame%1 != 0) {
    pointsPerFullGame = Number(pointsPerFullGame.toFixed(1));
  }
  return pointsPerFullGame;
}

// 8 kyu - Find the position!
function position(letter){
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (let i=0; i<alphabet.length; i++) {
    if (letter === alphabet[i]) {
      return `Position of alphabet: ${i+1}`;
    }
  }
  return;
}

// 8 kyu - USD => CNY
function usdcny(usd) {
  let cnyVal = (usd*6.75).toFixed(2);
  return `${cnyVal} Chinese Yuan`;
}

// 8 kyu - Is n divisible by x and y?
function isDivisible(n, x, y) {
  if (n%x === 0 && n%y === 0) {
    return true;
  }
  return false;
}

// 8 kyu - A Needle in the Haystack
function findNeedle(haystack) {
  for (let i=0; i<haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`

}
  }
  return `No needle`
}

// 8 kyu - Simple Comparison
function add(a, b){

 return a==b;
}

// 8 kyu - How much water do I need?
function howMuchWater(water, load, clothes){
  if (clothes > 2*load) {
    return `Too much clothes`;
  } else if (clothes < load) {
    return `Not enough clothes`;
  } else {
    return Number((water*Math.pow(1.1, (clothes-load))).toFixed(2));
  }
}

// 8 kyu - Drink about
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return `drink toddy`;
  } else if (old >= 14 && old < 18) {
    return `drink coke`;
  } else if (old >= 18 && old < 21) {
    return `drink beer`;
  } else if (old >= 21) {
    return `drink whisky`
  }
  return '';
}

// 8 kyu - Century From Year
function century(year) {
  // Finish this :)

  return Math.ceil(year/100);
}

// 8 kyu - Abbreviate a Two Word Name
function abbrevName(name){
  let firstInitial = name.charAt(0).toUpperCase();;
  let lastInitial =  name.charAt(name.indexOf(" ")+1).toUpperCase();
  return `${firstInitial}.${lastInitial}`
}

// 8 kyu - What is between?
function between(a, b) {
   let theArray = [a];
   for (let i=a+1; i<b; i++) {
     theArray.push(i)
   }
  theArray.push(b);
  return theArray;
}

// 8 kyu - Quarter of the Year
const quarterOf = (month) => {
  switch (month) {
      case 1:
      case 2:
      case 3:
        return 1;
        break;
      case 4:
      case 5:
      case 6:
        return 2;
        break;
      case 7:
      case 8:
      case 9:
        return 3;
        break;
      case 10:
      case 11:
      case 12:
        return 4;
        break;
      default:
        break;
  }

}

// 8 kyu - Training JS #10: loop statement --for
function pickIt(arr){
  var odd=[],even=[];
  for (let i=0; i<arr.length; i++) {
   if (arr[i]%2 === 0) {
     even.push(arr[i]);
   } else {
     odd.push(arr[i]);
   }
  }
  return [odd,even];
}

// 8 kyu - Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0) {
      return [];
    }
    let array = [0, 0];
    for (let i=0; i<input.length; i++) {
      if (input[i] > 0) {
        array[0] += 1;
      } else if (input[i] < 0) {
        array[1] += input[i];
      }
    }
    return array;
}

// 8 kyu - Get the mean of an array
function getAverage(marks){
  let total = 0;
  marks.forEach(score => total += score);
  return Math.floor(total/marks.length);
}

// 8 kyu - Will you make it?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft*mpg >= distanceToPump) {
    return true;
  }
  return false;
};

// 8 kyu - DNA to RNA Conversion
function DNAtoRNA(dna) {
  let rna = "";
  for (let i=0; i<dna.length; i++) {
    if (dna.charAt(i) === "T") {
      rna += "U"
    } else {
      rna += dna.charAt(i);
    }
  }
  return rna;
}

// 8 kyu - You only n eed one - Beginner
function check(a, x) {
  if (a.includes(x)) {
    return true;
  }
  return false;
}

// 8 kyu - Convert a String to a Number!
var stringToNumber = function(str){
  return Number(str);
}

// Beta - Count the likes
var evalLikes = function(words){
  if (words.length == 0) {
    return false;
  }
  let likeCount = 0;
  for (let i=0; i<words.length; i++) {
    if (words[i].toLowerCase() === "like") {
      likeCount++;
    }
  }
  if (likeCount/words.length > .05) {
    return true;
  }
  return false;
}

// 8 kyu - Total amount of points
function points(games) {
  let x;
  let y;
  let championPts = 0;
  for (let i=0; i<games.length; i++) {
    x = games[i].charAt(0);
    y = games[i].charAt(games[i].length-1);
    if (Number(x) > Number(y)) {
      championPts += 3;
    } else if (Number(x) === Number(y)) {
      championPts++;
    }
  }
  return championPts;
}
