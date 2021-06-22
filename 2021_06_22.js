// 7 kyu - All Star Code Challenge #16
function noRepeat(str) {
  let seen = {}
  for (let i=0; i<str.length; i++) {
    if (seen[str[i]]) {
      seen[str[i]]++
    } else {
      seen[str[i]] = 1
    }
  }
  return Object.keys(seen).find(key => seen[key] === 1)
}
