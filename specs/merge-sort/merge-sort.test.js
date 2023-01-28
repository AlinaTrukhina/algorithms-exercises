/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  if(nums.length === 1){
    return nums;
  } else {
    const middle = Math.floor(nums.length / 2);
    const arr1 = nums.slice(0, middle);
    const arr2 = nums.slice(middle);
    const sortedArr1 = mergeSort(arr1);
    const sortedArr2 = mergeSort(arr2);

    return merge(sortedArr1, sortedArr2);
  }
};

const merge = (arr1, arr2) => {
  const sortedArray = [];
  while(arr1.length && arr2.length){
    if(Number(arr2[0]) <= Number(arr1[0])){
      sortedArray.push(arr2.shift());
    } else {
      sortedArray.push(arr1.shift());
    }
  } 
  return sortedArray.concat(arr1, arr2);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
