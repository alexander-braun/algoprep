function lilysHomework(arr) {
  let reverseOrder = [...arr].reverse();
  let val1 = findSwaps(arr);
  let val2 = findSwaps(reverseOrder);
  return val1 > val2 ? val2 : val1;
}

function findSwaps(arr) {
  // First store all the positions of original array elements in a map
  // Element / Position
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }

  // get the sorted version
  let sorted = [...arr].sort((a, b) => a - b);

  // Initialise swaps
  let swaps = 0;
  // Loop through the unsorted Array
  for (let i = 0; i < arr.length; i++) {
    // If the element at position i is different then the element at the same index for the sorted array
    if (arr[i] !== sorted[i]) {
      swaps++;
      // arr[i] needs to become sorted[i]
      // map[sorted[i]] (the old position) needs to become arr[i] current
      //
      let correctElementHere = sorted[i];
      let positionOfCorrectElement = map[sorted[i]];

      // Set new position of this element in map to correct position
      map[arr[i]] = map[sorted[i]];

      arr[positionOfCorrectElement] = arr[i];
      arr[i] = correctElementHere;
    }
  }
  return swaps;
}

console.log(lilysHomework([2, 5, 3, 1]));

// node LilysHomework.js
/*
7 3 0 4 1 6 5 2 - original array

0 1 2 3 4 5 6 7 - sorted array

0 3 7 4 1 6 5 2 - after first swap

0 1 7 4 3 6 5 2 - after second swap

0 1 2 4 3 6 5 7 - after third swap

0 1 2 3 4 6 5 7 - after fourth swap

0 1 2 3 4 5 6 7 - after fifth swap
*/
