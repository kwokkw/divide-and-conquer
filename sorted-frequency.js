// Given a sorted array and a number,
// write a function that counts the occurrences
// of the number in the array
// Constraints: Time Complexity: O(log n)

function sortedFrequency(arr, num) {
  function findFirstOccurrence(arr, num) {
    let firstOccurrence = -1;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];

      if (middleVal < num) {
        leftIdx = middleIdx + 1;
      } else if (middleVal > num) {
        rightIdx = middleIdx - 1;
      } else {
        firstOccurrence = middleIdx;
        rightIdx = middleIdx - 1;
      }
    }
    return firstOccurrence;
  }

  function findLastOccurence(arr, num) {
    let lastOccurrence = -1;
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];

      if (middleVal < num) {
        leftIdx = middleIdx + 1;
      } else if (middleVal > num) {
        rightIdx = middleIdx - 1;
      } else {
        lastOccurrence = middleIdx;
        leftIdx = middleIdx + 1;
      }
    }
    return lastOccurrence;
  }

  const firstOccurrence = findFirstOccurrence(arr, num);
  if (firstOccurrence === -1) return -1;

  const lastOccurrence = findLastOccurence(arr, num);
  const result = lastOccurrence - firstOccurrence + 1;

  return result;
}

// module.exports = sortedFrequency;

sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2); // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3); // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1); // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4); // -1
