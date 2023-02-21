/** Set the current sum to first element and iterate throught the array, if the value of current element is greater than
 *  the current sum plus this element, our current max is the new element, else add its value to the current max and set the maxSum in either cases
 * NB: It's just like a sliding window*/

var maxSubArray = function(nums) {
    let currentSum = nums[0]
    let maxSum = currentSum;

    for(let i = 0; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum;
};