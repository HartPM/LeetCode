/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var rev_str = x.toString().split("").reverse().join("")
    return (x == rev_str ? true : false)
};