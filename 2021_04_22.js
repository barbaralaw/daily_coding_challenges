// 6 kyu - Convert string to camel case
function toCamelCase(str){
  let arr;
  if (str.includes('-')) {
    arr = str.split('-')
  } else {
    arr = str.split('_')
  }

  for (let i=1; i<arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
  }

  return arr.join('')
}
