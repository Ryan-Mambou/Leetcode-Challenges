var isPalindrome = function(x) {
    return x == String(x).split('').reverse().join('');
};