//Rotated Array Search

// Rotated Array Search
// If you have a sorted array, a rotated version of that array is the sorted array rotated some
// number of times left or right. For example, a rotated version of [0, 1, 2, 3, 4] is [3, 4, 0, 1, 2]
// (rotated right twice). Each rotated array has a single pivot point where the groups of values
// to the left and right are sorted, but the sorting does not continue accross the pivot.
// Given a rotated, sorted array, your task is to efficiently find the index of an element
// within that array. Your time complexity goal is O( log(n) ), where ‘n’ is the number of elements in the array.
//  For simplicity, you can assume that there are no duplicate elements in the array.

function rotatedArraySearch(rotated, target) {
  // Write your code here, and
  // return your final answer.
  var start = 0,
    last = rotated.length - 1;
  while (start <= last) {
    var mid = Math.floor((last + start) / 2);

    if (rotated[mid] === target) {
      return mid;
    } else if (rotated[start] <= rotated[mid]) {
      if (rotated[start] <= target && target < rotated[mid]) {
        last = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (rotated[mid] < target && target <= rotated[last]) {
        start = mid + 1;
      } else {
        last = mid - 1;
      }
    }
  }
  return -1;
}
