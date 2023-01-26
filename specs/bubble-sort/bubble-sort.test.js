/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
  // code goes here
  let swaps = 1;
  // outer loop to go thru the array
  while (swaps > 0) {
      swaps = 0;
      // inner loop to bubble the number up
      for(let i = 0; i < nums.length - 1; i++) {
          let earlier = Number(nums[i]);
          let later = Number(nums[i + 1]);
          if(earlier > later) {
            nums[i] = later;
            nums[i + 1] = earlier;
            swaps++;
          }
          // console.log("i is ", i);
          // console.log(swaps);
          // console.log(nums);
        }
  }
  return nums;
}

// unit tests
// do not modify the below code
test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
