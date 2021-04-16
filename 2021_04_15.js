// 7 kyu - The Office II - Boredom Score
function boredom(staff){
  const depts = {'accounts': 1, 'finance': 2, 'canteen': 10, 'regulation': 3, 'trading': 6, 'change': 6, 'IS': 8, 'retail': 5, 'cleaning': 4, 'pissing about': 25}
  let peeps = Object.values(staff)
  let total = 0
  for (let i=0; i<peeps.length; i++) {
    total += depts[peeps[i]]
  }
  return total <= 80 ? 'kill me now' : total < 100 ? 'i can handle this' : 'party time!!'
}

// 7 kyu - The Office III - Broken Photocopier
function broken(x){
  return x.split('').map(x=>x==1?'0':'1').join('')
}
