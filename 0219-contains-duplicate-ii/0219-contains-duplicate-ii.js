/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let hash = {};
    for (let i = 0; i < nums.length; i++){
      let key = nums[i];
        if (key in hash){
            if (Math.abs(hash[key] - i) <= k) return true;
            hash[key] = i;
        } else {
            hash[key] = i;
        }
    }
    return false;
};