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

// 8 kyu - Sum The Strings
function sumStr(a,b) {
  return String(Number(a)+Number(b));
}

// 8 kyu - Take the Derivative
function derive(coefficient,exponent) {
  return `${coefficient*exponent}x^${exponent-1}`
}

// 8 kyu - Sum Arrays
function sum (numbers) {
    "use strict";
    if (numbers.length == 0) {
      return 0;
    }
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
};

// 8 kyu - Generate range of integers
function generateRange(min, max, step){
  let rangeArr = [];
  for (let i=min; i<=max; i+=step) {
    rangeArr.push(i)
  }
  return rangeArr;
}

// 8 kyu - CSV representation of array
function toCsvText(array) {
  let outputStr = "";
   for (let i=0; i<array.length; i++) {
     let innerArr = array[i];
     for (let j=0; j<innerArr.length-1; j++) {
       outputStr += `${innerArr[j]},`
     }
     if (i !== array.length -1) {
       outputStr += `${innerArr[innerArr.length-1]}\n`;
     } else {
       outputStr += `${innerArr[innerArr.length-1]}`;
     }
   }
  return outputStr;
}

// 8 kyu - CSV representation of array
function toCsvText(array) {
  return array.join('\n');
}

// 7 kyu - Sum of Minimums!
function sumOfMinimums(arr) {
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    minimum = arr[i][0];
    for (let j=0; j<arr[i].length; j++) {
      if (arr[i][j] < minimum) {
        minimum = arr[i][j];
      }
    }
    sum += minimum;
  }
  return sum;
}

// 8 kyu - Parse nice int from char problem
function getAge(inputString){
  return Number(inputString.charAt(0));
}

// 7 kyu - Vowel Count
function getCount(str) {
  var vowelsCount = 0;

  for (let i=0; i<str.length; i++) {
    switch (str.charAt(i)) {
        case "a" :
        case "e" :
        case "i" :
        case "o" :
        case "u" :
          vowelsCount ++;
          break;
        default:
          break;
    }
  }

  return vowelsCount;
}

// 6 kyu - Multiples of 3 or 5
function solution(number){
  let sum = 0;
  if (number <= 0) {
    return sum;
  }
  for (let i=3; i<number; i++) {
    if (i%3 === 0 && i%5 === 0) {
      sum += i;
    } else if (i%3 === 0 || i%5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// 8 kyu - Count the Monkeys!
function monkeyCount(n) {
  let monkeyArr = [];
  for (let i=1; i<=n; i++) {
    monkeyArr.push(i);
  }
  return monkeyArr;
}

// 8 kyu - Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}

// 8 kyu - Are You Playing Banjo?
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() === 'r' ? ` plays banjo` : ` does not play banjo`);
}

// 8 kyu - Is he gonna survive?
hero = (bullets, dragon) => bullets/2 >= dragon || false;

// 8 kyu - If you can't sleep, just count sheep!!
var countSheep = function (num){
  let sheepNum = 1;
  let murmur = ""
  while (sheepNum <= num) {
    murmur += `${sheepNum} sheep...`
    sheepNum++;
  }
  return murmur;
}

// 8 kyu - Calculate BMI
function bmi(weight, height) {
  let bmi = weight / height ** 2;
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25) {
    return "Normal";
  } else if (bmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
  return "";
}

// 8 kyu - Calculate BMI
let bmi = (weight, height, bmi = (weight/height**2)) =>
  bmi <= 18.5 ? "Underweight" :
  bmi <= 25   ? "Normal" :
  bmi <= 30   ? "Overweight" : "Obese";

// 8 kyu - Compare within margin
function closeCompare(a, b, margin = 0){
  let difference = a-b;
  if (Math.abs(difference) <= margin) {
    return 0;
  } else if (difference > 0) {
    return 1;
  } else if (difference < 0) {
    return -1;
  }
  return "i dunno"
}

// 8 kyu u- Do I get a bonus?
bonusTime = (salary, bonus) => '\u00A3' + (bonus ? salary*10 : salary)

// 7 kyu - Alphabet symmetry
function solve(arr){
  const alphaArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let count = [];
  for (let i=0; i<arr.length; i++) {
    count[i] = 0
    for (let j=0; j<arr[i].length; j++) {
      if (arr[i][j].toLowerCase() === alphaArr[j]) {
        count[i]++;
      }
    }
  }
  return count;
};

// 7 kyu - Maximum Multiple
function maxMultiple(divisor, bound){
  for (let i=bound; i>0; i--) {
    if (i%divisor === 0) {
      return i;
    }
  }
}

// 8 kyu - Jenny's secret message
function maxMultiple(divisor, bound){
 for (let i=bound; i>0; i--) {
   if (i%divisor === 0) {
     return i;
   }
 }
}

// 8 kyu - Find Maximum and Minimum Values of a List
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    // set first item as the currentMax
    let currentMax = list[0];
    // check items one a time
    for (let i=0; i<list.length; i++) {
      // if the next item is bigger, it becomes the currentMax
      if (list[i] > currentMax) {
        currentMax = list[i];
      }
    }
    // whatever if the currentMax at the end wins
    return currentMax;
}

// 8 kyu - Sentence Smash
// Smash Words
function smash (words) {
    "use strict";
    let sentence = words.join(" ");
    return sentence.trim();
};

// 8 kyu - Convert a string to an array
function stringToArray(string){
  return string.split(' ');

}

// 8 kyu - Rock Paper Scissors!
const rps = (p1, p2) => {
  switch (true) {
      case p1 === "scissors" && p2 === "paper":
      case p1 === "paper" && p2 === "rock":
      case p1 === "rock" && p2 === "scissors":
        return "Player 1 won!";
        break
      case p1 === "scissors" && p2 === "rock":
      case p1 === "paper" && p2 === "scissors":
      case p1 === "rock" && p2 === "paper":
        return "Player 2 won!";
        break;
      default:
        return "Draw!";
        break;
  }
};

// 6 kyu - Persistent Bugger
function persistence(num) {
  let myNum = num;
  let count = 0
  while (myNum >= 10) {
    let multVal = Number(String(myNum)[0]);
    for (let i=1; i<String(myNum).length; i++) {
      multVal = multVal * Number(String(myNum)[i]);
    }
    myNum = multVal;
    count++;
  }
  return count;
}

// 7 kyu - Maximum Length Difference
function mxdiflg(a1, a2) {
   if (a1.length===0 || a2.length === 0) {
     return -1;
   }
   let max = 0;
   for (let i= 0; i<a1.length; i++) {
     for (let j=0; j<a2.length; j++) {

       if (Math.abs(a1[i].length - a2[j].length) > max) {
         max = Math.abs(a1[i].length-a2[j].length);

       }
     }
   }
  return max;
}

// 7 kyu - Maximum Length Difference
function mxdiflg(a1, a2) {
   if (a1.length===0 || a2.length===0) {
     return -1;
   }
   let max = 0;
   for (let i=0; i<a1.length; i++) {
     for (let j=0; j<a2.length; j++) {
       let curr1 = a1[i].length;
       let curr2 = a2[j].length;
       if (Math.abs(curr1-curr2) > max) {
         max = Math.abs(curr1-curr2);
       }
     }
    }
  return max;
}

// 6 kyu - Vasya - Clerk
function tickets(peopleInLine){
  let changeDrawer = [0,0];
  for (let i=0; i<peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      changeDrawer[0]++;
    } else if (peopleInLine[i] === 50) {
      changeDrawer[1]++;
      if (changeDrawer[0] < 1) {
        return "NO";
      } else {
        changeDrawer[0]--;
      }
    } else {
      if (changeDrawer[1] >= 1 && changeDrawer[0] >= 1) {
        changeDrawer[1]--;
        changeDrawer[0]--;
      } else if (changeDrawer[0] >= 3) {
        changeDrawer[0] = changeDrawer[0]-3;
      } else {
        return "NO";
      }
    }
  }
  return "YES"
}

// 8 kyu - simple calculator
function calculator(a,b,sign){
  if (isNaN(a) || isNaN(b)) {
    return "unknown value";
  }
  switch (sign) {
      case "+":
        return a+b;
        break;
      case "-":
        return a-b;
        break;
      case "/":
        return a/b;
        break;
      case "*":
        return a*b;
        break;
      default:
        return "unknown value";
        break;
  }

}

// 8 kyu - Is this my tail?
function correctTail(body, tail) {

  let sub = body.substr(body.length-(tail.length));

  if (sub === tail) {
    return true
  }
  else {
    return false
  }
}

// 8 kyu - Who is going to pay for the wall?
function whoIsPaying(name){
  if (name.length <= 2) {
    return [name];
  }
  return [name, name.substring(0,2)];
}

// 8 kyu - Who is going to pay for the wall?
function whoIsPaying(name){
  return (name.length>2)?[name, name.substring(0,2)]:[name];
}

// 8 kyu - Even or Odd
function even_or_odd(number) {
  if (number%2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

// 8 kyu - Even or Odd
function even_or_odd(number) {
  return (number % 2 === 0)?"Even":"Odd";
}

// 8 kyu - Keep Hydrated!
function litres(time) {
  let litresWillDrink = Math.floor(0.5*time);
  return litresWillDrink;
}

// 8 kyu - Opposite number
function opposite(number) {
  return number*-1;
}

// 8 kyu - Sum of positive
function positiveSum(arr) {
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i]
    }
  }
  return total;
}

// 6 kyu - Find the odd int
function findOdd(A) {
  let count;
  for (let i=0; i<A.length; i++) {
    count = 0;
    for (let j=0; j<A.length; j++) {
      if (A[i] === A[j]) {
        count++;
      }
    }
    if (count % 2 != 0) {
      return A[i];
    }
  }
  return 0;
}

// 8 kyu - String repeat
function repeatStr (n, s) {
  return s.repeat(n);
}

// 8 kyu - Remove String Spaces
function noSpace(x){
  return x.split(" ").join("");
}

// 8 kyu - Convert number to reversed array of digits
function digitize(n) {
  let revArr = [];
  n = n + "";
  for (let i=n.length-1; i>=0; i--) {
    revArr.push(Number(n.charAt(i)));
  }
  return revArr;
}

// 8 kyu - Beginner - Lost Without a Map
function maps(x){
  let doubled = [];
  for (let i=0; i<x.length; i++) {
    doubled.push(x[i]*2);
  }
  return doubled;
}

// 8 kyu - Invert values
function invert(array) {
   return array.map(x => -x) ;
}

// 8 kyu - You Can't Code Under Pressure #1
function invert(array) {
   return array.map(x => -x) ;
}

// 8 kyu - Beginner Series #2 Clock
function past(h, m, s){
  return (((h*3600) + (m*60) + s)*1000)
}

// 8 kyu - Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// 8 kyu - Array plus array
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// 8 kyu - Calculate average
function find_average(array) {
  const reducer = (acc, cur) => acc + cur
  return ((array.reduce(reducer))/array.length)
}

// 8 kyu - Sum without highest and lowest number
function sumArray(array) {
  if (array == undefined || array.length <= 2) {
    return 0;
  } else {
    const sorted = array.sort((a,b)=>a-b);
    let shortened = sorted.slice(1,(sorted.length)-1);
    return shortened.reduce((acc,cur) => acc+cur);
  }
}

// 8 kyu - Get Planet Name by ID
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break
  }

  return name;
}

// 8 kyu - Reversed sequence
const reverseSeq = n => {
  const arr = [];
  for (let i=n; i>=1; i--) {
    arr.push(i)
  }
  return arr;
};

// 8 kyu - Fake Binary
const reverseSeq = n => {
  const arr = [];
  for (let i=n; i>=1; i--) {
    arr.push(i)
  }
  return arr;
};

// 7 kyu - Get the Middle Character
function getMiddle(s) {
  if (s.length%2 === 0) {
    return (s.slice((s.length/2)-1, (s.length/2)+1))
  }
  return (s.charAt(Math.floor(s.length/2)))
}

// 6 kyu - Who likes it?
function likes(names) {

  return (names.length === 0 ? `no one likes this`: names.length === 1 ? `${names[0]} likes this` : names.length === 2 ? `${names[0]} and ${names[1]} like this` : names.length === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : `${names[0]}, ${names[1]} and ${names.length-2} others like this`)
}

// 6 kyu - Counting Duplicates
function duplicateCount(text){
  let numDupes = 0;
  let counted = [];
  let seen = [];
  for (let i=0; i<text.length; i++) {
    if (seen.includes(text.toLowerCase().charAt(i)) && !counted.includes(text.toLowerCase().charAt(i))) {
      numDupes++
      counted.push(text.toLowerCase().charAt(i));
    } else {
      seen.push(text.toLowerCase().charAt(i));
    }
  }
  return numDupes
}

// 6 kyu - Duplicate Encoder
function duplicateEncode(word){
  const seen = [];
  const dupes = [];
  let finalStr = "";
  for (let i=0; i<word.length; i++) {
    if (!seen.includes(word.toLowerCase().charAt(i)) ) {
      seen.push(word.toLowerCase().charAt(i));
    } else if (!dupes.includes(word.toLowerCase().charAt(i)) ) {
      dupes.push(word.toLowerCase().charAt(i));
    }
  }
  for (let j=0; j<word.length; j++) {
    if (dupes.includes(word.toLowerCase().charAt(j))) {
      finalStr += ")"
    } else {
      finalStr += "("
    }
  }
  return finalStr;
}

// 5 kyu - Moving Zeros To The End
var moveZeros = function (arr) {
  const zeros = []
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i])

      arr.splice(i,1)
      i--
    }
  }
  return (arr.concat(zeros))
}

// 7 kyu - Sum of the first nth term of Series
function SeriesSum(n) {
  let sum = 0;
  for (let i=0; i<n; i++) {
    sum += 1/(1+3*i)
  }
  return sum.toFixed(2)
}

// 7 kyu - Exes and Ohs
function XO(str) {
  let xCt = 0;
  let oCt = 0;
  for (let i=0; i<str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      xCt++
    } else if (str[i].toLowerCase() === 'o') {
      oCt++
    }
  }
  if (xCt === oCt) {
    return true;
  }
  return false;
}

// 7 kyu - Disemvowel Trolls
function disemvowel(str) {
  let newStr = '';
  for (let i=0; i<str.length; i++) {
    if (str.toLowerCase().charAt(i) != 'a' && str.toLowerCase().charAt(i) != 'e' && str.toLowerCase().charAt(i) != 'i' && str.toLowerCase().charAt(i) != 'o' && str.toLowerCase().charAt(i) != 'u')
      newStr += str.charAt(i)
  }
  return newStr;
}

// 7 kyu - Disemvowel Trolls
function disemvowel(str) {
  let trll = '';
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i=0; i<str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      trll += ''
    } else {
      trll += str[i]
    }
  }
  return trll
}

// 7 kyu - Growth of a Population
function disemvowel(str) {
  let trll = '';
  let vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i=0; i<str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      trll += ''
    } else {
      trll += str[i]
    }
  }
  return trll
}

// 8 kyu - Can we divide it?
function isDivideBy(number, a, b) {
  return (number%a===0 && number%b===0) ? true: false
}

// 6 kyu - Stop gninnipS My sdroW!
function spinWords(str){
  let arr = str.split(' ');
  console.log(arr)
  let retStr = '';
  for (let i=0; i<arr.length; i++) {
    if (i != 0) {
      retStr += " "
    }
    if (arr[i].length >= 5) {
      console.log(arr[i])
      console.log(arr[i].split('').reverse().join(''))
      retStr += arr[i].split('').reverse().join('');
      console.log(retStr)
    } else {
      console.log(arr[i])
      retStr += arr[i]
      console.log(retStr)
    }
  }
  return retStr;
}

// 8 kyu - Reversed Words
function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}

// 8 kyu - How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  let classAvg = classPoints.reduce((a,b)=> a+b) / classPoints.length;
  if (classAvg < yourPoints) {
    return true
  }
  return false
}

// 8 kyu - Beginner Series #1 School Paperwork
const paperwork = (n, m) => {return (m>=0 && n>=0) ? m*n : 0}

// 8 kyu - MakeUpperCase
const makeUpperCase = str => str.toUpperCase()

// 8 kyu - Beginner - Reduce but Grow
const grow = x => x.reduce((a,b) => a * b)

// 8 kyu - Volume of a Cuboid
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length*width*height
  }
}

// 8 kyu - Count by X
function countBy(x, n) {
  var z = [];
  for (i=1; i<=n; i++) {
    z.push(x*i);
  }
  return z;
}


// 8 kyu - L1: Set Alarm
function setAlarm(employed, vacation){
  if (vacation) {
    return false;
  }
  if (employed) {
    return true;
  }
  return false;
}

// 8 kyu - Transportation on vacation
function rentalCarCost(d) {
  let tot = d*40
  if (d >= 7) {
    tot -= 50
  } else if (d >= 3) {
    tot -= 20
  }
  return tot
}

// 8 kyu - Find the first non-consecutive number
function firstNonConsecutive (arr) {
  num = arr[0];
  for (let i=1; i<arr.length; i++) {
    if (arr[i] === num+1) {
      num++
    } else {
      return arr[i]
    }
  }
  return null;
}

// 6 kyu - Take a Ten Minute Walk
function isValidWalk(walk) {
  const offset = [0,0];
  for (let i=0; i<walk.length; i++) {
    if (walk[i] === 'n') {
      offset[0]++
    } else if (walk[i] === 's') {
      offset[0]--
    } else if (walk[i] === 'e') {
      offset[1]++
    } else {
      offset[1]--
    }
  }
  if (offset[0] === 0 && offset[1] === 0 && walk.length === 10) {
    return true;
  }
  return false;
}

// 6 kyu - Sum of Digits / Digital Root
function isValidWalk(walk) {
  const offset = [0,0];
  for (let i=0; i<walk.length; i++) {
    if (walk[i] === 'n') {
      offset[0]++
    } else if (walk[i] === 's') {
      offset[0]--
    } else if (walk[i] === 'e') {
      offset[1]++
    } else {
      offset[1]--
    }
  }
  if (offset[0] === 0 && offset[1] === 0 && walk.length === 10) {
    return true;
  }
  return false;
}

// 5 kyu - Human Readable Time
function humanReadable(secs) {
  let hrs = Math.floor(secs/3600)
  let mins = Math.floor((secs - hrs*3600)/60)
  let sec = (secs-hrs*3600-mins*60)
  if (hrs  < 10) {
    hrs = '0' + hrs
  } else {
    hrs = hrs.toString()
  }
  if (mins < 10) {
    mins = '0' + mins
  } else {
    mins = mins.toString()
  }
  if (sec < 10) {
    sec = '0' + sec
  } else {
    sec = sec.toString()
  }
  return `${hrs}:${mins}:${sec}`
}

// 5 kyu - Directions Reduction
function dirReduc(arr){
  for (let i=arr.length; i>=0; i--) {
    if (arr[i] === "NORTH" && arr[i-1] === "SOUTH" || arr[i] === "SOUTH" && arr[i-1] === "NORTH" || arr[i] === "EAST" && arr[i-1] === "WEST" || arr[i] === "WEST" && arr[i-1] === "EAST") {
      arr.splice(i-1, 2)
      removedThisTime = true;
    }
  }
  return arr
}

// 5 kyu - Rot13
function rot13(message){
  lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  newStr = "";

  for (let i=0; i<message.length; i++) {
    if (lower.includes(message[i])) {
      newIndex = (lower.indexOf(`${message[i]}`)+ 13) % 26;
      newStr += lower[newIndex];
    } else if(upper.includes(message[i])) {
      newIndex = (upper.indexOf(`${message[i]}`)+ 13) % 26;
      newStr += upper[newIndex];
    } else {
      newStr += message[i];
    }
  }
  return newStr
}

// 6 kyu - ROT13 variant cipher
function encrypter(message) {
  lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  newStr = "";

  for (let i=0; i<message.length; i++) {
    if (lower.includes(message[i])) {
      newIndex = (lower.indexOf(`${message[i]}`)+ 13) % 26;
      newStr += lower[newIndex];
    } else if(upper.includes(message[i])) {
      newIndex = (upper.indexOf(`${message[i]}`)+ 13) % 26;
      newStr += upper[newIndex];
    } else {
      newStr += message[i];
    }
  }

  let finalStr = ''

  for (let j=0; j<newStr.length; j++) {
    if (lower.includes(newStr[j])) {
      newIndex = (25 - lower.indexOf(`${newStr[j]}`));
      finalStr += lower[newIndex];
    } else if(upper.includes(newStr[j])) {
      newIndex = (25 - upper.indexOf(`${newStr[j]}`));
      finalStr += upper[newIndex];
    } else {
      finalStr += newStr[j];
    }
  }

  return finalStr
}

// 5 kyu - ROT13
function rot13(message) {
  lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  newStr = "";

  for (let i=0; i<message.length; i++) {
    if (lower.includes(message[i])) {
      newIndex = (lower.indexOf(`${message[i]}`)+ 13) % 26;
      newStr += lower[newIndex];
    } else if(upper.includes(message[i])) {
      newIndex = (upper.indexOf(`${message[i]}`)+ 13) % 26;
      newStr += upper[newIndex];
    } else {
      newStr += message[i];
    }
  }
  return newStr
}

// 6 kyu - Caesar Cipher Encryption - Variation
function caesarEncode(message, shift) {
  lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  newStr = "";

  for (let i=0; i<message.length; i++) {
    if (lower.includes(message[i])) {
      newIndex = (lower.indexOf(`${message[i]}`)+ shift) % 26;
      newStr += lower[newIndex];
    } else {  //character is a space
      newStr += message[i];
      shift++
    }
  }
  return newStr
}

// 7 kyu - Boiled Eggs
function cookingTime(eggs) {
  return Math.ceil(eggs/8)*5
}

// 7 kyu - Mumbling
function accum(s) {
  arr = s.split('');
  retStr = ''
  for (let i=0; i<arr.length; i++) {
    retStr += arr[i].toUpperCase() + arr[i].toLowerCase().repeat(i) + '-';
  }
  retStr = retStr.substring(0, retStr.length-1)
  return retStr
}

// 7 kyu - Shortest Word
function findShort(s){
  arr = s.split(' ');
  let shortest = arr[0].length;
  for (let i=0; i<arr.length; i++) {
    if (arr[i].length < shortest) {
      shortest = arr[i].length
    }
  }
  return shortest
}

// 7 kyu - Square Every Digit
function squareDigits(num){
  let retStr = ''
  let str = num.toString()
  for (let i=0; i<str.length; i++) {
    retStr += Number(str[i])*Number(str[i])
  }
  return Number(retStr)
}

// 7 kyu - You're a square!
var isSquare = function(n){
  if (Math.pow(n, .5) % 1 === 0) {
    return true
  }
  return false
}

// 7 kyu - Highest and Lowest
function highAndLow(numbers){
  let arr = numbers.split(' ');
  let hiN = Number(arr[0])
  let loN = Number(arr[0])
  for (let i=0; i<arr.length; i++) {
    if (Number(arr[i]) > hiN) {
      hiN = Number(arr[i])
    }
    if (arr[i] < loN) {
      loN = Number(arr[i])
    }
  }
  return `${hiN} ${loN}`
}

// 6 kyu - Find The Parity Outlier
function findOutlier(integers){
  let type1 = Math.abs(integers[0]%2)    // 0 or 1
  let type2 = Math.abs(integers[1]%2)    // 0 or 1
  let types;
  if (type1 != type2) {        // 0 and a 1
    let type3 = Math.abs(integers[2]%2)  // 0 or 1
    if (type3 != type1) {      // type3 must equal type2
      types = type3            // 0/1
    } else {                   // type3 must equal type1
      types = type1
    }
  } else {
    types = type1              // type1 must equal type2
  }

  for (let i=0; i<integers.length; i++) {
    if (Math.abs(integers[i]%2) != types) {
      return integers[i]
    }
  }
}

// 6 kyu - Replace With Alphabet Position
function alphabetPosition(text) {
  let newArr = [];
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let upAlpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for (let i=0; i<text.length; i++) {
    if (alpha.includes(text[i])) {
      newArr.push(alpha.indexOf(text[i])+1)
    } else if (upAlpha.includes(text[i])) {
      newArr.push(upAlpha.indexOf(text[i])+1)
    }
  }
  return newArr.join(' ')
}

// 8 kyu - Training JS #8: Conditional statement --switch
function howManydays(month){
  var days;
  switch (month){
    case 2:
      days = 28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    default:
      days = 31;
      break;
  }
  return days;
}

// 7 kyu - Alphabet war
function alphabetWar(fight) {
  let leftPts = 0;
  let rightPts = 0;
  for (let i=0; i<fight.length; i++) {
    switch (fight[i]) {
      case 'w': leftPts += 4; break;
      case 'p': leftPts += 3; break;
      case 'b': leftPts += 2; break;
      case 's': leftPts += 1; break;
      case 'm': rightPts += 4; break;
      case 'q': rightPts += 3; break;
      case 'd': rightPts += 2; break;
      case 'z': rightPts += 1; break;
      default: break;
    }
  }
  if (leftPts > rightPts) {
    return `Left side wins!`;
  } else if (rightPts > leftPts) {
    return `Right side wins!`;
  } else {
    return "Let's fight again!";
  }

}

// 7 kyu - [Code Golf] Return Odd No Matter What
alwaysOdd=n=>n%2?n:n-1

// 7 kyu - Two to One
function longest(s1, s2) {
  let joinedArr = (s1+s2).split('')
  joinedArr.sort();
  let sortedStr = '';
  for (let i=0; i<joinedArr.length; i++) {
    if (!sortedStr.includes(joinedArr[i])) {
      sortedStr += joinedArr[i]
    }
  }
  return sortedStr;
}

// 8 kyu - Super Duper Easy
function problem(x){
  if (typeof x == 'string') {
    return "Error"
  }
  return x*50+6
}

// 8 kyu - Exclamation marks series #1: Remove a exclamation mark from the end of string
function remove(s){
  if (s[s.length-1] === '!') {
    return s.substring(0, s.length-1)
  }
  return s
}

// 8 kyu - Incorrect division method
const solve = (x, y) => x /y

// 8 kyu - Grasshopper - Order of operations
function orderOperations () {
  return (2 + 2) * ((2 + 2) * 2)
}

// 8 kyu - Power
function numberToPower(number, power){
  let total = 1;
  for (let i=1; i<=power; i++) {
    total = total * number
  }
  return total
}

// 8 kyu - Grader
function grader(score) {
  if (score > 1 || score < .6) {
    return 'F'
  } else if (score >= .9) {
    return 'A'
  } else if (score >= .8) {
    return 'B'
  } else if (score >= .7) {
    return 'C'
  } else {
    return 'D'
  }
}

// 8 kyu - Short Long Short
const solution = (a, b)=>(a.length < b.length)?a+b+a:b+a+b


// 8 kyu - Number toString
var a = 123+'';

// 8 kyu - dollars and Cents
function formatMoney(amount){
  return `$`+amount.toFixed(2)
}

// 8 kyu - Is it even?
const testEven = n => n%2 ? false : true

// 8 kyu - Name Shuffler
function nameShuffler(str){
  let separated = str.split(' ')
  return separated[1] + ' ' + separated[0]
}

// 8 kyu - Vowel remover
function shortcut(string){
  let newStr = '';
  for (let i=0; i<string.length; i++) {
    if(string[i] != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u') {
      newStr += string[i]
    }
  }
  return newStr
}

// 8 kyu - Find Multiples of a Number
function findMultiples(integer, limit) {
  let mult = integer
  let i = 1
  let allMult = []
  while (mult <= limit) {
    allMult.push(integer*i);
    i++
    mult = integer*i;
  }
  return allMult
}

// 8 kyu - The falling speed of petals
function sakuraFall(v) {
  if (v <= 0) {
    return 0
  } else {
    return 400/v;
  }
}

// 8 kyu - Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  // 1km/hr == 1/60km/min == 1/3600km/sec == 3.6m/sec == 360cm/sec
  return Math.floor(s*27.78)
}

// 8 kyu - My head is at the wrong end!
function fixTheMeerkat(arr) {
 return [arr[2], arr[1], arr[0]]
}

// 8 kyu - The 'if' function
function _if(bool, func1, func2) {
  if (bool) {
    func1()
  } else {
    func2()
  }

}

// 8 kyu - Reverse List Order
function reverseList(list) {
  return list.reverse()
}

// 8 kyu - Plural
function plural(n) {
  if (n === 1) {
    return false
  }
  return true
}

// 8 kyu - Find the Remainder
function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  return (Math.max(a,b)%Math.min(a,b));
}

// 8 kyu - Push a hash/an object into array
items = []
items.push({a: "b", c: "d"})

// 8 kyu - Function 3 - multiplying two numbers
// Write here your multiply-function
function multiply(a,b) {
  return a*b
}


// 8 kyu - Function 2 - squaring an argument
// Write the "square"-function here
function square(n) {
  return n*n
}

// 8 kyu - How many lightsabers do you own?
function howManyLightsabersDoYouOwn(name) {
  if (name === "Zach") {
    return 18;
  }
  return 0;
}

// 8 kyu - Return to Sanity
function mystery() {
  var results =
    {sanity: 'Hello'};
  return results;
}

// 8 kyu - Basic variable assignment
var a = "code";
var b = "wa.rs";
var name = a + b;

// 8 kyu - Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  let avg = (s1+s2+s3)/3
  if (avg >= 90) {
    return 'A'
  } else if (avg >= 80) {
    return 'B'
  } else if (avg >= 70) {
    return 'C'
  } else if (avg >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

// 8 kyu - Squash the bugs
function findLongest(str) {

var spl = str.split(" ");
var longest = 0

for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
  }
  return longest
}

// 8 kyu - Pre-FizzBuzz Workout #1
function preFizz(n) {
  let fizzy = [];
  for (let i=1; i<=n; i++) {
    fizzy.push(i)
  }
  return fizzy
}

// Beta - Pre-FizzBuz Workout #2
function preFizz(n) {
  if (n%3 === 0 && n%5 === 0) {
    return "FizzBuzz"
  } else if (n%3 === 0) {
    return "Fizz"
  } else if (n%5 === 0) {
    return "Buzz"
  } else {
    return n
  }
}

// 8 kyu - 101 Dalmations - squash the bugs, not the dogs!
function howManyDalmatians(number) {

  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

  var respond = number <= 10 ? dogs[0] : (number <= 50) ? dogs[1] : (number === 101) ? dogs[3] : dogs[2];

  return respond

}

// 8 kyu - No Loops 2 - You only need one
function check(a,x){
  return a.includes(x)
};

// Beta - No Loops 2 - You only need one - Shortest Code Version
function check(a,x){return a.includes(x)};

// Beta - Holiday I - Temparature in Bali
function bareable(heat, humidity){
  if (humidity > .5 || heat >= 36) {
    return false
  } else if (humidity > .4 && heat > 25) {
    return false
  } else if (heat <= 25) {
    return false
  } else {
    return true
  }
}

// 7 kyu - Holiday II - Plane Seating
function planeSeat(a){
  if(a[a.length-1] === "A" || a[a.length-1] === "B" || a[a.length-1] === "C") {
    if (Number(a.substring(0, a.length-1)) <= 20) {
      return "Front-Left"
    } else if (Number(a.substring(0, a.length-1)) <= 40) {
      return "Middle-Left"
    } else if (Number(a.substring(0, a.length-1)) <= 60) {
      return "Back-Left"
    } else {
      return "No Seat!!"
    }
  } else if (a[a.length-1] === "D" || a[a.length-1] === "E" || a[a.length-1] === "F") {
    if (Number(a.substring(0, a.length-1)) <= 20) {
      return "Front-Middle"
    } else if (Number(a.substring(0, a.length-1)) <= 40) {
      return "Middle-Middle"
    } else if (Number(a.substring(0, a.length-1)) <= 60) {
      return "Back-Middle"
    } else {
      return "No Seat!!"
    }
  } else if(a[a.length-1] === "G" || a[a.length-1] === "H" || a[a.length-1] === "K") {
    if (Number(a.substring(0, a.length-1)) <= 20) {
      return "Front-Right"
    } else if (Number(a.substring(0, a.length-1)) <= 40) {
      return "Middle-Right"
    } else if (Number(a.substring(0, a.length-1)) <= 60) {
      return "Back-Right"
    } else {
      return "No Seat!!"
    }
  } else {
    return "No Seat!!"
  }
}

// 8 kyu - Grasshopper - Terminal game combat function
const combat = (health, damage) => health-damage > 0 ? health-damage : 0

// 8 kyu - Reversing Words in a String
function reverse(string){
  return string.split(' ').reverse().join(' ')
}

// 8 kyu - Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - (sonYearsOld*2))
}

// 8 kyu - Training JS #1: create your first JS function and print "Helloworld!"
//refer to the example and write your first JS function
function helloWorld() {
  var str = 'Hello World!'
  console.log(str)
}

// 8 kyu - Tinkful - Logic Drills: Traffic Light
function updateLight(current) {
  switch (current) {
    case 'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    default:
      return 'green';
      break;
  }
}

// 8 kyu - Get Nth Even Number
function nthEven(n){
  return (n == 1 ? 0 : (n-1)*2)
}

// 8 kyu - noobCode 01: SUPERSIZE ME.... or rather, this integer!
const superSize = num => Number((num.toString().split('').sort((a,b)=>b-a)).join(''))

// 8 kyu - Well of Ideas - Easy Version
function well(x){
  let good = 0;
  let bad = 0;
  for (let i=0; i<x.length; i++) {
    if (x[i] === 'good') {
      good++
    }
    if (good > 2) {
      return 'I smell a series!'
    }
  }
  if (good >= 1)  {
    return 'Publish!'
  }
  return 'Fail!'
}

// 8 kyu - Cat years, Dog years
var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 15;
  let dogYears = 15;
  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
  }
  if (humanYears >= 3) {
    catYears += (humanYears-2)*4;
    dogYears += (humanYears-2)*5
  }
  return [humanYears,catYears,dogYears];
}

// 8 kyu - To square(root) or not to square(root)
function squareOrSquareRoot(array) {
  for (let i=0; i<array.length; i++) {
    if (Math.sqrt(array[i])%1 === 0) {
      array[i] = Math.sqrt(array[i])
    } else {
      array[i] = array[i]*array[i]
    }
  }
  return array;
}

// 8 kyu - Welcome!
function greet(language) {
  let dataWelcome = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'}

  if (language in dataWelcome) {
    return (dataWelcome[language])
  }
  return 'Welcome'
}

// 8 kyu - Check the exam
function checkExam(array1, array2) {
  let score = 0;
  for (let i=0; i<array1.length; i++) {
    if (array1[i] === array2[i]) {
      score += 4
    } else if (array2[i] != '') {
      score -= 1
    }
  }
  return Math.max(0, score)
}

// 8 kyu - Student's Final Grade
function finalGrade (exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75
  }
  return 0
}

// 8 kyu - Surface Area and Volume of a Box
function getSize(width, height, depth) {
  return [width*height*2+height*depth*2+depth*width*2, width*height*depth]
}

// 8 kyu - Sort and Star
function twoSort(s) {
  s.sort()
  return s[0].split('').join('***')
}

// 8 kyu - Simple Fun #1: Seats in Theater
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols-col+1)*(nRows-row)
}

// 8 kyu - Grasshopper - If/else syntax debug
function checkAlive (health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}

// 8 kyu - Area of Perimeter
const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l*l
  }
  return 2*l+2*w
};

// 8 kyu - All Star Code Challenge #18
function strCount(str, letter){
  let count = 0;
  for (let i=0; i<str.length; i++) {
    if (str[i] === letter) {
      count++
    }
  }
  return count
}

// 8 kyu - Stringy Strings
function stringy(size) {
  let retStr = ''
  for (let i=0; i<size; i++) {
    if (i%2) {
      retStr += 0
    } else {
      retStr += 1
    }
  }
  return retStr
}

// 8 kyu - Keep up the hoop
function hoopCount (n) {
  if (n >= 10) {
    return 'Great, now move on to tricks'
  }
  return 'Keep at it until you get it'
}

// 8 kyu - Grasshopper - Debug sayHello
function sayHello(name) {
  return 'Hello, '+ name
}

// 8 kyu - Correct the mistakes of the character recognition software
function correct(string) {
  let newStr = ''
  for (let i=0; i<string.length; i++) {
    if (string[i] === '0') {
      newStr += 'O'
    } else if (string[i] === '5') {
      newStr += 'S'
    } else if (string[i] === '1') {
      newStr += 'I'
    } else {
      newStr += string[i]
    }
  }
  return newStr
}

// 8 kyu - Removing Elements
function removeEveryOther(arr){
  let newArr = []
  for (let i=arr.length-1; i>=0; i--) {
    if (i%2 == 0) {
      newArr.unshift(arr[i])
    }
  }
  return newArr
}

// 8 kyu - Opposites Attract
function lovefunc(flower1, flower2){
  if ((flower1-flower2)%2 != 0) {
    return true
  }
  return false
}

// 8 kyu - The Feast of Many Beasts
function feast(beast, dish) {
  if (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1]) {
    return true
  }
  return false
}

// 8 kyu - Switch it Up!
function switchItUp(number){
  switch (number) {
    case 1:
      return 'One';
      break;
    case 2:
      return 'Two';
      break;
    case 3:
      return 'Three';
      break;
    case 4:
      return 'Four';
      break;
    case 5:
      return 'Five';
      break;
    case 6:
      return 'Six';
      break;
    case 7:
      return 'Seven';
      break;
    case 8:
      return 'Eight';
      break;
    case 9:
      return 'Nine';
      break;
    default:
      return 'Zero';
      break;
  }
}

// 8 kyu - Watermelon
function divide(weight){
  if (weight === 2) {
    return false
  } else if (weight%2 == 0) {
    return true
  }
  return false
}

// 8 kkyu - "this" is a problem
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name= this.firstName + ' ' + this.lastName
    //return {name: this.firstName + ' ' + this.lastName};
}

// 7 kyu - Friend or Foe?
function friend(friends){
  let trueFriends = []
  for (let i=0; i<friends.length; i++) {
    if (friends[i].length === 4) {
      trueFriends.push(friends[i])
    }
  }
  return trueFriends
}

// 7 kyu - Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a,b)=>a-b)
  return (numbers[0]+numbers[1]);
}

// 8 kyu - Difference of Volumes of Cuboids
function findDifference(a, b) {
  return Math.abs((a[0]*a[1]*a[2])-(b[0]*b[1]*b[2]))
}

// 8 kyu - Simple multiplication
function simpleMultiplication(number) {
  if (number%2===0) {
    return number*8
  }
  return number*9
}

// 8 kyu - Third Angle of a Triangle
function otherAngle(a, b) {
  return 180-a-b;
}

// 8 kyu - Unfinished Loop - Bug Fixing #1
function createArray(number){
  var newArray = [];

  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }

  return newArray;
}

// 8 kyu - L1: Bartender, drinks!
function getDrinkByProfession(param){
  console.log(param.toLowerCase())
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
      break;
    case "school counselor":
      return "Anything with Alcohol";
      break;
    case "programmer":
      return "Hipster Craft Beer";
      break;
    case "bike gang member":
      return "Moonshine";
      break;
    case "politician":
      return "Your tax dollars";
      break;
    case "rapper":
      return "Cristal";
      break;
    default:
      return "Beer";
      break;
  }
}

// 7 kyu - Descending Order
function descendingOrder(n){
  let strArr = n.toString().split('');
  strArr.sort((a,b)=>b-a)
  return (Number(strArr.join('')))

}

// 7 kyu - Complementary DNA
function DNAStrand(dna){
  let compDna = ''
  for (let i=0; i<dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        compDna += 'T';
        break;
      case 'T':
        compDna += 'A';
        break;
      case 'G':
        compDna += 'C';
        break;
      case 'C':
        compDna += 'G';
        break;
      default:
        break;
    }
  }
  return compDna
}

// 7 kyu - Credit Card Mask
// return masked string
function maskify(cc) {
  let masked = ''
  if (cc.length <= 4) {
    return cc;
  }
  for (let i=0; i<cc.length-4; i++) {
    masked+= '#';
  }
  for (let i=cc.length-4; i<cc.length; i++) {
    masked += cc[i]
  }
  return masked
}

// 7 kyu - Is this a triangle?
function isTriangle(a,b,c) {
  let sortArr = [a,b,c].sort((a,b)=>a-b)
  console.log(sortArr)
  if (sortArr[0] + sortArr[1] > sortArr[2]) {
    return true;
  }
  return false
}
