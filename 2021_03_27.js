// 6 kyu - Meeting
function meeting(s) {
  let split1 = s.toUpperCase().split(";");
  let split2 = []
  for (let i=0; i<split1.length; i++) {
    let temp = split1[i].split(":").reverse().join(', ')
    split2.push(temp)
  }
  let joined = split2.sort().join(')(');
  joined = "(" + joined + ")"
  return joined
}

// 6 kyu - Financing Plan on Planet XY140Z-n
function finance(n) {
  // each n week you save ((n+1-i)/2)*(i+n + i+n+1-(n+1-i))
  let total = 0
  for (let i=0; i<=n; i++) {
    total += ((n+1-i)/2)*(i+n + i+n+1-(n+1-i))
  }
  return total
}

// 8 kyu - Logical calculator
function logicalCalc(array, op){
  let bool = array[0]
  let i = 0
  while (i < array.length - 1) {
    switch (op) {
      case 'AND':
        bool = bool && array[i+1]
        break;
      case 'OR':
        if (array.includes(true)){
          return true
        }
        return false
        break;
      case 'XOR':
        if ((bool && !array[i+1]) || (array[i+1] && !bool)) {
          bool = true;
        } else {
          bool = false;
        }
    }
    i++;
  }
  return bool

// 8 kyu - get character from ASCII value
function getChar(c){
  return String.fromCharCode(c)
}

// 7 kyu - Reverse a Number
function reverseNumber(n) {
  let str = String(n)
  if (n < 0) {
    str = String(n).slice(1)
  }
  let rev = Number(str.split('').reverse().join(''))
  if (n < 0) {
    rev *= -1
  }
  return rev
}
