// 7 kyu - Most digits
function findLongest(array){
  let max = ''
  for (let i=0; i<array.length; i++) {
    let str = String(array[i])
    if (str.length > max.length) {
      max = str
    }
  }
  return Number(max)
}
