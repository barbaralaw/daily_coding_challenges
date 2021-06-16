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
