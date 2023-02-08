
var intToRoman = function(num) {

    let result = '';

   let symbols = {
       'M': 1000,
       'CM': 900,
       'D': 500,
       'CD': 400,
       'C': 100,
       'XC': 90,
       'L': 50,
       'XL': 40,
       'X': 10,
       'IX': 9,
       'V': 5,
       'IV': 4,
       'I': 1
     }

     for(let property in symbols){
         //while the num as parameter is greater than a symbol corresponding value, the symbol should be repeated before the next iteration
         while(num >= symbols[property]){
             result += property
             num -= symbols[property]
         }
     }
     
     return result;
};