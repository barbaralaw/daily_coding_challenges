// 7 kyu - Filter Long Words
function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(w => w.length>n)
}
