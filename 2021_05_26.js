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

// 6 kyu - Give me a Diamond
function diamond(n){
  let rock = ''
  if (n%2 && n>0) {
    for (let i=1; i<=n; i+=2) {
      rock += ' '.repeat((n-i)/2) + '*'.repeat(i) + '\n'
    }
    for (let i=n-2; i>=1; i-=2) {
      rock += ' '.repeat((n-i)/2) + '*'.repeat(i) + '\n'
    }
  } else {
    return null
  }
  return rock
}
