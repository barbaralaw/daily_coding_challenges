// 6 kyu - Sum of Parts
function partsSums(ls) {
  let sums = [ls.reduce((a,c)=>a+c,0)];
  let subtract = 0;
  if (ls.length >= 1) {
    for (let i=0; i<ls.length; i++) {
      subtract = ls[i];
      sums.push(sums[i]-subtract);
    }
  }
  return sums
}

/* TOO SLOW:
  let sums = [];
  while (ls.length > 0) {
    sums.push(ls.reduce((a,c)=>a+c,0))
    ls.shift()
  }
  sums.push(0)
  return sums

  or

  let sums = [];
  let subtract = 0;
  for (let i=0; i<ls.length; i++) {
    sums.push((ls.reduce((a,c)=>a+c,0))-subtract);
    subtract += ls[i];
  }
  sums.push(0)
  return sums
*/

// 7 kyu - Thinkful - String Drills: Quotable
// I did this kata is Python b/c it was very easy and also b/c I want to try to translate it to js
def quotable(name, quote):
    return name + ' said: "' + quote + '"'

// 8 kyu - Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  let joined = arr1.concat(arr2).sort((a,b)=>a-b)
  let i=0;
  let j=1;
  while (j < joined.length) {
    if (joined[j] !== joined[i]) {
      i++
      joined[i] = joined[j]
      j++
    } else {
      j++
    }
  }
  return joined.slice(0,i+1);
}

// 8 kyu - String Templates - Bug Fixing #5
function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

// 8 kyu - Price of Mangoes
function mango(quantity, price){
  return price*Math.ceil(quantity/3*2)
}

// 8 kyu - Geometry Basics: Circle Area in 2D
function circleArea(circle){
  return (Math.PI*(circle.radius**2))
}

// 8 kyu - Geometry Basics: Distance between points in 2D
function distanceBetweenPoints(a, b) {
  return Math.sqrt(((Math.abs(a.x-b.x))**2)+((Math.abs(a.y-b.y))**2))
}

// 8 kyu - Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
  return 2*Math.PI*circle.radius
}

// 6 kyu - Rectangle into Squares
function sqInRect(lng, wdth){
  if (lng === wdth) {
    return null
  }
  let sqs = [];
  while (lng > 0 && wdth > 0) {
    sqs.push(Math.min(lng, wdth));
    if (lng > wdth) {
      lng = lng - wdth;
    } else if (wdth > lng) {
      wdth = wdth-lng;
    } else {
      lng = 0;
      wdth = 0;
    }
  }
  return sqs
}

// 7 kyu - Four/Seven
function fourSeven(n){
  while (n == 7 || n == 4) {
    return 11-n;
  }
  return 0
}

// 7 kyu - Holiday III - Fire on the boat
function fireFight(s){
  let arr = s.split(' ')
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === 'Fire') {
      arr[i] = `~~`
    }
  }
  return arr.join(' ')
}
