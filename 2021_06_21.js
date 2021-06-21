// 7 kyu - Pandemia 🌡️
function infected(s) {
  let arr = s.split('X')
  let spread = arr.map(x => {
    if (x.includes('1')) {
      return '1'.repeat(x.length)
    } else {
      return '0'.repeat(x.length)
    }
  })
  let tot = spread.join('')
  let inf = tot.split('').filter(x => x==='1')
  return (inf.length / tot.length)*100 || 0
}
