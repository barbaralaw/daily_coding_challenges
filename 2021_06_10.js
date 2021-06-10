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
