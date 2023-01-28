function nbDig(n, d) {
    // your code
  digCount = 0;
  for(let i = 0; i <= n; i++){
    let squaredNum = i * i;
    squaredNum = squaredNum.toString();
    // console.log("The type of variable is",typeof(squaredNum))
    for(let j = 0; j < squaredNum.length; j++){
        // console.log(squaredNum[j]);
      if(squaredNum[j] == d){
        digCount++;
      }
    }
  }
  return digCount;
}

console.log(nbDig( 5750, 0))