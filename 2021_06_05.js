// 7 kyu - Create palindrome
function solve(s){
  console.log(s)
  // go through it in the same way as a normal palindrome
  for (let i=0; i<=s.length/2; i++) {
  // check if each character is 2 character code values away or less from each other
    if (Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length-1-i)) > 2 || Math.abs(s.charCodeAt(i) - s.charCodeAt(s.length-1-i)) == 1) {
      return false
    }
  // if not, return false
  }
  return true
  // if i get through, return true
}
