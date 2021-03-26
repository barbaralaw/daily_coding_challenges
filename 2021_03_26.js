// 8 kyu - Be Concise III - Sum Squares
function sumSquares(array) {
  return array.reduce((a,c)=>a+(c**2),0)
}

// 8 kyu - Be Concise IV - Index of an element in an array
function find(a, e) {
  return a.indexOf(e) < 0 ? 'Not found' : a.indexOf(e)
}

// 7 kyu - Are the numbers in order?
function inAscOrder(arr) {
  for (let i=0; i<arr.length-1; i++) {
    if (arr[i] > arr[i+1]) {
      return false
    }
  }
  return true;
}

// 8 kyu - Remove duplicates from list
function distinct(a) {
  return [... new Set(a)]
}
