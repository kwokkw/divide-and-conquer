// Write a function which accepts an array of
// distinct numbers sorted in increasing order.
//
// The array has been rotated counter -
// clockwise n number of times. Given such an
// array, find the value of n.

function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    // If array is already sorted (not totated at all),
    // the smallest element is at index zero.
    if (arr[left] < arr[right]) {
      return left;
    }

    // If the middle element is the smallest
    if (arr[middle] < arr[middle - 1]) {
      return middle;
    }

    // Decide which side to search
    if (arr[middle] <= arr[right]) {
      // Search left
      right = middle - 1;
    } else if (arr[middle] >= arr[left]) {
      // Else if, search right
      left = middle + 1;
    }
  }
  return 0;
}

// module.exports = findRotationCount;

console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
console.log(findRotationCount([7, 9, 11, 12, 15])); // 0

/* NOTE 

UNDERSTANDING THE PROBLEM

When a sorted array is rotated, the smallest element is the array moves from its original position. The number of rotations is equal to the index of the smallest element. For example:

- Original array: [1, 2, 3, 4, 5]
- Rotated array (2 times): [4, 5, 1, 2, 3]
- The smallest element (1) is at index 2. So, the number of rotations is 2.

APPROACH 

To find the number of rotations, find the index of the smallest element in the array. 

*/
