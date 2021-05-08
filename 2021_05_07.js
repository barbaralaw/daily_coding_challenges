// 7kyu - Find the middle element
var gimme = function (arr) {
  return 3 - ((arr.indexOf(Math.max(...arr)))+arr.indexOf(Math.min(...arr)))
};
