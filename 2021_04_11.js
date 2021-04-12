// 8 kyu - For Twins: 2. Math operations
function iceBrickVolume(radius, bottleLength, rimLength) {
  // square's diagonal <= radius*2
  // ice cube's height <= bottleLength - rimLength
  return (bottleLength-rimLength) * 2*(radius**2)
}
