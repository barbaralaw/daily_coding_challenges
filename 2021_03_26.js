// 8 kyu - Be Concise III - Sum Squares
function sumSquares(array) {
  return array.reduce((a,c)=>a+(c**2),0)
}

// 8 kyu - Be Concise IV - Index of an element in an array
function find(a, e) {
  return a.indexOf(e) < 0 ? 'Not found' : a.indexOf(e)
}
