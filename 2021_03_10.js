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
