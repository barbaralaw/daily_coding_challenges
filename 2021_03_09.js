// 7 kyu - Simple Fun #327: The Final Attack Value
function finalAttackValue(x,monsterList){
  for (let i=0; i<monsterList.length; i++) {
    if (x >= monsterList[i]) {
      x += monsterList[i]
    } else {
      let divX = x
      let divY = monsterList[i]
      while (divY) {
        let temp = divY
        divY = divX % divY
        divX = temp
      }
      x += divX
    }
  }
  return x
}

// 7 kyu - Watching your pennies
function manageMoney(cash,expenses,rate) {
  for (let i=1; i<=12; i++) {
    cash = (cash*((rate/100)+1))-expenses
    if (cash <= 0) {
      return `You ran out of money after ${i-1} months`
    }
  }
  return `You still have $${cash.toFixed(2)}`
}
