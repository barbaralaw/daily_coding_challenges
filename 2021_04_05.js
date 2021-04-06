// 7 kyu - Histogram - H1
function histogram(results) {
  const histArr = ['6|','5|','4|','3|','2|','1|']
  for (let i=0; i<results.length; i++) {
    if (results[i] > 0) {
      histArr[5-i] += '#'.repeat(results[i]) + ' ' + String(results[i])
    }
    histArr[5-i].trim()
  }
  histArr[histArr.length-1] += '\n'
  return histArr.join('\n')
}
