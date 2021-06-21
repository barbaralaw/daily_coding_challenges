// 7 kyu - Pandemia 🌡️
function infected(s) {
  let arr = s.split('X')
  let spread = arr.map(x => {
    if (x.includes('1')) {
      return '1'.repeat(x.length)
    } else {
      return '0'.repeat(x.length)
    }
  })
  let tot = spread.join('')
  let inf = tot.split('').filter(x => x==='1')
  return (inf.length / tot.length)*100 || 0
}

// 7 kyu - Finding length of a sequence
var lengthOfSequence = function (arr, n) {
  let nIdxs = arr.map((x,i) => {
    if (x === n) {
      return i
    } else {
      return ''
    }
  })
  let shorter = nIdxs.filter(x => x !== '')
  if (shorter.length != 2) {
    return 0
  }
  return Math.abs(shorter[1]-shorter[0])+1
};

// 7 kyu - Squares sequence
function squares(x, n) {
  let nums = []
  while (n > 0) {
    nums.push(x)
    x *= x
    n--
  }
  return nums
}

// 7 kyu - String matchup
function solve(a,b){
  let counts = []
  counts.length = b.length
  counts.fill(0)
  for (let i=0; i<b.length; i++) {
    for (let index in a) {
      if (a[index] === b[i]) {
        counts[i]++
      }
    }
  }
  return counts
}

// 7 kyu - Counting Array Elements
function count(array){
  const seen = {}
  let count = 0
  for (let i=0; i<array.length; i++) {
    if (seen[array[i]]) {
      seen[array[i]]++
    } else {
      seen[array[i]] = 1
    }
  }
  return seen
}

// 7 kyu - Invisible cubes
function notVisibleCubes(n) {
  return n > 2 ? (n-2)**3 : 0
}

// 7 kyu - Alphabetical Addition
function addLetters(...letters) {
  let tot = 0
  for (let i=0; i<letters.length; i++) {
    tot += letters[i].charCodeAt(0) - 96
  }
  return String.fromCharCode((tot%26)+96) == '`' ? 'z' : String.fromCharCode((tot%26)+96)
}

// 7 kyu - Failed Sort - Bug Fixing #4
var sortArray = function(value) {
  return value.split('').sort((c, p) => c - p ).join('');
}

// 7 kyu - Number Manipulation I (Easy)
function manipulate(num) {
  let str = String(num)
  str = str.slice(0, str.length/2) + '0'.repeat(Math.ceil(str.length/2))
  return Number(str);
}

// 7 kyu - Build a Square
function generateShape(integer){
  let square = ''
  for (let i=1; i<integer; i++) {
    square += '+'.repeat(integer) + '\n'
  }
  square += '+'.repeat(integer)
  return square
}

// 7 kyu - Reverse list
function reverseList(arr) {
  return arr.reverse();
}

// 7 kyu - Are they square?
var isSquare = function(arr){
  return arr.length > 0 ? arr.every(x => (x**.5)%1 == 0) : undefined
}

// 7 kyu - How many animals are there?
function countAnimals(sentence) {
  return sentence.split(' ').filter(x => x.match(/[0-9]/g)).reduce((a,c)=>a+Number(c), 0)
}

// 7 kyu - Alternate Summed Square
function alternateSqSum(arr){
  let squared = arr.map((x,i)=> {
    if (i % 2) {
      return x**2
    } else {
      return x
    }
  })
  return arr.length ? squared.reduce((a,c)=>a+c) : 0
}

// 7 kyu - Sum and Multiply
var sumAndMultiply = function(sum, multiply) {
  let num1 = sum
  while (num1 >= 0) {
    let num2 = sum - num1
    if (multiply / num1 == num2) {
      return [num2, num1]
    }
    num1--
  }
  return null
}

// 7 kyu - Simple Fun #195: Guess Hat Color
function guessHatColor(a,b,c,d) {
  if (b == c) {
    return 1
  }
  return 2
}

// 7 kyu - Odd-Even String Sort
function sortMyString(S) {
    return S.split('').filter((x,i)=> i%2 == 0).join('') + ' ' + S.split('').filter((x,i)=> i%2).join('')
}
