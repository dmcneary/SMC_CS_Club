/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    if (x > 0) {
        while (x > 0) {
            reversed = (reversed * 10) + (x % 10);
            x = Math.floor(x / 10);
        }
    } else {
        while (x < 0) {
            reversed = (reversed * 10) + (x % 10);
            x = Math.ceil(x / 10);
        }
    }
    
    if (reversed < -2147483648 || reversed > 2147483647) { //check for integer overflow
        reversed = 0;
    }
    
    return reversed;
};