/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  // base case - array of length 0 or 1
  if (nums.length < 2){
    return nums;
  } else {
    // choose pivot
    const pivot = nums.pop();
    // separate into left and right arrays
    let leftArr = [];
    let rightArr = [];
    for(let n of nums) {
      n <= pivot ? leftArr.push(n) : rightArr.push(n);
    }
      // call quickSort on left and right arrays
    leftArr = quickSort(leftArr);
    rightArr = quickSort(rightArr);

  return leftArr.concat(pivot, rightArr);
  }
}

// unit tests
// do not modify the below code
test("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
