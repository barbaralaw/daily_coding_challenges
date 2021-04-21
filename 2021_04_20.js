// 8 kyu - A Strange Trip to the Market
function isLockNessMonster(s) {
  return s.includes('tree fiddy') ? true : s.includes('three fifty') ? true : s.includes('3.50') ? true:false
}

// 8 kyu - Crash Override
function aliasGen(f, l){
  return (firstName[f[0].toUpperCase()] && surname[l[0].toUpperCase()]) ? `${firstName[f[0].toUpperCase()]} ${surname[l[0].toUpperCase()]}` : 'Your name must start with a letter from A - Z.'
}

// 8 kyu - Take an Arrow to the knee, Functionally
var ArrowFunc = function(arr) {
  return arr.map(x => String.fromCharCode(x)).join(''); //Complete this function
}

// 8 kyu - Simple Change Machine
function changeMe(moneyIn){
  switch (moneyIn) {
      case ('£5') :
        return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
        break;
      case ('£2') :
        return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
        break;
      case ('£1') :
        return '20p 20p 20p 20p 20p'
        break;
      case ('50p') :
        return '20p 20p 10p'
        break;
      case ('20p') :
        return '10p 10p'
        break;
      case ('Money'):
        return 'Money'
        break;
      default:
        return 'Not a specified coin or note'
  }
}
