// 7 kyu - Words to binary
function wordToBin(str){
  let array = []
  for (let i=0; i<str.length; i++) {
    array[i] = str.charCodeAt(i)
    array[i] = array[i].toString(2)
    while (array[i].length < 8) {
      array[i] = '0' + array[i]
    }
  }
  return array;
}
