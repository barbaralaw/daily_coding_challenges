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

// 7 kyu - "Very Even" Numbers.
function isVeryEvenNumber(n) {
  if (n < 10 && n % 2 === 0) {
    return true;
  }
  if (n >= 10) {
    return isVeryEvenNumber(String(n).split('').reduce((a,c)=>a+Number(c),0))
  }
  return false
}

// 6 kyu - +1 Array
function upArray(arr){
  let digs = [0,1,2,3,4,5,6,7,8,9]
  if (arr.length != arr.filter(x=>digs.includes(x)).length || arr.length == 0) {
    return null
  } else if (arr.length > 15) {
    let smArr = arr.slice(-5);
    let str = smArr.join('')
    let num = Number(str)+1
    let newArr = String(num).split('')
    let numArr = []
    for (let i=0; i<arr.length-5; i++) {
      numArr.push(arr[i])
    }
    for (let i=0; i<newArr.length; i++) {
      numArr.push(Number(newArr[i]))
    }
    return numArr
  } else {
    let str = arr.join('')
    let num = Number(str)+1
    let newArr = String(num).split('')
    let numArr = []
    for (let i=0; i<newArr.length; i++) {
      numArr.push(Number(newArr[i]))
    }
    return numArr
  }
}
