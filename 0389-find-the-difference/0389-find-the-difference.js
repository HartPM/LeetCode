/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let hash = {};
  for(char of s){
    hash[char] = (hash[char] || 0) + 1;
  }
  for(char of t){
    if(hash[char] > 0){
      hash[char] --;
    } else {
      return char;
    }
  }
};