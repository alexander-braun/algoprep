function minimumSwaps(arr) {
  let swaps = 0;
  let hash = [];

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    let originallyHere = i + 1;
    hash.push(originallyHere);
    let nextIndex = currentElement - 1;

    // Check if currentElement was in a previous cycle
    // If the original element was here the for loop continues
    if (hash.indexOf(currentElement) !== -1) continue;

    // Go through cicles
    let circleOpen = true;
    while (circleOpen) {
      // Add a swap
      swaps++;
      // Push the current element that is looked at into the hash
      hash.push(currentElement);

      // If the element on the next search index is the original element
      // Stop the cicle
      if (arr[nextIndex] === originallyHere) {
        circleOpen = false;
        break;
      }

      // Set the next Element wich is looked at
      currentElement = arr[nextIndex];

      // Set the next index by looking at the next Element wich is looked at
      nextIndex = currentElement - 1;
    }
  }
  return swaps;
}

console.log(minimumSwaps([2, 3, 4, 1, 5]));

/*
4 3 1 2
d c a b

current is 4   node MinimumSwas2.js
originallyHere = element at position 2 = 1
next index to search is the index of the current element
while the next element to search for is different then the original element do:


d occupies a remember a
who occupies d ?
b occupies d
who occupies b ?
c occupies b 
who occupies c ?
a occupies c -> a found, circle closed --> 4 - 1 swaps needed for this circle
*/
