// 7 kyu - Sum of Cubes
function sumCubes(n){
  let total = 0;
  for (let i=0; i<=n; i++) {
    total += Math.pow(i,3)
  }
  return total;
}

//7 kyu - transform an array into a string
function transform(array) {
	return array.reduce((acc,cur)=>`${acc}${cur}`,'')
}
