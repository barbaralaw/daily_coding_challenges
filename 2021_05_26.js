// 8 kyu - Count the number of cubes with paint on
var countSquares = function(n){
  return n ? ((n+1)*Math.pow(n+1,2))-((n-1)*Math.pow(n-1,2)) : 1
}

// 8 kyu - Generate user links
function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`
}

// 8 kyu - Circular Objects #1 - Running around in circles
const circular = { value: 'Hello World'}
circular.self = circular
