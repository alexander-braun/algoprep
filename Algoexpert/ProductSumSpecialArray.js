function productSum(array, level = 1) {
  let sum = 0;
  for (const el of array) {
    if (typeof el === 'object') {
      sum += productSum(el, level + 1);
    } else sum += el;
  }
  return sum * level;
}

console.log(productSum([5, 2, [7, 1], 3, [5, [4, 5]]]));
