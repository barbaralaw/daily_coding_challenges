// 7 kyu - Convert an array of strings to array of numbers
function toNumberArray(stringarray){
  for (let i=0; i<stringarray.length; i++) {
    stringarray[i] = Number(stringarray[i])
  }
  return stringarray
}

// 7 kyu - Making Copies
function copyList(l){
  let copy = []
  for (let i=0; i<l.length; i++) {
    copy.push(l[i])
  }
  return copy
}
