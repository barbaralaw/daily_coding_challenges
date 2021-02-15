// 8 kyu - BASIC: Making Six Toast
function sixToast(num) {
  return Math.abs(num-6)
}

// 7 kyu = Make techno
function perc (mins) {
 return mins < 1 || mins > 100 || typeof mins != 'number' ? 'invalid track time' : [`${Math.round(30*4*mins)} kicks`, `${Math.round(30*8*mins)} hihats`, `${Math.round(30*2*mins)} claps`]
};
