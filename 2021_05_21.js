// 7 kyu - Area of an annulus
function annulusArea(a) {
  return Number((Math.PI*(Math.pow(a/2,2))).toFixed(2))
}

// 8 kyu - Pole Vault Starting Marks
function startingMark(bodyHeight){
  return Number((3.47 + bodyHeight*3.93442).toFixed(2))
}

// 8 kyu - Localize The Barycenter of a Triangle
function barTriang(p1, p2, p3){
  return [Number(((p1[0]+p2[0]+p3[0])/3).toFixed(4)), Number(((p1[1]+p2[1]+p3[1])/3).toFixed(4))]
}
