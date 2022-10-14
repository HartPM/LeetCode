/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let noSwaps;
    for(let i= nums.length; i>0; i--){
        noSwaps = true;
        for(let j=0; j<i-1; j++){
            if(nums[j] > nums[j+1]){
                let temp = nums[j];
                nums[j] = nums[j+1];
                nums[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    if(nums[0] !== 0) return 0;
    for(let i=0; i<nums.length; i++){
      if(nums[i+1] !== (nums[i] + 1)){
        return nums[i] + 1;
      }        
    }
};