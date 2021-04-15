// 7 kyu - The Office I - Outed
function outed(meet, boss){
  return ((Object.values(meet).reduce((a,c)=>a+c) + meet[boss]) / Object.values(meet).length) <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}
