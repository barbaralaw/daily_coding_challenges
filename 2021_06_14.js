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

// 7 kyu - Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
function getFirstPython(list) {
  for (let person of list) {
    if (person.language == 'Python') {
      return `${person.firstName}, ${person.country}`
    }
  }
  return 'There will be no Python developers'
}

// 7 kyu - Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
function isRubyComing(list) {
  for (let person of list) {
    if (person.language == 'Ruby') {
      return true
    }
  }
  return false
}

// 7 kyu - Coding Meetup #2 - Higher-Order Functions Series - Greet developers
function greetDevelopers(list) {
  for (let person of list) {
    person.greeting = `Hi ${person.firstName}, what do you like the most about ${person.language}?`
  }
  return list
}
