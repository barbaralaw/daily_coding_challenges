// 8 kyu - Training JS #21: Methods of String object--trim() and the string template
function fiveLine(s){
  s = s.trim()
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`
}
