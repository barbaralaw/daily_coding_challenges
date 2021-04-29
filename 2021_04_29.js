// 7 kyu - Divide and Conquer
function divCon(x){
  return (x.filter(e => typeof e === 'number').reduce((a,c)=>a+c,0)) - (x.filter(e => typeof e === 'string').reduce((a,c)=>a+Number(c),0))
}

// 7 kyu - Use reduce() to calculate the sum of the values in an array
function sum(arr) {
  // Write + PREP
  // Given an array, return the sum of the values in that array using reduce()
  // P - Parameters
  // one dimensional array of numbers
  // R - Returns
  // return (as a number) the sum of the values in the array
  // E - Examples
  // [1,2,3,4] => 10 ( GET THEM TO SAY YES)
  // [-3, 10, 10, 10, 1] => 28
  // [1.     *10000000 1s] => 1000001
  // P - Pseudocode


  // function will take in an array of numbers
  // use reduce() to sum the numbers
  // return that sum
  return arr.reduce((acc, cur) => acc + cur, 0)

}

// 7 kyu - Use map() to double the values in an array
function double(arr) {
  return arr.map(x=>x*2)
}
