// 8 kyu - Exclusive "or" (xor) Logical Operator
function xor(a, b) {
  return (a && !b || b && !a)
}

// 8 kyu - Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
  return Math.floor(hol/(normPrice*discount/100))
}
