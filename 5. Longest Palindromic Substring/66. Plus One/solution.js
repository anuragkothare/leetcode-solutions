// https://leetcode.com/problems/plus-one/description/



/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var one = 1;
    var res = 0;
    for (var i = digits.length - 1; i >= 0; i--) {
        res = digits[i] + one;
        one = parseInt(res / 10);
        if (res == 10) {
            digits[i] = 0;
        } else {
            digits[i] = res;
        }
    }
    if (one > 0) {
        digits.unshift(one);
    }
    return digits;
    
};