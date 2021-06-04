// 8 kyu - Training JS #18: Methods of String object--concat() split() and its good friend join()
function splitAndMerge(string, separator) {
  let arr = string.split(' ')
  for (let i=0; i<arr.length; i++) {
    arr[i] = arr[i].split('').join(separator)
  }
  return arr.join(' ')
}
