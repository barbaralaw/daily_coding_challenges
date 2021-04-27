// 7 kyu - All Star Code Challenge #14
function median(array) {
  array.sort((a,b)=>a-b)
  if (array.length % 2 === 0) {
    return (array[array.length / 2] + array[(array.length / 2)-1])/2
  } else {
    return array[Math.floor(array.length / 2)]
  }
}
