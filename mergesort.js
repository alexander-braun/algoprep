//Mergesort
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let middleIndx = Math.floor(arr.length / 2);
  let firstHalf = arr.slice(0, middleIndx);
  let secondHalf = arr.slice(middleIndx);

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(arr1, arr2) {
  let result = [];

  while (arr1.length && arr2.length) {
    let min;
    if (arr1[0] < arr2[0]) min = arr1.shift();
    else min = arr2.shift();
    result.push(min);
  }

  if (arr1.length) result = result.concat(arr1);
  else result = result.concat(arr2);

  return result;
}
console.log(mergeSort([5, 6, 7, 3, 2, 4]));
