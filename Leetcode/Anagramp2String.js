/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  let countPositive = 0;
  const reserved = {};
  
  for(let i = 0; i < t.length; i++) {
      reserved[t[i]]? reserved[t[i]]++ : reserved[t[i]] = 1;   
  }
  
  let count = 0;
  for(let c of s) {
      if(reserved[c] > 0) {
          reserved[c]--
      } else {
          count++
      }
  }   
  return count
};