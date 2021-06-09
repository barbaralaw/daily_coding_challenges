// 7 kyu - Convert an array of strings to array of numbers
function toNumberArray(stringarray){
  for (let i=0; i<stringarray.length; i++) {
    stringarray[i] = Number(stringarray[i])
  }
  return stringarray
}
