var longestCommonPrefix = function(strs) {
    //Initializing the prefix with the first string
    let prefix = strs[0];
    let i = 1;
    while(i < strs.length){
        //Delete last caracter of the string if the tested string doesn't starts with the prefix
        if(!strs[i].startsWith(prefix)){
            prefix = prefix.slice(0, -1)
        }
        //Move to next string if the previous is satisfied
        else {
            i++
        }
    }
    return prefix;
};