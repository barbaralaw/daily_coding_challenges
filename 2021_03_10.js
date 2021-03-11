// 7 kyu - Slaphead
function bald(x){
  let count = 0;
  let shaved = ''
  for (let i=0; i<x.length; i++) {
    if (x[i] === '/') {
      count++
    }
    shaved += '-'
  }
  switch (count) {
      case 0:
        return [shaved, 'Clean!']
        break
      case 1:
        return [shaved, 'Unicorn!']
        break
      case 2:
        return [shaved, 'Homer!']
        break
      case 3:
      case 4:
      case 5:
        return [shaved, 'Careless!']
        break
      default:
        return [shaved, 'Hobo!']
        break
  }
}

// 7 kyu - Ironman Triathlon
function iTri(s){
  let distance = (140.6-s).toFixed(2)
  if (s === 0) {
    return 'Starting Line... Good Luck!'
  } else if (s <= 2.4) {
    return {'Swim':`${distance} to go!`}
  } else if (s <= 114.4) {
    return {'Bike':`${distance} to go!`}
  } else if (s < 130.6) {
    return {'Run':`${distance} to go!`}
  } else if (s < 140.6) {
    return {'Run':'Nearly there!'}
  } else {
    return `You're done! Stop running!`
  }
}
