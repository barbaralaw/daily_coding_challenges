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

// 8 kyu - Broken Counter
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset= function () {
  this.value = 0;
};

// 8 kyu - Max Headroom and JavaScript style
function getMax1() {
  var max = {name: 'Max Headroom'}
  return max;
}

function getMax2() {
  return { name: 'Max Headroom'}
}

// 8 kyu - Color Ghost
var Ghost = function() {
  this.color = ['white','yellow','purple','red'][Math.floor(Math.random()*4)]
};

// 8 kyu - Hello Happy Codevarrior!
function Warrior(n){
  let name = n;
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}

Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}

// 8 kyu - SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true)
  }
}
