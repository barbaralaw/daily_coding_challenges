// 8 kyu - Polish Alphabet
function correctPolishLetters (string) {
  const polToEng = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
  }

  return string.split('').map(x=> polToEng[x] || x).join('')
}

// 8 kyu - get ascii value of character
function getASCII(c){
  return c.charCodeAt(0)
}

// 8 kyu - ASCII Total
function uniTotal(str) {
  let total = 0;
  for (let i=0; i<str.length; i++) {
    total += str.charCodeAt(i)
  }
  return total;
}

// 7 kyu - ASCII letters from Number
function convert(number){
  let str = ''
  while (number.length > 0) {
    str += String.fromCharCode(number.slice(0,2))
    number = number.slice(2)
  }
  return str
}
