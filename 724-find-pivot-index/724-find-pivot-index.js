/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((prevNum, num) => prevNum + num)
    let leftSum = 0
    
    for (let i = 0; i < nums.length; i++) {
        leftSum += (nums[i-1] || 0)
        sum -= nums[i]
        if (leftSum === sum) {
            return i
        }
    }
    return -1 
};