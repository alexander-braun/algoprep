/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const days = [];
  for (let i = 0; i < T.length; i++) {
    let current = T[i];
    let found = false;
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > current) {
        days.push(j - i);
        found = true;
        break;
      }
    }
    if (!found) {
      days.push(0);
    }
  }
  return days;
};
