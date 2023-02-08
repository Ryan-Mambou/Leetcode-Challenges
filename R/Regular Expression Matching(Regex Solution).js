var isMatch = function(s, p) {
 let pattern = new RegExp("^"+p+"$")
 return pattern.test(s);
};