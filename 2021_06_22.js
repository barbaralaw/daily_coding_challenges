// 7 kyu - All Star Code Challenge #16
function noRepeat(str) {
  let seen = {}
  for (let i=0; i<str.length; i++) {
    if (seen[str[i]]) {
      seen[str[i]]++
    } else {
      seen[str[i]] = 1
    }
  }
  return Object.keys(seen).find(key => seen[key] === 1)
}

// 7 kyu - Selective Fear of Numbers
var AmIAfraid = function(day, num){
  if (day === 'Monday' && num === 12) {
    return true
  }
  if (day === 'Tuesday' && num > 95) {
    return true
  }
  if (day === 'Wednesday' && num === 34) {
    return true
  }
  if (day === 'Thursday' && num === 0) {
    return true
  }
  if (day === 'Friday' && num % 2 === 0) {
    return true
  }
  if (day === 'Saturday' && num === 56) {
    return true
  }
  if (day === 'Sunday' && Math.abs(num) === 666) {
    return true
  }
  return false
}

// 7 kyu - Fruit string calculator
function calculate(string) {
  let arr = string.split(' ')
  let nums = arr.filter(x => x.match(/[0-9]/g))
  console.log(nums)
  if (string.includes('gains')) {
    return Number(nums[0]) + Number(nums[1])
  }
  return Number(nums[0]) - Number(nums[1])
}

// 7 kyu - Reducing Problems - Bug Fixing #8
function calculateTotal(team1, team2) {
  if (team1.length === 0 || team2.length === 0) {
    return team1.length > team2.length
  }
  var t1s = team1.reduce((t, c) => t + c);
  var t2s = team2.reduce((t, c) => t + c);
  return t1s > t2s;
}

// 7 kyu - Find the Square Root
function squareRoot(x) {
  return Number((x**.5).toFixed(5))
}

// 7 kyu - Guess the Sequence
function sequence(x) {
  let nums = []
  for (let i=1; i<= x; i++) {
    nums.push(i)
  }
  return nums.sort()
}

// 7 kyu - Sort the Vowels!
function sortVowels(s){
  let ret = ''
  if (s) {
    const vowels = ['a','e','i','o','u']
    for (let i=0; i<s.length; i++) {
      if (vowels.includes(s[i].toLowerCase())) {
        ret += '|' + s[i]
      } else {
        ret += s[i] + '|'
      }
      if (i < s.length-1) {
        ret += '\n'
      }
    }
  }
  return ret
}

// 7 kyu - sPoNgEbOb MeMe
function spongeMeme(sentence) {
  let bob = ''
  for (let i=0; i<sentence.length; i++) {
    if (i % 2) {
      bob += sentence[i].toLowerCase()
    } else {
      bob += sentence[i].toUpperCase()
    }
  }
  return bob
}

// 6 kyu - Split Strings
function solution(str){
  let split = []
  if (str.length) {
    for (let i=0; i<str.length; i+=2) {
      split.push(str.substring(i,i+2))
    }
    if (split[split.length-1].length === 1) {
      split[split.length-1] = split[split.length-1]+'_'
    }
  }
  return split
}
