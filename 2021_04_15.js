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

// 7 kyu - The Office IV - Find a Meeting Room
function meeting(x){
  return x.indexOf('O') >= 0 ? x.indexOf('O') : 'None available!'
}

// 7 kyu - Array Appender
function appendArrays (arr1, arr2) {
  return arr1.concat(arr2)
}

// 7 kyu - Even times last
function evenLast(numbers) {
  if (numbers.length === 0) {
    return 0
  }
  return (numbers.map((x,i) => i%2 === 0 ? x : 0).reduce((a,c)=>a+c))*numbers[numbers.length-1]
}

// 7 kyu - The Office VI - Sabbatical
function sabb(s, val, happiness){
  let sab = 'sabbatical'
  let sabVal = s.split('').map(x=>sab.includes(x.toLowerCase())?1:0).reduce((a,c)=>a+c)
  return val+happiness+sabVal > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}
