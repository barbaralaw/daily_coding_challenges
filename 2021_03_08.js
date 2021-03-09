// 5 kyu - Beeramid
var beeramid = function(bonus, price) {
  let level = 0;
  let curLevel = 1;
  while (Math.pow(curLevel,2)*price <= bonus) {
    bonus -= (curLevel*curLevel)*price;
    level++;
    curLevel++;
  }
  return level;
}

// 7 kyu - Breaking chocolate problem
function breakChocolate(n,m) {
  let splits = 0;
  if (n > 0 && m > 0) {
    // split into rows of 1
    splits += n-1;
    // split each row into 1x1
    splits += (m-1)*n
  }
  return splits;
}

// 8 kyu - Total amount of points
function points(games) {
  let total = 0;
  games.map(elem => {
    if(elem[0] === elem[2]) {
      total++;
    } else if (elem[0] > elem[2]) {
      total += 3;
    }
  });
  return total;
}

// 7 kyu - Sum of angles
function angle(n) {
  return (n-2)*180
}
