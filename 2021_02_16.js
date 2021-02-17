// 7 kyu - Sum of Array Averages
const sumAverage = (arr) => {
  let averagesArr = []
  for (let i=0; i<arr.length; i++) {
    let total = 0
    for (let j=0; j<arr[i].length; j++) {
      total += arr[i][j]
    }
    averagesArr.push(total/arr[i].length)
  }
  return Math.floor(averagesArr.reduce((acc,cur)=>acc+cur))
}

// 7 kyu - Smallest value of an array
function min(arr, toReturn) {
  if (toReturn === 'value') {
    return Math.min.apply(Math, arr)
  } else {
    return arr.indexOf(Math.min.apply(Math, arr))
  }
}

// 7 kyu - max diff - easy
function maxDiff(list) {
  list.sort((a,b)=>a-b)
  return list[list.length-1] - list[0] || 0
};

// 7 kyu - Nth Smallest Element (Array Series #4)
function nthSmallest(arr, pos){
  arr.sort((a,b)=>a-b);
  return arr[pos-1]
}

// 7 kyu - Switcheroo
function switcheroo(x){
  let newStr = ''
  for (let i=0; i<x.length; i++) {
    if (x[i] === 'a') {
      newStr += 'b'
    } else if (x[i] === 'b') {
      newStr += 'a'
    } else {
      newStr += x[i]
    }
  }
  return newStr
}

// 5 kyu - Simple Pig Latin
function pigIt(str){
  let latin = []
  let arr = str.split(' ');
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  for (let i=0; i<arr.length; i++) {
    let str = ''
    let curStr = arr[i]
    if (alpha.includes(curStr[curStr.length-1].toLowerCase())) {
      str += curStr.substring(1, curStr.length)
      str += curStr[0]
      str += 'ay'
    } else {
      str += curStr
    }
    latin.push(str)
  }
  return latin.join(' ')
}

// 5 kyu - Perimeter of squares in a rectangle
function perimeter(n) {
  let fib = [0, 1];
  while (fib.length <= n+1) {
    fib.push(fib[fib.length-1]+fib[fib.length-2])
  }
  return 4*(fib.reduce((acc,cur)=>acc+cur))
}

// 5 kyu - The Hashtag Generator
function generateHashtag (str) {
  if (str.length === 0 || str.split(' ').join('').length === 0 || str.split(' ').join('').length >= 140) {
    return false
  }
  let hashtag = '#'
  let arr = str.split(' ');
  for (let i=0; i<arr.length; i++) {
    let first = arr[i][0]
    if (arr[i][0]) {
      hashtag += first.toUpperCase()
      hashtag += arr[i].substring(1, arr[i].length)
    }

  }
  return hashtag || false
}

// 5 kyu Moving Zeros to the End
var moveZeros = function (arr) {
  let moved = []
  let zeroes = []
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === 0) {
      zeroes.push(arr[i])
    } else {
      moved.push(arr[i])
    }
  }
  return moved.concat(zeroes)
}

// 5 kyu - Sort - one, three, two
function sortByName(ary) {
  let wordArray = []
  for (let i=0; i<ary.length; i++) {
    let curNum = ary[i]+''
    console.log(curNum)
    let str = ''
    if (curNum === '0') {
      wordArray.push('zero')
    } else {
      if (curNum.length === 3) {
        switch (curNum[0]) {
          case '1':
            str += 'one'
            break;
          case '2':
            str += 'two'
            break;
          case '3':
            str += 'three'
            break;
          case '4':
            str += 'four'
            break;
          case '5':
            str += 'five'
            break;
          case '6':
            str += 'six'
            break;
          case '7':
            str += 'seven'
            break;
          case '8':
            str += 'eight'
            break;
          case '9':
            str += 'nine'
            break;
        }
        str += ' hundred '
        curNum = curNum.slice(1)
      }

      if (curNum.length === 2) {
        switch (curNum[0]) {
          // for 2 digit numbers, need rules to deal with teen numbers
          case '1':
            switch (curNum[curNum.length-1]) {
                case '0':
                  str += 'ten'
                  break;
                case '1':
                  str += 'eleven'
                  break;
                case '2':
                  str += 'twelve'
                  break;
                case '3':
                  str += 'thirteen'
                  break;
                case '4':
                  str += 'fourteen'
                  break;
                case '5':
                  str += 'fifteen'
                  break;
                case '6':
                  str += 'sixteen'
                  break;
                case '7':
                  str += 'seventeen'
                  break;
                case '8':
                  str += 'eighteen'
                  break;
                case '9':
                  str += 'nineteen'
                  break;
            }
            break;
          case '2':
            str += 'twenty '
            curNum = curNum[curNum.length-1]
            break;
          case '3':
            str += 'thirty '
            curNum = curNum[curNum.length-1]
            break;
          case '4':
            str += 'forty '
            curNum = curNum[curNum.length-1]
            break;
          case '5':
            str += 'fifty '
            curNum = curNum[curNum.length-1]
            break;
          case '6':
            str += 'sixty '
            curNum = curNum[curNum.length-1]
            break;
          case '7':
            str += 'seventy '
            curNum = curNum[curNum.length-1]
            break;
          case '8':
            str += 'eighty '
            curNum = curNum[curNum.length-1]
            break;
          case '9':
            str += 'ninety '
            curNum = curNum[curNum.length-1]
            break;
          default:
            curNum = curNum[curNum.length-1]
            break;
        }
      }
      if (curNum.length === 1) {
        switch (curNum[curNum.length-1]) {
          case '1':
            str += 'one'
            break;
          case '2':
            str += 'two'
            break;
          case '3':
            str += 'three'
            break;
          case '4':
            str += 'four'
            break;
          case '5':
            str += 'five'
            break;
          case '6':
            str += 'six'
            break;
          case '7':
            str += 'seven'
            break;
          case '8':
            str += 'eight'
            break;
          case '9':
            str += 'nine'
            break;
        }
      }
      wordArray.push(str+' ' +ary[i])
    }
  }
  wordArray.sort()
  let finalArray = []
  for (let i=0; i<wordArray.length; i++) {
    let numbers = ['0','1','2','3','4','5','6','7','8','9']
    let digStr = ''
    for (let j=0; j<wordArray[i].length; j++) {
      if (numbers.includes(wordArray[i][j])) {
        digStr += wordArray[i][j]
      }
    }
    finalArray.push(Number(digStr))
  }
  return finalArray
}

// 8 kyu - Find Nearest Square
function nearestSq(n){
  let belowSquare = Math.pow(Math.floor(Math.sqrt(n)),2)
  let aboveSquare = Math.pow(Math.ceil(Math.sqrt(n)),2)
  if (Math.abs(belowSquare-n) < Math.abs(aboveSquare-n)) {
    return belowSquare
  }
  return aboveSquare
}

// 8 kyu - Welcome to the City
function sayHello( name, city, state ) {
  return  `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

// 8 kyu - Area of a Square
function squareArea(A){
  return Number(Math.pow((A/(.5*Math.PI)),2).toFixed(2))
}
