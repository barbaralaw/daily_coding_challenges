// 7 kyu - Find The Duplicated Number in a Consecutive Unsorted List
function findDup( arr ){
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let expSum = (arr.length-1)/2 * (min + max)
  return arr.reduce((a,c)=>a+c) - expSum
}
