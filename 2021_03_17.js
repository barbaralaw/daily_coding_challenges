// 8 kyu - Enumerable Magic #4 - True or None?
function none(arr, fun){
  // their function runs with each item in the array
  // if their function ever comes up true => my function = false
  // if their function never comes up true => my function = true;

  // check if empty, if so, return true
  if (arr.length === 0) {
    return true;
  }
  // run fun with each item in the array
  for (let i=0; i<arr.length; i++) {
    // if fun returns true => i return false
    if (fun(arr[i]) === true || fun(arr[i]) === 1) {
      return false
    }
  }
  // if fun never returns true => i return true
  return true
}

// 8 kyu - Square(n) Sum
function squareSum(numbers){
  return numbers.reduce((a,c)=>a+(c**2),0)
}

// 7 kyu - Sort Numbers
function solution(nums){
  // if null or nil return empty array
  if (nums == null || nums.length === 0) {
    return []
  }
  // return sorted array
  return nums.sort((a,b)=>a-b)
  // return a sorted array of numbers
}
