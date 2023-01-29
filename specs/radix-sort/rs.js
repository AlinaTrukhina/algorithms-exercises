function getLongestNumber(array) {
    longestNumber = 1;
    for(let n of array){
      if( n.toString().length > longestNumber) {
        longestNumber = n.toString().length
      }
    }
    longestNum10 = 1;
    for(let i = 1; i < longestNumber; i++){
        longestNum10 = longestNum10 * 10;
    }
    return longestNum10;
}

function getDigit(number, place, longestNum10) {
    let truncatedNum = Math.floor(number / place);
    let decimalNum = (truncatedNum / (10)) - Math.floor(truncatedNum / (10));
    decimalNum = Math.round(decimalNum*10);
    return decimalNum;
}

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

console.log(getLongestNumber(nums));

console.log(1391/10);

console.log(getDigit(1391, 1, 4));
console.log(getDigit(1391, 10, 4));
console.log(getDigit(1391, 100, 4));
console.log(getDigit(1391, 1000, 4));

console.log(getDigit(30, 10, 4));