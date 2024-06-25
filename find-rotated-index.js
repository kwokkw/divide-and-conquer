// Write a function which accepts a
// rotated array of sorted numbers
// and an integer.
// The function should return the
// index of num in the array.
// If the value is not found,
// return -1.
// **Constraints**: Time Complexity: O(log N)

function findRotatedIndex(arr, targetNum) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let middleVal = arr[middle];

    if (middleVal < targetNum) {
      left = middle + 1;
    } else if (middleVal > targetNum) {
      if (arr[left] > targetNum) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      return middle;
    }
  }
  return -1;
}

// export default findRotatedIndex;
// module.exports = { findRotatedIndex };

findRotatedIndex([3, 4, 1, 2], 4); // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8); // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3); // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14); // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12); // -1
