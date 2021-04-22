// 8 kyu - The Feast of Many Beasts
function feast(beast, dish) {
  return beast.toLowerCase()[0] === dish.toLowerCase()[0] && beast.toLowerCase()[beast.length-1] === dish.toLowerCase()[dish.length-1] ? true : false
}

// 8 kyu - Fake Binary
function fakeBin(x){
  return x.split('').map(dig => Number(dig) < 5 ? '0' : '1').join('')
}

// 8 kyu - Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

// 8 kyu - You only need one - Beginner
function check(a, x) {
  return a.includes(x)
}

// 8 kyu - A Strange Trip to the Market
function isLockNessMonster(s) {
  return s.includes('tree fiddy') || s.includes('3.50') || s.includes('three fifty')
}

// 8 kyu - No Loops 2 - You only need one
function check(a,x){
  return a.includes(x)
}

// 8 kyu - Sort and Star
function twoSort(s) {
  return s.sort()[0].split('').join('***')
}

// 8 kyu - noobCode 01: SUPERSIZE ME.... or rather, this integer!
function superSize(num){
  return Number(num.toString().split('').sort((a,b)=>b-a).join(''))
}

// 8 kyu - Name Shuffler
function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}

// 8 kyu - Reversed Words
function reverseWords(str){
  return str.split(' ').reverse().join(' ')
}

// 8 kyu - Reversing Words in a String
function reverse(string){
  return string.trim().split(' ').reverse().join(' ')
}
