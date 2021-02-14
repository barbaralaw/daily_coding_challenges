// 7 kyu - Rearange Number to Get its Maximum
var maxRedigit = function(num) {
  if (num >= 100 && num < 1000) {
    let arr = (num.toString()).split('')
    arr.sort((a,b)=>b-a);
    return Number(arr.join(''))
  }
  return null
};
