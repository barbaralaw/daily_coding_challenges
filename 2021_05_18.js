// 7 kyu - Sort Out The Men From Boys
function menFromBoys(arr){
  let evens = []
  let odds = []
  for (let i=0; i<arr.length; i++) {
    if (!evens.includes(arr[i]) && !odds.includes(arr[i])) {
      if (arr[i] % 2 === 0) {
        evens.push(arr[i])
      } else {
        odds.push(arr[i])
      }
    }
  }
  evens.sort((a,b)=>a-b)
  odds.sort((a,b)=>b-a)
  return evens.concat(odds)
}

// 7 kyu - esreveR
reverse = function(array) {
  let rev = []
  for (let i=0; i<array.length; i++) {
    rev.unshift(array[i])
  }
  return rev
}

// 7 kyu - Indexed capitalization
function capitalize(s,arr){
  let sArr = s.split('')
  for (let i=0; i<arr.length; i++) {
    if (arr[i] < sArr.length) {
      sArr[arr[i]] = sArr[arr[i]].toUpperCase()
    }
  }
  return sArr.join('')
};

// 7 kyu - Find min and max
function getMinMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
};
