/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let hash = {}
    let count = 0;
    for(num of nums){
        hash[num] = (hash[num] || 0) + 1;
    }
    for(key in hash){
        if(hash[key] > 1){
            count += (hash[key] - 1)* hash[key] / 2;
        }
    }
    return count
};