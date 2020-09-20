/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  const output = [];
  for (const kid of candies) {
    if (kid + extraCandies >= max) {
      output.push(true);
    } else {
      output.push(false);
    }
  }
  return output;
};
