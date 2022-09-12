/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++){
      if(strs[i].length < prefix.length){
        prefix = prefix.slice(0, strs[i].length)
      }
        for(let j = prefix.length-1; j >= 0; j--){
          if(strs[i][j] !== prefix[j]){
            prefix = prefix.slice(0, j)
          }
        }
    }
  return prefix;
};