/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    function merge(arr1, arr2){
        let sortedArr = [];
        let i =0;
        let j=0;
        
        while(i<arr1.length && j<arr2.length){
            if(arr1[i] < arr2[j]){
                sortedArr.push(arr1[i])
                i++;
            } else {
                sortedArr.push(arr2[j])
                j++;
            }
        }
        if(arr1.length !== i){
            while(i<arr1.length){
                sortedArr.push(arr1[i])
                i++;
            }
        }
        if(arr2.length !== j){
            while(j<arr2.length){
                sortedArr.push(arr2[j])
                j++;
            }
        }
        return sortedArr;
    }
    
    function mergeSort(arr){
        if(arr.length <=1) return arr;
        
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        
        return merge(left, right);
    }
    
    const orderedArr = mergeSort(nums);
    const index = Math.floor(orderedArr.length / 2);
    
    return orderedArr[index];
};