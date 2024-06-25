// Write a function which accepts a sorted
// array and a value x, and returns the floor of x in the array.
// The floor of x in an array is the largest element in the
// array which is smaller than or equal to x.If the floor does
// not exist, return -1.

function findFloor(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] === x) {
      return arr[mid];
    } else if (arr[mid] < x) {
      // Potential floor, but there might be a larger number
      // less than or equal to `x`.
      // Update `result` and move the `left` pointer.
      result = arr[mid];
      left = mid + 1;
    } else if (arr[mid] > x) {
      right = mid - 1;
    }
  }
  return result;
}

// module.exports = findFloor;

console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 9)); // 8
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 20)); // 19
console.log(findFloor([1, 2, 8, 10, 10, 12, 19], 0)); // -1
