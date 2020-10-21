/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
  const negative = [];
  for(const row of grid) {
      for(const num of row) {
          if(num < 0){
              negative.push(num)
          }
      }
  }
  
  return negative.length
};