// 8 kyu - Did she say hallo?
function validateHello(greetings) {
  res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/.test(greetings.toLowerCase())
  return res
}
