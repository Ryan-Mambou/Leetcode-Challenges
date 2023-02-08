var isMatch = function(s, p) {
    //The caret(^) and dollar($) in quotes is to be able to avoid the pattern matching a string that is longer than it
 let pattern = new RegExp("^"+p+"$")
 return pattern.test(s);
};