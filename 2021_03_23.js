// 8 kyu - Palindrome Strings
function isPalindrome(line) {
  if (line+'' === String(line).split('').reverse().join('')) {
    return true
  }
  return false
}
