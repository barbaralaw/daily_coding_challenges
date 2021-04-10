// 8 kyu - Closest elevator
function elevator(left, right, call){
  return Math.max(Math.abs(call-left)) < Math.max(Math.abs(call-right)) ? 'left':'right'
}
