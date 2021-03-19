// 8 kyu - Simple validation of a username with regex
function validateUsr(username) {
  res =  /^[a-z0-9_]{4,16}$/.test(username)
  return res
}
