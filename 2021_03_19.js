// 8 kyu - Simple validation of a username with regex
function validateUsr(username) {
  res =  /^[a-z0-9_]{4,16}$/.test(username)
  return res
}

// 8 kyu - validate code with simple regex
function validateCode (code) {
  return /^[123]/.test(code)
}
