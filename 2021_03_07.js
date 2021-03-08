// 8 kyu - 5 without numbers!!
function unusualFive() {
  let str = 'aaaaa'
  return str.length;
}

// 8 kyu - Regexp Basics - is it a digit?
String.prototype.digit = function() {
  return /^\d$/.test(this)
};

// 7 kyu - Regexp Basics - is it a letter?
String.prototype.isLetter = function() {
  return /^[a-zA-Z]$/.test(this)
}

// 7 kyu - Regexp Basics - is it a vowel?
String.prototype.vowel = function() {
  return /^[aeiou]$/i.test(this);
};
