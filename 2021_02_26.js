// 6 kyu - Grouped by Commas
function groupByCommas(n) {
  let str = n+''
  if (n > 999) {
    for (let i=str.length-3; i>0; i-=3) {
      str = str.substring(0,i) + ',' + str.substring(i,str.length);
      console.log(str)
    }
  }
  return str;
}
