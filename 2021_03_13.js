// 8 kyu - Total amount of points
function points(games) {
  let total = 0;
  for (let i=0; i<games.length; i++) {
    if (games[i][0] > games[i][2]) {
      total += 3;
    } else if (games[i][0] === games[i][2]) {
      total++;
    }
  }
  return total;
}

// 7 kyu - Easy wallpaper
function wallpaper(l, w, h) {
  // Math.ceil((((2l + 2w)/.52)*h/10)*1.15)
  if (l === 0 || w === 0 || h === 0) {
    return 'zero'
  }
  return numbers[Math.ceil((((2*l+2*w)/.52)*h/10)*1.15)]
}

// 8 kyu - Switch/Case - Bug Fixing #6
function evalObject(value){
  var result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b; break;
    case'-': result = value.a - value.b; break;
    case'/': result = value.a / value.b; break;
    case'*': result = value.a * value.b; break;
    case'%': result = value.a % value.b; break;
    case'^': result = Math.pow(value.a, value.b); break;
  }
  return result;
}

// 8 kyu - Fix your code before the garden dies!
function rainAmount(mm){
    if (mm < 40) {
         return `You need to give your plant ${40-mm}mm of water`
    } else {
         return "Your plant has had more than enough water for today!"
    };
}

// 8 kyu - Fix the Bugs (Syntax) - My First Kata
function myFirstKata(a,b) {
  if (typeof(a) != "number" || typeof(b) != "number") {
    return false;
  }
  return a % b + b % a;
}

// 8 kyu - Unexpected parsing
function getStatus(isBusy) {
  let msg = isBusy ? "busy" : "available"
  return {"status": msg}
}
