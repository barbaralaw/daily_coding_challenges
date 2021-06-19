// 6 kyu - Coding Meetup #15 - Higher-Order Functions Series - Find the odd names
function findOddNames(list) {
  let oddies = []
  for (let person of list) {
    let tot = 0
    for (let i=0; i<person.firstName.length; i++) {
      tot += person.firstName.charCodeAt(i)
    }
    if (tot % 2) {
      oddies.push(person)
    }
  }

  return oddies
}
