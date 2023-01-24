/**
 * @param {string} s
 * @return {string}
 */

var expandFromMiddle = (s, left, right) => {
    if (s.length < 1 || left > right) return 0;
    while(left >= 0 && right < s.length && s[left] == s[right]){
        left--;
        right++;       
}

    return right - left - 1;
}

var longestPalindrome = function(s) {

    if (s.length < 1) return "";

    var start = 0;
    var end = 0;

  for (let i = 0; i < s.length; i++){
    var len1 = expandFromMiddle(s, i, i)
    var len2 = expandFromMiddle(s, i, i + 1)
    var len = Math.max(len1, len2)
    if(len > end - start + 1 ){
    start = Math.round(i - ((len - 1)/ 2))
    end = i + (len/2)
    }
}
    console.log(start, end)
    return s.substring(start, end + 1)
};