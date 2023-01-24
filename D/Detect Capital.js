var detectCapitalUse = function(word) {
    if (word === word.toUpperCase()) return true;
    if (word === word.toLowerCase()) return true;
 
    if (word[0] === word[0].toUpperCase()){
        let leftStr = word.slice(1)
        if(leftStr === leftStr.toLowerCase()) return true
    }
   
        return false
    
     
 };