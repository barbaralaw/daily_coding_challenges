// 7 kyu - Covfefe
function covfefe(str){
  return str.includes('coverage') ? str.replace(/coverage/g, 'covfefe') : str + ' covfefe'
}
