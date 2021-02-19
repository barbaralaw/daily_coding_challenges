// 7 kyu - Love vs friendship
function wordsToMarks(string){
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let sum = 0
  for (let i=0; i<string.length; i++) {
    sum += alpha.indexOf(string[i]) + 1;
  }
  return sum
}

// 6 kyu - Encrypt this!
var encryptThis = function(text) {
  let arr = text.split(' ');
  let coded = []
  for (let i=0; i<arr.length; i++) {
    coded[i] = ''
    coded[i] += (arr[i].charCodeAt(0));
    if (arr[i].length > 2) {
      coded[i] += (arr[i][arr[i].length-1]);
    } else if (arr[i].length > 1) {
      coded[i] += arr[i][1]
    }
    if (arr[i].length > 3) {
      coded[i] += (arr[i].substring(2,arr[i].length-1))
    }
    if (arr[i].length > 2) {
      coded[i] += (arr[i][1])
    }
  }
  return coded.join(' ')
}
