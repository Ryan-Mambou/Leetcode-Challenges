/**If num is zero , return zero
 * Else there's a law of modulo with 9 where  if a num is divisible by 9 the result of the sum of it digits is 9
 * or the modulo in the other case
 */

var addDigits = function(num) {
    if(num === 0) return 0
    let result = num % 9 === 0 ? 9 : num % 9
    return result;
}