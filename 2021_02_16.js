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
