var lengthOfLongestSubstring = function(s) {
    let begin = 0
    let max = 0
    let set = new Set()

    for(let end = 0; end < s.length; end++){
        while(set.has(s[end])){
            set.delete(s[begin])
            begin++
        }
        set.add(s[end])
        max = Math.max(max, end - begin + 1)
    }

    return max
};