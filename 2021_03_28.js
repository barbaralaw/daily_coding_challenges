// 7 kyu - Stones on the Table
function solve(stones) {
  let count = 0;
  for (let i=0; i<stones.length-1; i++) {
    if (stones[i] == stones[i+1]) {
      count++
    }
  }
  return count
}

// 5 kyu - Maximum subarray sum
var maxSequence = function(arr){
  let sum = 0;
  let curSum = 0;
  for (let i=0; i<arr.length; i++) {
    curSum = Math.max(0, curSum+arr[i]);
    sum = Math.max(sum, curSum)
  }
  return sum
}

// 7 kyu - Small enough? - Beginner
function smallEnough(a, limit){
  for (let i=0; i<a.length; i++) {
    if (a[i] > limit) {
      return false
    }
  }
  return true
}

// 7 kyu - Categorize New Member
function openOrSenior(data){
  let cats = []
  for (let i=0; i<data.length; i++) {
    if (data[i][0] < 55 || data[i][1] <= 7) {
      cats.push('Open')
    } else {
      cats.push('Senior')
    }
  }
  return cats
}

// 6 kyu - Bit Counting
var countBits = function(n) {
  let count = 0
  let bin = n.toString(2)
  let strArr = bin.toString(10).split('')
  for (let i=0; i<strArr.length; i++) {
    if (strArr[i] == 1) {
      count++
    }
  }
  return count
};

// 8 kyu - Template Strings
var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}

// 8 kyu - Multiple of Index
function multipleOfIndex(array) {
  return array.filter((x,i) => x%i == 0)
}

// 8 kyu - Bin to Decimal
function binToDec(bin){
  return parseInt(bin, 2)
}

// 8 kyu - How many stairs will Suzuki climb in 20 years?
function stairsIn20(s){
  let y = []
  for (let i=0; i<s.length; i++) {
    y.push(s[i].reduce((a,c)=>a+c))
  }
  return 20*y.reduce((a,c)=>a+c)
}

// 8 kyu - Return the Day
function whatday(num) {
  switch(num) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}

// 8 kyu - Is the date today
function isToday(date) {
  let today = new Date()
  return (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear())
}

// 8 kyu - Sum of Multiples
function sumMul(n,m){
  if (n > 0 && m > 0) {
    let sum = 0
    let mult = n
    while (mult < m) {
      sum += mult
      mult += n
    }
    return sum
  }
  return 'INVALID'
}
