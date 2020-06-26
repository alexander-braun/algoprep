// Pick pivot value (can be random but we use first value of array)
// Loop through values of array and sort every other number with respect to pivot
// Initiate the while loop with left and right pointer - left = 0 + 1 and right is end of array
// Number smaller then pivot -> move to left
// Number bigger then pivot -> move to right
// After the loop the pivot is in the correct position
// Reapply the technique

// O(Nlog(N)) time
// O(log(N)) space

function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return;
  let pivotIdx = startIdx;
  let leftIdx = pivotIdx + 1;
  let rightIdx = endIdx;

  while (rightIdx >= leftIdx) {
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
      let temp = array[rightIdx];
      array[rightIdx] = array[leftIdx];
      array[leftIdx] = temp;
    }
    if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
  }
  swap(pivotIdx, rightIdx, array);
  let leftSubarraySmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
  if (leftSubarraySmaller) {
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// [8, 5, 2, 9, 5, 6, 3] P = 8
//  P  L              R
// [8, 5, 2, 9, 5, 6, 3] -> left not bigger then eight shift left pointer by one
//  P     L           R
// [8, 5, 2, 9, 5, 6, 3] -> left not bigger then eight shift left pointer by one
//  P        L        R
// [8, 5, 2, 3, 5, 6, 9] -> 9 is bigger then eight so swap left and right indexes
//  P        L        R
// [8, 5, 2, 3, 5, 6, 9] -> 3 is smaller then eight so increment left pointer
//  P           L     R
// [8, 5, 2, 3, 5, 6, 9] -> 9 is greighter or equal to eight so move right pointer to the left
//  P           L  R
// [8, 5, 2, 3, 5, 6, 9] -> left pointer smaller then 8 so move to right, right pointer smaller then eigth so stay
//  P              L
//                 R
// [8, 5, 2, 3, 5, 6, 9] -> right number not bigger then eight so stay, left pointer smaller so move to the right
//  P              R  L  -> Break out of loop because R < L -> NEW PIVOT = right pointer because right pointer always smaller then pivot
//                       -> Swap right pointer with pivot
// [6, 5, 2, 3, 5, 8, 9] -> 8 Now in final sorted Position
//  P
// [6, 5, 2, 3, 5] [8][9] -> We start now sorting the smaller subarray
// [9]                   -> subarray has only length of 1 and is now sorted
// [6, 5, 2, 3, 5]
//  P  L        R
// [6, 5, 2, 3, 5] -> left smaller then 6 so iterate further, right smaller then 6
//        L     R
// [6, 5, 2, 3, 5] ->  left smaller then 6 so iterate further, right smaller then 6
//  P        L  R
// [6, 5, 2, 3, 5]
//  P           L
//              R
// [6, 5, 2, 3, 5]  -> left bigger then the left so swap right pointer with pivot
//  P           R L
// [5, 5, 2, 3] [6] [8] [9] -> no further subarray so continue
//  P  L     R
// [5, 5, 2, 3] -> 5 smaller or equal to five so increment left pointer, 3 smaller then 5 so do nothing with right
//  P     L  R
// [5, 5, 2, 3] -> 2 smaller then 5 so move left again
//  P        L
//           R
// [5, 5, 2, 3] -> 3 smaller then 5 so move left pointer -> left now > right so swap right and pointer
//  P        R L
// [3, 5, 2] [5][6][8][9] -> Restart
// [3, 5, 2] -> left pointer bigger then 3 and right smaller then 3 so swap left and right
//  P  L  R
// [3, 2, 5] -> left pointer smaller then 3 so move to right, right pointer greater then 3 so move to left
//  P  R  L
// [3, 2, 5] -> right pointer smaller then left so swap right number and pivot
//  P  R  L
// [2, 3, 5]
// [2][3][5] -> 2 unsorted subarrays (2, 5) left but both are of number one so all is sorted
// [2][3][5][5][6][8][9]
