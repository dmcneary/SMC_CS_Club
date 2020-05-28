/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0;
    
    const revPositive = () => {
        while (x > 0) {
            reversed = (reversed * 10) + (x % 10);
            x = Math.floor(x / 10);
        }
    }
    
    const revNegative = () => {
        while (x < 0) {
            reversed = (reversed * 10) + (x % 10);
            x = Math.ceil(x / 10);
        }
    }
    
    (x > 0) ? revPositive() : revNegative();
    
    if (reversed < Math.pow(-2, 31) || reversed > Math.pow(2, 31) - 1) { //check for integer overflow
        reversed = 0;
    }
    
    return reversed;
};