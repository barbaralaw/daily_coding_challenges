// 5 kyu - Mean Square Error
var solution = function(firstArray, secondArray) {
  let sum = 0
  for (let i=0; i<firstArray.length; i++) {
    let diff = Math.abs(firstArray[i]-secondArray[i])
    sum += diff**2
  }
  return sum / firstArray.length
}
