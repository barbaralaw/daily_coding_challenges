// 7 kyu - All Star Code Challenge #20
function addArrays(array1, array2) {
  const combined = []
  if (array1.length === array2.length) {
    for (let i=0; i<array1.length; i++) {
      combined.push(array1[i]+array2[i])
    }
    return combined
  }
  throw 'Error'
}
