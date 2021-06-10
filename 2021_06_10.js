// 7 kyu - Substituting Variables Into Strings: Padded Numbers
function solution(value){
  let str = '00000' + String(value)
  return 'Value is ' + str.slice(-5)
}
