// 7 kyu - Numbers to Letters
function switcher(x){
  const reverseAlpha = ['#','z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a','!','?',' ']
  return x.map(c => reverseAlpha[Number(c)] ).join('')
}
