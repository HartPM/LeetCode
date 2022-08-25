/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = new Map();
  map.set("I", 1)
  .set("V", 5)
  .set("X", 10)
  .set("L", 50)
  .set("C", 100)
  .set("D", 500)
  .set("M", 1000)
  
  let count = 0
  let arr = s.split("")
  for (let i = arr.length - 1; i >= 0; i --) {
    if (map.get(arr[i]) * 4 < map.get(arr[i + 1])) {
      count -= map.get(arr[i])
    } else {
      count += map.get(arr[i])
    }
  }      
  return count
};