// 7 kyu - Youtube URL
function makeYoutubeLink(str){
  let splitUp = str.split('/')[str.split('/').length-1].split('=')
  return `https://www.youtube.com/embed/${splitUp[splitUp.length-1]}`
}
