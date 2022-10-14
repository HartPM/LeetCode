/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
  num = `${num}`
  let nums = num.split('')
  
  let noSwap;
  for(let i = 4; i>0; i--){
    noSwap = true;
    for(let j=0; j< i-1; j++){
      if(nums[j] > nums[j+1]){
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;
        noSwap = false;
      }
    }
    if(noSwap) break;
  }
  let num1 = nums[0] + nums[2]
  let num2 = nums[1] + nums[3]
  return parseInt(num1) + parseInt(num2)
};