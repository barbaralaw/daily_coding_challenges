// 8 kyu - Training JS #21: Methods of String object--trim() and the string template
function fiveLine(s){
  s = s.trim()
  return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`
}

// 8 kyu - Training JS #29: methods of arrayObject---concat() and join()
function bigToSmall(arr){
  return [].concat(...arr).sort((a,b)=>b-a).join('>')
}

// 8 kyu - Training JS #34: methods of Math---pow() sqrt() and cbrt()
function cutCube(volume,n){
  return !(Math.cbrt(volume/n)%1) && !(Math.cbrt(n)%1) ? true : false
}
