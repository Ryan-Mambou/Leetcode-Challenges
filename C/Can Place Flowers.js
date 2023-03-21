/**Iterating through the flowerbed and checking if a position is zero
 * If it is, check for left and right if you can insert a flower.
 * If it is possible insert it and reduce n (number of remaining flowers to insert) by one
 * At the end if n is greater than zero return false and else true
*/

var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++){
      if(flowerbed[i] == 0){
        if(flowerbed[i-1] == 0 && flowerbed[i+1] == 0 ||
        flowerbed[i-1] == undefined && flowerbed[i+1] == 0 ||
        flowerbed[i-1] == 0 && flowerbed[i+1] == undefined ||
        flowerbed[i-1] == undefined && flowerbed[i+1] == undefined){
          flowerbed[i] = 1
          n--
        }
      }
    }
    return n > 0 ? false : true;
};