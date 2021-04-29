// 6 kyu - Chess piece values
function piecesValue(arr, s) {
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    for (let j=0; j<arr[i].length; j++) {
      let curSpace = arr[i][j]
      if (curSpace[0] === s[0]) {
        if (curSpace.slice(2) != 'king') {
          total += hash[curSpace.slice(2)]
        }
      }
    }
  }
  return total
}

// 6 kyu - Sum of Digits / Digital Root
function digital_root(n) {
  if (n < 10) {
    return n
  }

  let newStr = String(n).split('')
  const newN = newStr => {
    let tot = 0
    for (let i=0; i<newStr.length; i++) {
      tot += Number(newStr[i])
    }
    return tot
  }
  return digital_root(newN(newStr))
}
