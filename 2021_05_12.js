// 7 kyu - The Office I - Outed
function outed(meet, boss){
  let score = 0;
  let people = Object.keys(meet).length;
  for(let prop in meet) {
    if(prop === boss) {
      score += meet[prop]*2
    }else {
      score += meet[prop]
    }
  }
  return (score / people) <= 5 ? "Get Out Now!" : "Nice Work Champ!"
}

// 7 kyu - Caffeine Script
function caffeineBuzz(n){
  let string = ''
  if (n%3 === 0 && n%4 === 0) {
    string += 'Coffee'
    if (n%2 === 0) {
      string += 'Script'
    }
  } else if (n%3 === 0) {
    string += 'Java'
    if (n%2 === 0) {
      string += 'Script'
    }
  } else {
    string += 'mocha_missing!'
  }
  return string
}

// 7 kyu - Greet Me
var greet = function(name) {
  return `Hello ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!`
};

// 7 kyu - Averages of numbers
function averages(numbers) {
  const avgs = []
  if (numbers == null || numbers.length <= 1) {
    return avgs
  }
  for (let i=0; i<numbers.length-1; i++) {
    avgs.push((numbers[i]+numbers[i+1])/2)
  }
  return avgs
}

// 7 kyu - Bumps in the Road
function bump(x){
  return x.split('').filter(x=>x==='n').length > 15 ? 'Car Dead' : 'Woohoo!'
}

// 7 kyu - Filter the number
var FilterString = function(value) {
  const digs = ['0','1','2','3','4','5','6','7','8','9']
  return Number(value.split('').filter(x=>digs.includes(x)).join(''))
}

// 7 kyu - Sum even numbers
function sumEvenNumbers(input) {
  return input.filter(x=>x%2===0).reduce((a,c)=>a+c)
}
