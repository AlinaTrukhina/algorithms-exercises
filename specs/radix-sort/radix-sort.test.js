/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

// number = 1391, place = 1, longestNumber = 4
// returns 1

function getDigit(number, place, longestNum10) {
  let truncatedNum = Math.floor(number / place);
  let decimalNum = (truncatedNum / (10)) - Math.floor(truncatedNum / (10));
  decimalNum = Math.round(decimalNum*10);
  return decimalNum;
}

function getLongestNumber(nums) {
  longestNumber = 1;
  for(let n of nums){
    if( n.toString().length > longestNumber) {
      longestNumber = n.toString().length
    }
  }
  // longestNum10 = 1;
  // for(let i = 1; i < longestNumber; i++){
  //     longestNum10 = longestNum10 * 10;
  // }
  return longestNum10;
}

function radixSort(array) {
  // find longest number
  const longestNumber = getLongestNumber(array);
  // create how many buckets you need
  // array of 10 arrays
  const buckets = new Array(10).fill().map(() => []);
  // for (let n = 0; n < 10; n++){
  //   newArray.push(Array());
  // }
  // for loop for how many iterations you need to do
  for (let i = longestNumber - 1; i >= 0; i--){
    // while loop
    // enqueue the numbers into their buckets
    while(array.length){
      const digit = array.shift();
      buckets[getDigit(digit, i, longestNumber)].push(digit);
      //newArray[digit].push();
    }
  }
    // for loop for each bucket
    // dequeue all of the items into a bucket

}

// unit tests
// do not modify the below code
describe.skip("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});
