var reverse = function(x) {   
    let string = x.toString().split('');
    let result = [];
    for(let i = string.length - 1; i >= 0; i--){
        if(string[i] === '-'){
            result.unshift(string[i]);
        }
        result.push(string[i]);
    }
    return parseInt(result.join('')) >= Math.pow(2, 31) - 1 || parseInt(result.join('')) < Math.pow(-2,31) ? 0 : parseInt(result.join(''));

};