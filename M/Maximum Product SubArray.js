/**Approximately the same as Maximum subArray just that since we're dealing with
 * negative numbers we need to keep track of the minimun subArray in case we find
 * another number along the iteration on the nums array that'll transform it to a positive number
 */

var maxProduct = function(nums) {
    let min = max = product = nums[0];

    for(let num = 1; num < nums.length; num++){
        let [minProduct, maxProduct] = [(min * nums[num]), (max * nums[num])]

        min = Math.min(minProduct, maxProduct, nums[num])
        max = Math.max(minProduct, maxProduct, nums[num])
        product = Math.max(product, max)
    }

    return product;
};