// 7 kyu - Substituting Variables Into Strings: Padded Numbers
function solution(value){
  let str = '00000' + String(value)
  return 'Value is ' + str.slice(-5)
}

// 8 kyu - Hex to Decimal
function hexToDec(hexString){
  return parseInt(hexString, 16)
}

// 7 kyu - A Gift Well Spent
var buy = function(x, arr){
  // PREP - Parameters, Returns, Examples, Pseudocode

  // go through arr item by item
  for (let i=0; i<arr.length; i++) {
    // check if x - arr[i] is in array
    if (arr.slice(i+1).includes(x-arr[i])) {
      let newIdx = arr.slice(i+1).indexOf(x-arr[i])
      // if so, return array of those indeces
      return [i, newIdx+i+1]
    }
  }

  return null;
};

// 7 kyu - Largest pair sum in Array
function largestPairSum(numbers){
  numbers.sort((a,b)=>b-a)
  return numbers[0]+numbers[1]
}

// 7 kyu - String reverse slicing 101
function reverseSlice(str) {
  let rev = str.split('').reverse().join('')
  let list = []
  while (rev.length > 0) {
    list.push(rev)
    rev = rev.slice(1)
  }
  return list
}

// 7 kyu - Flatten
var flatten = function (array){
  return [].concat(...array)
}

// 7 kyu - Move all Vowels
function moveVowel(input) {
  let str = ''
  let vowStr = ''
  let vowels = ['a','e','i','o','u']
  for (let i=0; i<input.length; i++) {
    if (vowels.includes(input[i])) {
      vowStr += input[i]
    } else {
      str += input[i]
    }
  }
  return str + vowStr
}

// 7 kyu - Maximum Triplet Sum (Array Series #7)
function maxTriSum(numbers){
  numbers.sort((a,b)=>b-a)
  let maxSum = numbers[0]
  let added = 1
  let i=1
  while (added < 3) {
    if (numbers[i] != numbers[i-1]) {
      maxSum += numbers[i]
      added++
    }
    i++
  }
  return maxSum
}
