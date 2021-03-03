// 8 kyu - Street Fighter 2 - Character Selection
function streetFighterSelection(fighters, position, moves){
  let selectedFighters = [];
  for (let i=0; i<moves.length; i++) {
    switch (moves[i]) {
      case 'right':
        if (position[0] != fighters[position[1]].length-1) {
          position[0]++
        } else {
          position[0] = 0
        }
        break;
      case 'left':
        if (position[0] != 0) {
          position[0]--
        } else {
          position[0] = fighters[position[1]].length-1
        }
        break;
      case 'up':
        if (position[1] != 0) {
          position[1] = 0
        }
        break;
      case 'down':
        if (position[1] != 1) {
          position[1] = 1
        }
        break;
    }
    selectedFighters.push(fighters[position[1]][position[0]])
  }
  return selectedFighters
}

// 8 kyu - Mr. Freeze
// mark the MrFreeze object instance as frozen
Object.freeze(MrFreeze)
