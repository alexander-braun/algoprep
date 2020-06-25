// Complete the countTriplets function below.
function countTriplets(arr, r) {
  let left = {};
  let right = {};
  let count = 0;

  for (const el of arr) {
    // Last Step:
    // The element is the last element of the triplet and can be counted up
    if (el in right) {
      // Element is found and a triplet or more of them
      count += right[el];
    }

    //Second step:
    //Current element has been found and only one element of the triplet is missing
    if (el in left) {
      // If the element * r is already there
      // The current element occured more then once
      if (el * r in right) {
        right[el * r] += left[el];
        // Else if it's not there yet, put finally
        // the last potential triplet into right
      } else {
        right[el * r] = left[el];
      }
    }

    // First step:
    // Put the element * r (second element of triplet) into left
    if (el * r in left) {
      left[el * r] += 1;
    } else {
      left[el * r] = 1;
    }
  }

  return count;
}

console.log(countTriplets([1, 2, 4, 8, 16, 32, 64], 2));
