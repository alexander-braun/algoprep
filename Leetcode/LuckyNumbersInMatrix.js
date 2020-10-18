/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    
  let rows = []
  
  for(let row of matrix) {
      const max = Math.min(...row)
      rows.push(max)
  }
  
  let cols = []
  for(let i = 0; i < matrix[0].length; i++) {
      const nums = [];
      for(const row of matrix) {
          nums.push(row[i])
      }
      
      const max = Math.max(...nums);
      cols.push(max)
  }
  
  const finalists = []
  for(const num of rows) {
      if(cols.indexOf(num) >= 0) {
          finalists.push(num)
      }
  }
  
  return finalists
};

