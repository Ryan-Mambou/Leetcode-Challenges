/**Since here we can't use the + and - operator, we'll think bitwise
 * First of all, the xor operator mimics best addition since it only returns 1 if one of the bits is one
 * But we know during addition that 1+1 is 10 and there's a remainder so we'll use the & operator too as carry and shift by one bit to the left to simulate the carry
 * If carry is still one, exclusively add(xor) again
 * Let's fucking go!
 */

var getSum = function(a, b) {
    while(b != 0){
        const [xor, carry] = [(a ^ b), (a & b) << 1]

        a = xor;
        b = carry;
    }
    return a;
};