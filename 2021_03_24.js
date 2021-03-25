// 8 kyu - !a == a?!
const a = '0'

// 8 kyu - Barking mad
function Dog (breed) {
  this.breed = breed;
}

var snoopy = new Dog("Beagle");

snoopy.bark = function() {
  return "Woof";
};

var scoobydoo = new Dog("Great Dane");

scoobydoo.bark = function() {
  return "Woof";
}

// 8 kyu - Be Concise I - The Ternary Operator
function describeAge(age) {
  return `You're a(n) `+(age<=12?`kid`:age<=17?`teenager`:age<=64?`adult`:`elderly`)
}
