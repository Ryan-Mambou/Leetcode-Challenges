/**Compute expected sum - real sum */

var missingNumber = function(nums) {
    let expectedSum = 0, sum = 0;
    for(let i = 0; i <= nums.length; i++) expectedSum += i
    for(let i = 0; i < nums.length; i++) sum += nums[i]
  
    return expectedSum - sum;
  };