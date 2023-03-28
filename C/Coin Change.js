/** Dynamic Programming
 * Initialise you array to infinity up to the max amount
 * later do a nested for loop and test whether the current amount of coins needed is is greater than one of the corresponding coin plus the number of coins needed for the remainder i.e
 * 1 + dp[currentAmount - coin]
 */

var coinChange = function(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity)
 
    //Base Case
    dp[0] = 0;
 
    for(let currentAmount = 1; currentAmount <= amount; currentAmount++){
        for(let coin of coins){
            if(currentAmount - coin >= 0){
                dp[currentAmount] = Math.min(dp[currentAmount], 1 + dp[currentAmount - coin])
            }
        }
    }
 
    return dp[amount] > amount ? -1 : dp[amount]
 };