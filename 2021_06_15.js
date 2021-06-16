// 7 kyu - Coding Meetup #11 - Higher-Order Functions Series - Find the average age
function getAverageAge(list) {
  let agesSum = 0
  for (let person of list) {
    agesSum += person.age
  }
  return Math.round(agesSum / list.length)
}

// 6 kyu - Coding Meetup #10 - Higher-Order Functions Series - Create usernames
function addUsername(list) {
  let curDate = new Date()
  let curYear = curDate.getFullYear()
  for (let person of list) {
    person.username = `${person.firstName}${person.lastName[0]}${curYear-person.age}`.toLowerCase()
  }
  return list
}

// 6 kyu - Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse?
function isAgeDiverse(list) {
  return (
    list.some(p => p.age >= 10 && p.age < 20) &&
    list.some(p => p.age >= 20 && p.age < 30) &&
    list.some(p => p.age >= 30 && p.age < 40) &&
    list.some(p => p.age >= 40 && p.age < 50) &&
    list.some(p => p.age >= 50 && p.age < 60) &&
    list.some(p => p.age >= 60 && p.age < 70) &&
    list.some(p => p.age >= 70 && p.age < 80) &&
    list.some(p => p.age >= 80 && p.age < 90) &&
    list.some(p => p.age >= 90 && p.age < 100) &&
    list.some(p => p.age >= 100)
  ) ? true : false
}

// 6 kyu - Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
function allContinents(list) {
  return list.some(p => p.continent == 'Africa') && list.some(p => p.continent == 'Americas') && list.some(p => p.continent == 'Asia') &&list.some(p => p.continent == 'Europe') &&list.some(p => p.continent == 'Oceania') ? true : false

// 6 kyu - Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
function findSenior(list) {
  let elders = [list[0]]
  if (list.length > 0) {
    for (let i=1; i<list.length; i++) {
      if (list[i].age > elders[0].age) {
        elders = [list[i]]
      } else if (list[i].age == elders[0].age) {
        elders.push(list[i])
      }
    }
  }
  return elders
}
