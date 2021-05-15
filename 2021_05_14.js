// 7 kyu - All unique
function hasUniqueChars(str){
  let seen = {}
  for (let i=0; i<str.length; i++) {
    if (seen[str[i]]) {
      return false
    } else {
      seen[str[i]] = 1;
    }
  }
  return true
}
