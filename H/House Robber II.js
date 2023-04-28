var rob = function(nums) {
    if(nums.length === 0) return 0
    if(nums.length === 1) return nums[0]

    let dp1 = new Array(nums.length).fill(0)
    let dp2 = new Array(nums.length).fill(0)

    robTwice(0, dp1, nums.length - 2)
    robTwice(1, dp2, nums.length - 1)

    function robTwice(i, dp, numLength){
        dp[i] = nums[i];
        dp[i+1] = Math.max(nums[i], nums[i+1])

        for(let j = i+2; j <= numLength; j++){
            dp[j] = Math.max(nums[j] + dp[j-2], dp[j-1])
        }
    }

    return Math.max(dp1[nums.length-2], dp2[nums.length-1])
    
};