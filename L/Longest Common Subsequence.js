 /**DP
 Create an m by n matrix and if there is a caracter match, add the sum of the prev diagonal plus one or else the max of the top and left neighbor 
 */

 var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;

//The plus 1 is for the empty string in our dp Array for the base case
    var dp = Array.from(Array(m+1), () => new Array(n+1).fill(0))

    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            //Since we're starting at positions 1, and the texts text1 & text2 indexing start at 0
            if(text1[i-1] == text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
            }
        }
    }
    return dp[m][n];
};