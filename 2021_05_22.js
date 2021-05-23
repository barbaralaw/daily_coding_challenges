// 8 kyu - Grasshopper - Create the rooms
var rooms = {
  livingRoom : {name:'living room', description:'living area', completed: true},
  kitchen : {name:'kitchen', description:'kitchen', completed: true},
  bedroom : {name:'bedroom', description:'bedroom', completed: true},
}

// 8 kyu - Job Matching #1
function match(candidate, job) {
  if (!candidate.minSalary || !job.maxSalary) {
    throw 'error'
  }
  return (.9*candidate.minSalary) <= job.maxSalary ? true : false
}

// 8 kyu - Are there any arrows left?
function anyArrows(arrows){
  return arrows.some(x => !x.damaged == true);
}

// 5 kyu - Pete, the baker
function cakes(recipe, available) {
  let maxes = {}
  for (let ing in recipe) {
    if (!available[ing]) {
      return 0
    }
    maxes[ing] = Math.floor(available[ing]/recipe[ing])
  }
  let maxCakes = 10000;
  for (let quant in maxes) {
    if (maxes[quant] < maxCakes) {
      maxCakes = maxes[quant]
    }
  }
  return maxCakes
}

// 6 kyu - Is Integer Array?
function isIntArray(arr) {
  console.log(arr, Number.isNaN(arr))
  return typeof arr != 'object' || arr == null ? false : arr.every(x => x%1 === 0) && arr.every(x => typeof x === 'number') ? true : false
}
