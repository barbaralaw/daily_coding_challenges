// 6 kyu - IQ Test
function iqTest(numbers){
  // P - given a string of numbers separated by spaces
  // R - need to return location of odd number out as a number (index+1)
  // E - "2 4 7 8 10" returns 3, "1 2 2" returns 1
  // P -
  // split number string into individual numbers
  let numArr = numbers.split(' ')
  // set norm to first number % 2
  let norm = numArr[0]%2
  // if 2nd number %2 != norm, then check 3rd number to see which is weird
  if (norm != numArr[1]%2) {
    if (norm != numArr[2]%2) {
      // return weird number
      return 1 // index 0 + 1
    }
    return 2 // index 1 + 1
  }
  // otherwise go through and find weird number
  for (let i=1; i<numArr.length; i++) {
    if (numArr[i]%2 != norm) {
      // return weird number when found
      return i+1
    }
  }
  return -1
}

// 7 kyu - Sum of odd numbers
function rowSumOddNumbers(n) {
	// P - given a number n
  // R - must return a number equal to the sum of odd numbers in that pyramid row
  // E - n = 4 returns 64
  return n**3
}

// 7 kyu - Count the Digit
function nbDig(n, d) {
  let digs = '';
  for (let i=0; i<=n; i++) {
    digs = digs + i**2 + ''
  }
  return digs.split('').filter(x => x == d).length
}

// 7 kyu - Area of a Circle
var circleArea = function(radius) {
  if (radius > 0) {
    return Number((Math.PI*radius*radius).toFixed(2))
  }
  return false;
};

// 8 kyu - Enumerable Magic #3 - Does My List Include This?
function include(arr, item){
  return arr.includes(item)
}

// 8 kyu - Enumerable Magic #1 - True for All?
function all( arr, fun ){
  let filt = arr.filter(x => fun(x));
  if (arr.length === filt.length) {
    return true;
  }
  return false;
}

// 8 kyu - Enumerable Magic #2 - True for Any?
function any(arr, fun){
  let filt = arr.filter(x => fun(x))
  if (filt.length > 0) {
    return true;
  }
  return false;
}

// 8 kyu - Enumerable Magic #5- True for Just One?
function one(arr, fun){
  let filt = arr.filter(x => fun(x))
  return filt.length === 1
}

// 8 kyu - Is there a vowel in there?
function isVow(a){
  let vowelCodes = [97,101,105,111,117]
  for (let i=0; i<a.length; i++) {
    if (vowelCodes.includes(a[i])) {
      a[i] = String.fromCharCode(a[i])
    }
  }
  return a
}
