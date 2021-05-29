// 7 kyu - Debug the functions EASY
function multi(arr) {
  return arr.reduce((a,c)=>a*c);
}
function add(arr) {
  return arr.reduce((a,c)=>a+c);
}
function reverse(str) {
  return str.split('').reverse().join('');
}

// 7 kyu - Last Survivor
function lastSurvivor(letters, coords) {
  for (let i=0; i<coords.length; i++) {
    letters = letters.slice(0,coords[i]) + letters.slice(coords[i]+1)
  }
  return letters
}
