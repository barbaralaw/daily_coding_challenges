// 7 kyu - Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
function isSameLanguage(list) {
  return list.every(person => person.language === list[0].language)
}
