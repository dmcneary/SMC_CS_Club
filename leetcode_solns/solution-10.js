/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    p = "^" + p + "$";
    let regex = new RegExp(p, "g");
    return regex.test(s);
};