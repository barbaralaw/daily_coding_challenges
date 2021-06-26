// 7 kyu - Find the vowels
function vowelIndices(word){
  let locs = []
  let vowels = ['a', 'e', 'i', 'o', 'u', 'y']
  for (let i=0; i<word.length; i++) {
    if (vowels.includes(word[i].toLowerCase())) {
      locs.push(i+1)
    }
  }
  return locs
}
