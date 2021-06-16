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
