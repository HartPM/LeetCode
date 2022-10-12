/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = {}
    for (num of nums){
        if (hash[num]) return true;
        hash[num] = 1;
    }
    return false
};