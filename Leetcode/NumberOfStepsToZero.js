/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let current = num;
  let steps = 0;
  while (current !== 0) {
    if (current % 2 === 0) {
      steps++;
      current /= 2;
    } else {
      current -= 1;
      steps++;
    }
  }

  return steps;
};
