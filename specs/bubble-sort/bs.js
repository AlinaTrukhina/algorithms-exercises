
function bubbleSort(nums) {
    // code goes here
    for(let i = 0; i < nums.length/2; i++) {
      let earlier = Number(nums[i]);
      let later = Number(nums[i + 1]);
      if(earlier > later) {
        nums[i] = later;
        nums[i + 1] = earlier;
      }
      console.log("i is ", i);
      console.log(nums);
    }
    return nums;
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
bubbleSort(nums);