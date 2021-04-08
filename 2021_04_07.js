// 7 kyu - Product ID from URL
function getProductId(url){
  return url.split('-').reverse()[1]
}
