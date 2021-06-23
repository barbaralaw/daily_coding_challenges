// 2021_06_22
// How Many Numbers Are Smaller Than the Current Number
var smallerNumbersThanCurrent = function(nums) {
   let smArr = []
   for (let i=0; i<nums.length; i++) {
       smArr[i] = 0
       for (let j=0; j<nums.length; j++) {
           if (nums[j] < nums[i] && j != i) {
            smArr[i]++
           }
       }
   }
    return smArr
};
