// 7 kyu - Basic Math (Add or Subtract)
function calculate(str) {
  str = str.split('plus').join('+')
  str = str.split('minus').join('+-')
  return str.split('+').reduce((a,c)=>a + Number(c), 0).toString()
}

// 8 kyu - Shifty Closures
var name;
var greet_abe = function() {
  name = 'Abe'
  return "Hello, " + name + '!';
};
var greet_ben = function() {
  name = 'Ben'
  return "Hello, " + name + '!';
};
