// 7 kyu - Simple remove duplicates
function solve(arr){
  let seen = {}
  for (let i=arr.length-1; i>=0; i--) {
    if (seen[arr[i]]) {
      arr.splice(i,1)
    } else {
      seen[arr[i]] = 1
    }
  }
  return arr
}
