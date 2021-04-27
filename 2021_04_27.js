// 6 kyu - Sort the odd
function sortArray(arr) {
  let oddArr = arr.filter(x=>x % 2 != 0).sort((a,b)=>a-b)
  let sortedArr = []
  for (let i=arr.length-1; i>=0; i--) {
    if (arr[i] % 2 === 0) {
      sortedArr.unshift(arr[i])
    } else {
      sortedArr.unshift(oddArr.pop())
    }
  }
  return sortedArr
}
