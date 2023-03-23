 /**It's a dynamic problem because later results use previous results e.g for the number of ones in the binary representation of  2 (10),
  * We take 2/2 = 1(01) which can be done with the right shift of 2 which is (01) = 1 because it's less expensive and since it is even we don not add one
  * But let's say it was 3(011), well do 3>>1 = (001) = 1
  * We use this value now so go to our dp table and take the answer dor the number of one's in dp[1] and add pne because 3 is odd
  */
 var countBits = function(n) {
    let dp = [0];

    for(let i = 1; i < n + 1; i++){
        let [mid, bit] = [i >> 1, i & 1]
        let bits = dp[mid] + bit
        console.log([mid, dp[mid]])
        dp.push(bits)
    }
     return dp
};