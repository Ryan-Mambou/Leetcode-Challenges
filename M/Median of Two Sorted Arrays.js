
 function isEven(number){
    return number % 2 === 0
}

var findMedianSortedArrays = function(nums1, nums2) {
   let sortedArray = [...nums1, ...nums2].sort((a, b) => a-b)
   let middle = sortedArray.length/2;

   if(isEven(sortedArray.length)){
       return (sortedArray[middle] + sortedArray[middle - 1]) / 2;
   }

   else {
       return sortedArray[Math.floor(middle)]
   }

};