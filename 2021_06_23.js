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

// 7 kyu - Mythical Heads and Tails
function beasts(heads, tails){
  // 2o + 5h = heads
  // o + h = tails
  // 2o + 2h = 2tails
  // 2o + 5h - 2o - 2h = heads - 2tails
  // 3h = heads - 2tails
  // h = (heads - 2tails)/3
  let hydra = ((heads - 2*tails)/3)
  let orthus = (tails - ((heads - 2*tails)/3))
  if (hydra%1 == 0 && orthus%1 == 0 && hydra>=0 && orthus>=0) {
    return [(tails - ((heads - 2*tails)/3)), ((heads - 2*tails)/3)]
  }
  return 'No solutions'
}
