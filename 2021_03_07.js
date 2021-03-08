// 8 kyu - 5 without numbers!!
function unusualFive() {
  let str = 'aaaaa'
  return str.length;
}

// 8 kyu - Regexp Basics - is it a digit?
String.prototype.digit = function() {
  return /^\d$/.test(this)
};
