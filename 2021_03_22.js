// 7 kyu - Drying Potatoes
function potatoes(p0, w0, p1) {
  return Math.floor(w0 * (100-p0)/(100-p1))
}

// 7 kyu - Vowel Count
function getCount(str) {
  return str.split('').filter(x => /^[aeiuo]$/.test(x)).length
}
