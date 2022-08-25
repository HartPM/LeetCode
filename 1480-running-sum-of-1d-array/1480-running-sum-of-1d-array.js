/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let sumArr = []
  nums.forEach((num,i) => i ===0 ? sumArr.push(num) : sumArr.push(sumArr[i-1] + num))
  return sumArr
};