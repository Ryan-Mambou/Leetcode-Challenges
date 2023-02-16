var maxProfit = function(prices) {
    let maxDiff = 0;
    let left = 0
    let right = 1

    while(right < prices.length){
        if(prices[right] > prices[left] ){
            maxDiff = Math.max(maxDiff, prices[right] - prices[left])
        }
        else{
            left = right
        }
        right++
    }
    return maxDiff;
};