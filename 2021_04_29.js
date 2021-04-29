// 7 kyu - Divide and Conquer
function divCon(x){
  return (x.filter(e => typeof e === 'number').reduce((a,c)=>a+c,0)) - (x.filter(e => typeof e === 'string').reduce((a,c)=>a+Number(c),0))
}
