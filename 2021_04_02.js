// 7 kyu - All Star Code Challenge #22
function toTime(seconds) {
  return `${Math.floor(seconds/3600)} hour(s) and ${Math.floor((seconds%3600)/60)} minute(s)`
}

// 7 kyu - ScholarStem: Unit 6- Baby count!
function countName(anArr, name){
  return anArr.filter(x => x === name).length
};

// 7 kyu - All Star Code Challenge #1
function sumPPG(playerOne, playerTwo){
  return playerOne.ppg + playerTwo.ppg
}

// 7 kyu - All Star Code Challenge #3
var removeVowels = function(str) {
  let vowels = ['a','e','i','o','u']
  return str.split('').filter(x => !vowels.includes(x)).join('')
}

// 7 kyu - All Star Code Challenge #7
function compute(n){
  console.log(n)
  let sum = 0;
  if (n > 0 && n % 2 != 0) {
    sum = 1
    for (let i=3; i<=n; i+=2) {
      sum += 1/i**2
    }
  }
  console.log(sum)
  return sum
}

// 7 kyu - Cost of my ride
function insurance(age, size, numofdays){
  if (numofdays < 0) {
    return 0
  }
  let cost = 50*numofdays;
  if (age < 25) {
    cost += 10 * numofdays
  }
  switch (size) {
    case 'economy':
      break;
    case 'medium':
      cost += 10*numofdays;
      break;
    default:
      cost += 15*numofdays;
      break;
  }
  return cost
}
