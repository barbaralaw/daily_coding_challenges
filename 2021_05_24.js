// 8 kyu - Age Range Compatibility Equation
function datingRange(age){
  let min = Math.floor((age/2) + 7)
  let max = Math.floor((age-7) * 2)
  if (age <= 14) {
    min = Math.floor(age-(.1*age))
    max = Math.floor(age+(.1*age))
  }
  return `${min}-${max}`
}
