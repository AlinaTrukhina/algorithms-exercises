function factorial(n) { 
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
    // return fac;
  }

console.log(factorial(3));
console.log(factorial(10));