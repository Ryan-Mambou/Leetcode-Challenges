 /**Reverse each of the 32-bits
 Add the last bit of n to a result and as you left shift the result you right shift n 
 Don't forget to convert the result to an unsigned 32-bit integer*/

 var reverseBits = function(n) {
    let res = 0;
    
    for(let i = 0; i < 32; i++) {
        res = res << 1;
        res = res | (n & 1)
        n = n >> 1;
}
return res >>> 0;
}