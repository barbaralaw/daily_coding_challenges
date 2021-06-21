// 7 kyu - Words to binary
function wordToBin(str){
  let array = []
  for (let i=0; i<str.length; i++) {
    array[i] = str.charCodeAt(i)
    array[i] = array[i].toString(2)
    while (array[i].length < 8) {
      array[i] = '0' + array[i]
    }
  }
  return array;
}

// 6 kyu - Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details
function askForMissingDetails(list) {
  let slackers = []
  for (let person of list) {
    for (let prop in person) {
      if (person[prop] == null) {
        person.question = `Hi, could you please provide your ${prop}.`
        slackers.push(person)
      }
    }
  }
  return slackers
}

// 7 kyu - Coding Meetup #14 - Higher-Order Functions Series - Order the food
function orderFood(list) {
  let foodOrder = {}
  for (let person of list) {
    if (foodOrder[person.meal]) {
      foodOrder[person.meal]++
    } else {
      foodOrder[person.meal] = 1
    }
  }
  return foodOrder
}
