// 7 kyu - Alternate capitalization
function capitalize(s){
  let arr = s.split('')
  let changed = []
  changed[0] = arr.map((x,i)=>{
    if (i%2 != 0) {
      return x = arr[i].toLowerCase()
    } else {
      return x = arr[i].toUpperCase()
    }
  })
  changed[1] = arr.map((x,i)=>{
    if (i%2 == 0) {
      return x = arr[i].toLowerCase()
    } else {
      return x = arr[i].toUpperCase()
    }
  })
  return [changed[0].join(''), changed[1].join('')]
};
