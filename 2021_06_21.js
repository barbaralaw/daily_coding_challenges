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
