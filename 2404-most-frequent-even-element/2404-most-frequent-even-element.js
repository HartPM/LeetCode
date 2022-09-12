/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let freqMap = {'-1': 0};
    let max = -1;
    
    for(num of nums){
       freqMap[num] = (freqMap[num] || 0) + 1;
    }

    for(let key in freqMap){
      if(key % 2 === 0 && freqMap[key] > freqMap[max]){
        max = key
      }
    }
    return max
};