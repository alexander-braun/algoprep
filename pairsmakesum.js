//Find all pairs that make a sum
function twoSum(arr, num) {
  let outArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) outArr.push([arr[i], arr[j]]);
    }
  }
  return outArr;
}
console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 2, 1, 0, 4], 4));
