// 7 kyu - Responsible Drinking
function hydrate(s) {
  let drinks = (s.split(' ').filter(x=>x.match(/[0-9]/)).map(x=>Number(x)).reduce((a,c)=>a+c,0))
 return drinks > 1 ? `${drinks} glasses of water` : `${drinks} glass of water`
}
