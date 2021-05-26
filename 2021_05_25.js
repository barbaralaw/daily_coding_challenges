// 7 kyu - Simple Fun #136: Missing Values
function missingValues(arr) {
  let counts = {}
  for (let i=0; i<arr.length; i++) {
    if (counts[arr[i]]) {
      counts[arr[i]] = counts[arr[i]] + 1
    } else {
      counts[arr[i]] = 1
    }
    console.log(counts)
  }
  let x
  let y
  for (let count in counts) {
    console.log(count, counts[count])
    if (counts[count] === 1) {
      x = count
    }
    if (counts[count] === 2) {
      y = count
    }
  }
  return x*x*y
}

// 7 kyu - Elevator Distance
function elevatorDistance(array) {
  let count = 0
  for (let i=1; i<array.length; i++) {
    count += Math.abs(array[i-1]-array[i])
  }
  return count
}

// 7 kyu - An English Twist on a Japanese Classic
function shiritori(words) {
  let valid = []
  if (words.length === 0 || words[0].length === 0) {
    return valid
  } else {
    valid.push(words[0])
  }
  for (let i=1; i<words.length; i++) {
    let lastPrev = words[i-1][words[i-1].length-1]
    console.log(lastPrev)
    if (words[i].length === 0 || words[i][0] !== lastPrev) {
      return valid
    }
    valid.push(words[i])
    console.log(valid)
  }
  return valid
}

// 7 kyu - Merge two arrays
function mergeArrays(a, b) {
  let blend = []
  for (let i=0; i<Math.min(a.length, b.length); i++) {
    blend.push(a[i])
    blend.push(b[i])
  }
  let extras
  if (a.length > b.length) {
    extras = a.slice(b.length)
  } else {
    extras = b.slice(a.length)
  }
  return blend.concat(extras)
}

// 7 kyu - One Line Task: Making Pizza
function makePizza(pieces) { //Let's make n pieces of Pizza ;-)
  var result = "";
  while ( pieces-- ){
    var needSteps = 5;
    while ( needSteps-- ) result += make( needSteps +1);
  }
  return result;
}
function make(step){
  switch ( step ){
    case 5: return "P";
    case 4: return "i";
    case 3:
    case 2: return "z";
    case 1: return "a";
  }
}

// 7 kyu - Split an array
function split(arr, prop) {
  // given an array of objects & a test property
  // return an array of 2 arrays - 1st is truthy results to test, 2nd is falsy

  // setting up my empty return array of empty arrays
  let sorted = [[],[]]
  // iterate through arr
  for (i=0; i<arr.length; i++) {
    // if the object in arr has a truthy prop value
    if (arr[i][prop]) {
      // add it to 1st index of sorted
      sorted[0].push(arr[i])
    } else {
      // add it to 2nd index of sorted
      sorted[1].push(arr[i])
    }
  }
  return sorted
}

// 7 kyu - FIXME: Get Full Name
class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName;
    this.lastName = lastName
  }

  getFullName(){
    let returnStr = ''
    if (this.firstName.length > 0) {
      returnStr += this.firstName
    }
    if (this.firstName.length > 0 && this.lastName.length > 0) {
      returnStr += ' '
    }
    if (this.lastName.length > 0) {
      returnStr += this.lastName
    }
    return returnStr
  }

}

// 7 kyu - FIXME: Get Full Name
class Dinglemouse{

  constructor( firstName, lastName ){
    this.firstName = firstName
    this.lastName = lastName
  }

  getFullName(){
    return (this.firstName+" "+this.lastName).trim()
  }

}

// 7 kyu - Simple Fun #152: Invite More Women?
function inviteMoreWomen(L) {
  return L.reduce((a,c)=>a+c) > 0 ? true : false
}

// 7 kyu - Say hello!
function greet(name) {
  return name == null || name.length == 0 ? null : `hello ${name}!`
}

// 8 kyu - Freudian translator
function toFreud(string) {
  if (string.length == 0) {
    return ''
  }
  return string.split(' ').map(x => 'sex').join(' ')
}
