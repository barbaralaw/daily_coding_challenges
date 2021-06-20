// 6 kyu - Detect Pangram
function isPangram(string){
  let alphaArr = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let strArr = string.split('')
  return alphaArr.every(x => strArr.some(y => x==y.toLowerCase()))
}
