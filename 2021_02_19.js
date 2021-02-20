// 7 kyu - Ones and Zeros
const binaryArrayToNumber = arr => {
  let str = arr.join('');
  return parseInt(str, 2)
};

// 7 kyu - Number of People in the Bus
var number = function(busStops){
  let busNum = 0;
  for (let i=0; i<busStops.length; i++) {
    busNum = busNum + busStops[i][0] - busStops[i][1]
  }
  return busNum
}

// 7 kyu - String ends with?
function solution(str, ending){
  return str.slice(str.length-ending.length) === ending
}

// 7 kyu - Maximum Product
function adjacentElementsProduct(array) {
  let productArr = []
  for (let i=0; i<array.length-1; i++) {
    productArr.push(array[i]*array[i+1])
    console.log(productArr)
  }
  return Math.max(...productArr)
}

// 8 kyu - Remove String Spaces
function noSpace(x){
  return (x.split(' ').join(''))
}

// 8 kyu - Remove the time
function shortenToDate(longDate) {
  let dateArr = longDate.split(',')
  return dateArr[0]
}

// 8 kyu - Arguments to Binary addition
function arr2bin(arr){
  let sum = 0;
  for (let i=0; i<arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  return sum.toString(2)
}

// 8 kyu - pick a set of first elements
function first(arr, n = 1) {
  return arr.slice(0,n)
}

// 4 kyu - Range Extraction
function solution(list){
  let rangeStr = ''
  let currentRange = [list[0]]
  for (let i=0; i<list.length-1; i++) {
    if (list[i]+1 != list[i+1]) {
      currentRange[1] = list[i];
      if (currentRange[0] === currentRange[1]) {
        rangeStr += currentRange[0] + ',';
      } else if (currentRange[0]+1 === currentRange[1]) {
        rangeStr += currentRange[0] + ',' + currentRange[1] + ',';
      } else {
        rangeStr += currentRange[0] + '-' + currentRange[1] + ',';
      }
      currentRange[0] = list[i+1];
    }
  }
  currentRange[1] = list[list.length-1];
  if (currentRange[0] === currentRange[1]) {
    rangeStr += currentRange[0] + ',';
  } else if (currentRange[0]+1 === currentRange[1]) {
    rangeStr += currentRange[0] + ',' + currentRange[1];
  } else if (currentRange[0] < currentRange[1]) {
    rangeStr += currentRange[0] + '-' + currentRange[1];
  } else {
    rangeStr += currentRange[0]
  }
  if (rangeStr[rangeStr.length-1] === ',') {
    return rangeStr.substring(0, rangeStr.length-1);
  }
  return rangeStr

// 8 kyu - Hello, Name or World!
function hello(name = 'World') {
  if (name.length >= 1) {
    return `Hello, ${name.toUpperCase()[0]}${name.toLowerCase().slice(1)}!`
  }
  return `Hello, World!`;
}
