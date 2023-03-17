/**Sort input, for each first element, find next two where -a = b+c, if a=prevA, 
 * skip a, if b=prevB skip b to elim duplicates; to find b,c use two pointers, 
 * left/right on remaining list*/

var threeSum = function(nums) {
    /** 
    nums[i] + nums[j] + nums[k] =  0
    Implies that num[j] + num[k] = 0 - nums[i]
    */
 
    //Sorting array for duplicates to be side by side to each other
     nums.sort((a,b) => a-b)
 
     let result = []
     
     for(let i = 0; i < nums.length; i++){
         if(i > 0 && nums[i] === nums[i-1]) continue;
         console.log(i)
         let target = 0 - nums[i]
         let left = i + 1;
         let right = nums.length - 1;
         while(left < right){
             let sum = nums[left] + nums[right]
             if(sum > target){
                 right--
             }
             else if(sum < target){
                 left++
             }
             else {
                 result.push([nums[i], nums[left], nums[right]])
                 while(nums[left] === nums[left+1]) left++
                 while(nums[right] === nums[right-1]) right--
                 left++;
                right--;
             }
         }
     }
     return result;
 };