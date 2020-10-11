/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let lastDirectionSwitchIndex = 0;
  let tempDirection = arr[0] > arr[1] ? '-' : '+';
  let direction;
  for (let i = 0; i < arr.length - 1; i++) {
    direction = arr[i] > arr[i + 1] ? '-' : '+';
    if (direction !== tempDirection) {
      tempDirection = direction;
      lastDirectionSwitchIndex = i;
    }
  }

  return lastDirectionSwitchIndex;
};
