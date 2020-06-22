//Find all pairs that make a sum with hashtable
function twoSum2(arr, num) {
  let pairs = [];
  let hashtable = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let counter = num - current;
    if (hashtable.indexOf(counter) !== -1) pairs.push([counter, current]);
    hashtable.push(current);
  }
  return pairs;
}
console.log(twoSum2([1, 2, 3, 4, 5, 6, 7, 2, 1, 0, 4], 4));
