// 7 kyu - Simple Fun #74: Growing Plant
function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let dayCount = 1
  let plantHt = upSpeed
  while (plantHt < desiredHeight) {
    plantHt = plantHt - downSpeed + upSpeed
    dayCount++
  }
  return dayCount
}

// 7 kyu - Word values
function wordValue(arr) {
  // have numArr = []
  const numArr = []
  // charCode of a = 97
  // loop through arr
  for (let i=0; i<arr.length; i++) {
    let wordSum = 0
    for (let j=0; j<arr[i].length; j++) {
      if (arr[i].charCodeAt(j) - 96 >= 1) {
        wordSum += arr[i].charCodeAt(j) - 96
      }
    }
    numArr.push(wordSum * (i+1))
  }
  // set a wordSum to zero
    // for each item in arr, check the charCode and subtract 96. if that is >= 1, add that to wordSum
  // push wordSum * (index +1) to the numArr
  return numArr
}
