// 6 kyu - Are they the "same"?
function comp(array1, array2){
  if (array1 == null || array2 == null) {
    return false;
  }
  for (let i=0; i<array1.length; i++) {
    if (array1.sort((a,b)=>a-b)[i]**2 === array2.sort((a,b)=>a-b)[i]) {
      continue
    } else {
      return false;
    }
  }
  return true;
}

// 7 kyu - Reverse words
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

// 7 kyu - Simple Fun #176: Reverse Letter
function reverseLetter(str) {
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let reversed = ''
  for (let i=str.length-1; i>=0; i--) {
    if (alpha.includes(str[i].toLowerCase())) {
        reversed += str[i]
    }
  }
  return reversed
}

// Summing a number's digits
function sumDigits(number) {
  if (number.toString()[0] != '-') {
    return number.toString().split('').reduce((a,c)=>a+Number(c),0)
  }
  return number.toString().slice(1).split('').reduce((a,c)=>a+Number(c),0)
}

// 6 kyu - Dubstep
function songDecoder(song){
  return song.split('WUB').filter(x=>x != '').join(' ')
}

// Bouncing Ball
function bouncingBall(initial, proportion) {
  let bounces = 0;
  let height = initial;
  while (height > 1) {
    height = height * proportion;
    bounces++
  }
  return bounces;
};

// 6 kyu - Bouncing Balls
function bouncingBall(h,  bounce,  window) {
  let seenNum = -1;
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    while (h > window) {
      h = h * bounce;
      seenNum += 2
    }
  }
  return seenNum;
}

// Where is my parent!?(cry)
function findChildren(dancingBrigade){
  let sorted = (dancingBrigade.toLowerCase().split('').sort())
  sorted[0] = sorted[0].toUpperCase()
  for (let i=1; i<sorted.length-1; i++) {
    if (sorted[i-1].toLowerCase() != sorted[i]) {
      sorted[i] = sorted[i].toUpperCase()
    }
  }
  return sorted.join('')
};

// 6 kyu - Is a number prime?
function isPrime(num) {
  if (num <= 3) {
    return num > 1;
  }
  if ((num % 2 === 0) || (num % 3 === 0)) {
    return false;
  }
  let count = 5;
  while (Math.pow(count, 2) <= num) {
    if (num % count === 0 || num % (count + 2) === 0) {
      return false;
    }
    count += 6;
  }
  return true;
}
