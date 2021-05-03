// 8 kyu - Implement Array.prototype.filter()
Array.prototype.filter = function(func) {
  const filtered = []
  for (let i=0; i<this.length; i++) {
    if (func(this[i])) {
      filtered.push(this[i])
    }
  }
  return filtered
}

// 8 kyu - Word Count
function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}

// 8 kyu - Regex count lowercase letters
function lowercaseCount(str){
  return (str.match(/[a-z]/g) || []).length
}
