
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
            console.log("i is ", i);
            console.log(swaps);
            console.log(nums);
          }
    }
    return nums;
}

const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
bubbleSort(nums);