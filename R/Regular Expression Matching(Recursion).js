var isMatch = function(s, p) {
    //returns true if pattern and string are empty
     //returns false when string contains chars with empty pattern
   if (!p){
       return !s
   }
   //Checking if first caracter of string and pattern match is string length is different form zero
   let hasFirstMatch = (s.length != 0 && (s[0] === p[0] || p[0] === '.'))

//if the first caracter of the pattern is *, we either test after the * of test values of the string one by one
   if(p[1] == '*'){
       return (isMatch(s, p.substring(2)) || hasFirstMatch && isMatch(s.substring(1), p))
   }
   return hasFirstMatch && isMatch(s.substring(1), p.substring(1))
};