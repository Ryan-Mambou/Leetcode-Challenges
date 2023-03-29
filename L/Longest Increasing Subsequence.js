/**Dynamic Programming
 Iterate through the array and compare each value with all the previos elts,
 If the current count is greater than the latter, take the max of the present count to the max of the latter plus 1 */
 var lengthOfLIS = function(nums) {
    let dp = Array(nums.length).fill(1)
 
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
 }