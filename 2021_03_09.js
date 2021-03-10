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
