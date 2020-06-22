//No sorting allowed
//First naive approach
//O(N) Time and O(1) Space
function findThreeLargestNumbers(array) {
  let nums = [-Infinity, -Infinity, -Infinity];
  for (const num of array) {
    if (num > nums[2]) {
      nums[0] = nums[1];
      nums[1] = nums[2];
      nums[2] = num;
    } else if (num > nums[1]) {
      nums[0] = nums[1];
      nums[1] = num;
    } else if (num > nums[0]) {
      nums[0] = num;
    }
  }

  return nums;
}

//Algoexpert solution
//Basically same solution as above
function findThreeLargestNumbers(array) {
  let threeLargest = [null, null, null];
  for (num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest;
}

function updateLargest(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2);
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1);
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0);
  }
}

function shiftAndUpdate(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

//Own solution with shifthelper implemented from algoexpert
function findThreeLargestNumbers(array) {
  let nums = [-Infinity, -Infinity, -Infinity];
  for (const num of array) {
    if (num > nums[2]) {
      shiftHelper(nums, num, 2);
    } else if (num > nums[1]) {
      shiftHelper(nums, num, 1);
    } else if (num > nums[0]) {
      shiftHelper(nums, num, 0);
    }
  }
  return nums;
}

function shiftHelper(arr, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      arr[i] = num;
    } else {
      arr[i] = arr[i + 1];
    }
  }
}
