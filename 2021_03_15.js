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
