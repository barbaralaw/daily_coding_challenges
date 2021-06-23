// 5 kyu - First non-repeating character
function firstNonRepeatingLetter(s) {
  let seen = {}
  if (s.length) {

    for (let i=0; i<s.length; i++) {
      if (seen[s[i].toLowerCase()]) {
        seen[s[i].toLowerCase()]++
      } else {
        seen[s[i].toLowerCase()] = 1
      }
    }

    let ret = Object.keys(seen).find(keys => seen[keys] === 1)

    if (ret) {
      if (s.includes(ret)) {
        return Object.keys(seen).find(keys => seen[keys] === 1) || ''
      } else {
        return Object.keys(seen).find(keys => seen[keys] === 1).toUpperCase() || ''
      }
    }

  }
  return ''
}
