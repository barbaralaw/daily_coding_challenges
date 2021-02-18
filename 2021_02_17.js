// 8 kyu - Expressions Matter
function expressionMatter(a, b, c) {
  let max = a*b*c;
  if (a*(b+c) > max) {
    max = a*(b+c);
  }
  if ((a+b)*c > max) {
    max = (a+b)*c;
  }
  if ((a*b)+c > max) {
    max = (a*b)+c
  }
  if (a+(b*c) > max) {
    max = a+(b*c)
  }
  if (a+b+c > max) {
    max = a+b+c
  }
  return max
}

// 8 kyu - Will there be enough space?
function enough(cap, on, wait) {
  return on + wait <= cap ? 0 : (on+wait)-cap
}

// 8 kyu - Remove exclamation marks
function removeExclamationMarks(s) {
  return s.split('').filter(x => x!='!').join('')
}

// 8 kyu - Grasshopper - Personalized Message
function greet (name, owner) {
  return 'Hello ' + (name === owner ? 'boss' : 'guest')
}

// 8 kyu - Grasshopper - Messi goals function
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals+copaDelReyGoals+championsLeagueGoals
}

// 8 kyu - Grasshopper - Check for factor
function checkForFactor (base, factor) {
  return base % factor === 0 ? true : false
}

// 8 kyu - Grasshopper - Terminal game move function
function move (position, roll) {
  return position+(2*roll)
}

// 8 kyu - Grasshopper - Function syntax debuggins
function main (verb, noun) {
  return `${verb}${noun}`
}

// 8 kyu - Simple Fun #261 - Whose Move
function whoseMove(lastPlayer, win) {
  return ((lastPlayer === 'black' && win == true) ||(lastPlayer === 'white' && win == false)) ? 'black' : 'white'
}

// 8 kyu - Hold old will I be in 2099?
function  calculateAge(born, year) {
  if (born > year) {
    if (born-year === 1) {
      return `You will be born in 1 year.`
    } else {
      return `You will be born in ${born-year} years.`
    }
  } else if (born === year) {
    return `You were born this very year!`
  } else {
    if (year-born === 1) {
      return `You are 1 year old.`
    } else {
      return `You are ${year-born} years old.`
    }
  }
}

// 8 kyu - Are arrow functions odd?
const odds = values => values.filter(x=>x%2!=0)

// 8 kyu - What's the real floor?
function getRealFloor(n) {
  return n <= 0 ? n : n < 13 ? n-1 : n-2
}

// 8 kyu - Do you speak "English"?
function spEng(sentence){
  return sentence.toLowerCase().includes('english')
}

// 8 kyu - Who ate the cookie?
function cookie(x){
  return (`Who ate the last cookie? It was ` + (typeof x === 'string' ? `Zach` : typeof x === 'number' ? 'Monica' : 'the dog')  + '!')
}

// 8 kyu - Man in the west
function checkTheBucket(bucket){
  return bucket.includes('gold')
}

// 8 kyu - Find out whether the shape is a cube
var cubeChecker = function(volume, side){
  if (volume <= 0 || side <= 0) {
    return false
  }
  return Math.pow(side,3) === volume
};

// 8 kyu - Find the Slope
function slope(points) {
  if (points[2]-points[0] === 0) {
    return 'undefined'
  }
  return ((points[3]-points[1])/(points[2]-points[0]))+''
}

// 8 kyu - Find the Integral
function integrate(coefficient, exponent) {
  return `${coefficient/(exponent+1)}x^${exponent+1}`
}

// 8 kyu - Blood-Alcohol Content
function bloodAlcoholContent(drinks, weight, sex, time){
  let r = .66
  if (sex === 'male') {
    r = .73
  }
  let A = drinks.ounces * drinks.abv
  return Number(((A * 5.14 / weight * r) - .015 * time).toFixed(4))
}

// 8 kyu - Fuel Calculator
function fuelPrice(litres, pricePerLitre) {
 if (litres < 2) {
   return Number((litres * pricePerLitre).toFixed(2))
 } else if (litres < 4) {
   return Number((litres * (pricePerLitre - .05)).toFixed(2))
 } else if (litres < 6) {
   return Number((litres * (pricePerLitre - .1)).toFixed(2))
 } else if (litres < 8) {
   return Number((litres * (pricePerLitre - .15)).toFixed(2))
 } else if (litres < 10) {
   return Number((litres * (pricePerLitre - .2)).toFixed(2))
 } else {
   return Number((litres * (pricePerLitre - .25)).toFixed(2))
 }
}
