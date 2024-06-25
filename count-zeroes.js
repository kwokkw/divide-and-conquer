// Given an array of 1s and 0s
// which has all 1s first followed
// by all 0s, write a function which
// returns the number of zeroes in the array.
// **Constraints**: Time Complexity: O(log N)

function countZeroes(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let zeroCount = 0;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal === 1) {
      leftIdx = middleIdx + 1;
    } else {
      zeroCount++;
      rightIdx--;
    }
  }
  return zeroCount;
}

// module.exports = countZeroes;

countZeroes([1, 1, 1, 1, 0, 0]); // 2
countZeroes([1, 0, 0, 0, 0]); // 4
countZeroes([0, 0, 0]); // 3
countZeroes([1, 1, 1, 1]); // 0
