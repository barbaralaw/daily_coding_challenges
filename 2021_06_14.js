// 7 kyu - Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
function isSameLanguage(list) {
  return list.every(person => person.language === list[0].language)
}

// 7 kyu - Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
function countLanguages(list) {
  let langs = {}
  for (let person of list) {
    let curLang = person.language
    if (langs[curLang]) {
      langs[curLang]++
    } else {
      langs[curLang] = 1
    }
  }
  return langs
}
