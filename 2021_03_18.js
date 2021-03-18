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
