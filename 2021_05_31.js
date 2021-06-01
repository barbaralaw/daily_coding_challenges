// 7 kyu - Find an employees role in the company
function findEmployeesRole(name) {
  let nameArr = name.split(' ')
  for (let person of employees) {
    if (person.firstName == nameArr[0] && person.lastName == nameArr[1]) {
      return person.role
    }
  }
  return 'Does not work here!'
}
