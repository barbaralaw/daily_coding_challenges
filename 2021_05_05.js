// 8 kyu - Points of Reflection
function symmetricPoint(p, q) {
  let xDiff = q[0]-p[0]
  let yDiff = q[1]-p[1]
  return [q[0]+xDiff,q[1]+yDiff]
}
