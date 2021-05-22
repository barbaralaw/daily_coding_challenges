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
