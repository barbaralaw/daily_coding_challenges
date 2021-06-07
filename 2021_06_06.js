// 7 kyu - Single character palindromes II
function solve(str){
  let count = 0
  for (let i=0; i<str.length/2; i++) {
    if (str[i] != str[str.length-1-i]) {
      count++
    }
  }
  return count == 1 ? true : str.length%2 && count == 0 ? true : false
}
