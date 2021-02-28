// 7 kyu - Paul's Misery
function paul(x){
  let total = 0;
  for (let i=0; i<x.length; i++) {
    switch (x[i]) {
        case 'kata':
          total += 5;
          break;
        case 'Petes kata':
          total += 10;
          break;
        case 'eating':
          total += 1;
          break;
        default:
          break;
    }
  }
  if (total < 40) {
    return 'Super happy!'
  } else if (total < 70) {
    return 'Happy!'
  } else if (total < 100) {
    return 'Sad!'
  } else {
    return 'Miserable!'
  }
}
