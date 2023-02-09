var romanToInt = function(s) {
    let result = 0;

    let symbols = {
       'M': 1000,
       'D': 500,
       'C': 100,
       'L': 50,
       'X': 10,
       'V': 5,
       'I': 1
     }


//Iterating the String to convert to an integer
     for(let i = 0; i < s.length; i++){
         //if the position of the iterator is not out of bounds and if i+1 is greater than i, we substract else we add
         if((i + 1) < s.length && symbols[s[i+1]] > symbols[s[i]]){
             result -= symbols[s[i]];
         } else {
             result += symbols[s[i]];
         }
     }

     return result;

};