 /**
 Iterate backward to see if element can react the target node, If yes, set it equal to the target node and continue 
 */
 var canJump = function(nums) {
    let target = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--){
        if(nums[i] + i >= target){
            target = i
        }
    }

    return target === 0;
};