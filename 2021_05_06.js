// 7 kyu - Reverse the bits as an integer
function reverseBits (n) {
  let bin = n.toString(2)
  return parseInt(bin.split('').reverse().join(''), 2)
}
