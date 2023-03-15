/**Use binary search, don't forget to round down the midpoint of the array
 * If the current mid is less than the element before, it means that we found it since in a sorted array, numbers go in increasing order. It's because of the rotation that this anormality occurs
 * When the array is rotated, there's an anormality at the part that is not sorted so you should continue finding for the minimum there
 */

var findMin = function(nums) {
    if(nums.length == 0) return -1
    if(nums.length == 1) return nums[0]
    let [left, right] = [0, nums.length - 1];

    while(left < right){
        let midpoint = Math.floor((left + right)/2)
        
        if(midpoint > 0 && nums[midpoint] < nums[midpoint - 1]){
            return nums[midpoint]
        }
        else if(nums[left] <= nums[midpoint] && nums[midpoint] > nums[right]){
            left = midpoint + 1;
        }
        else{
            right = midpoint - 1;
        }
    }
    return nums[left]
};