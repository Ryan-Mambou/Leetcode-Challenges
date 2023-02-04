var myAtoi = function(s) {
    let result = ""
    if(/^[a-zA-Z.]+/.test(s) || s == ''){return 0}

    for(let i = 0; i < s.length; i++){
        if(Number.isInteger(parseInt(s[i])) || s[i] == '-' || s[i] == '+'){
             result += s[i];
             //if the caracter after a caracter is a space, don't continue
             if(s[i+1] == ' ') break;
        }
        else if(s[i] == ' ') continue;
        else {
         break;
        }
    }
    return Math.pow(-2, 31) > parseInt(result) ? Math.pow(-2, 31)
        : Math.pow(2, 31) - 1 < parseInt(result) ? Math.pow(2, 31) - 1
        : !Number.isInteger(parseInt(result)) ? 0
        : parseInt(result);
}