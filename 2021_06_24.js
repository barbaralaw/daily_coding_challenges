// 7 kyu - sillyCASE
function sillycase(silly) {
  return silly.substring(0, Math.ceil(silly.length/2)).toLowerCase()+silly.substring(Math.ceil(silly.length/2)).toUpperCase()
}
