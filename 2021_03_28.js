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
