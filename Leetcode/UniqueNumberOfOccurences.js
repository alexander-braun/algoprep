/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const occurs = {};

  for (const num of arr) {
    occurs[num] ? occurs[num]++ : (occurs[num] = 1);
  }

  const vals = Object.values(occurs);
  const set = new Set(vals);

  if (vals.length === set.size) {
    return true;
  } else return false;
};
