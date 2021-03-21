// 8 kyu - Swap Values
function swapValues(arr) {
    let temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

// 7 kyu - Coding 3min: Bug in Apple
function sc(apple){
  for (let i=0; i<apple.length; i++) {
    for (let j=0; j<apple[i].length; j++) {
      if (apple[i][j] === 'B') {
        return [i,j]
      }
    }
  }
}

// 8 kyu - Coding 3min: Jumping Dutch Act
function sc(floor){
  let yell = '';
  if (floor <= 1) {
    return yell;
  } else {
    for (let i=0; i<floor-1; i++) {
      yell += 'Aa~ '
    }
    yell += 'Pa!'
  }
  if (floor <= 6) {
    yell += ' Aa!'
  }
  return yell
}
