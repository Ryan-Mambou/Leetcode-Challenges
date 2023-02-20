var productExceptSelf = function(nums) {
    let result = new Array(nums.length)
    let prefix = 1;
    let postfix = 1;

    for(let i = 0; i < nums.length; i++){
        result[i] = prefix
        prefix = prefix * nums[i]   
    }
    for (let i = nums.length - 1; i >= 0; i--){
        result[i] = postfix * result[i]
        postfix = postfix * nums[i]
    }
    return result;
};