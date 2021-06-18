// 6 kyu - Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
function isLanguageDiverse(list) {
  let langCount = {'Python': 0, 'Ruby': 0, 'JavaScript': 0}
  for (let person of list) {
    langCount[person.language]++
  }
  let vals = [langCount['Python'], langCount['Ruby'], langCount['JavaScript']]
  if (Math.max(...vals) > 2 * Math.min(...vals)) {
    return false
  }
  return true
}
