// 7 kyu - Make a function that does arithmetic!
function arithmetic(a, b, operator){
  let result = 0
  switch (operator) {
      case 'add':
        result += a+b;
        break;
      case 'subtract':
        result += a-b;
        break;
      case 'multiply':
        result += a*b;
        break;
      case 'divide':
        result += a/b
        break;
      default:
        break;
  }
  return result
}
