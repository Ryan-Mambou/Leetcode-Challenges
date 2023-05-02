var numDecodings = function(s) {
    let dp = new Array(s.length + 1).fill(0)

    if (s[0] === '0') return 0

    dp[0] = 1
    dp[1] = 1

    for(let i = 2; i <= s.length; i++){
        //The plus before converts directly to an integer
        let single = +s[i-1]
        let double = +(s[i-2] + s[i-1])

        if(single >= 1 && single <= 9) dp[i] += dp[i-1]
        if(double >= 10 && double <=26) dp[i] += dp[i-2]
    }

    return dp[dp.length - 1]
};