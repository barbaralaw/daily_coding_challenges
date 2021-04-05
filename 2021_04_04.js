// 8 kyu - Sleigh Authentication
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === 'Santa Claus' && password === 'Ho Ho Ho!'
};
