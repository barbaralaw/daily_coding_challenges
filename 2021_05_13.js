// 7 kyu - shorter concat [reverse longer]
function shorter_reverse_longer(a,b){
  return a.length<b.length ? `${a}${b.split('').reverse().join('')}${a}` : `${b}${a.split('').reverse().join('')}${b}`
}

// 8 kyu - Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()
function howManySmaller(arr,n){
  return arr.map(x=>Number(x.toFixed(2))).filter(x=>x<n).length
}

// 7 kyu - Even number in an array
function evenNumbers(array, number) {
  const evens = []
  for (let i=array.length-1; i>=0; i--) {
    if (array[i]%2 === 0) {
      evens.unshift(array[i])
    }
    if (evens.length === number) {
      return evens
    }
  }
}

// 8 kyu - Parse float
function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

// 7 kyu - Remove duplicate words
function removeDuplicateWords (s) {
  return [...new Set(s.split(' '))].join(' ')
}

// 7 kyu - Grandma learning to text
function textin(s){
return s.replace(/too|to|two/gi, '2')
}
