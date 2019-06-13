// Problem

// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.

// Problem Break Down

// Find all prime numbers below 2 million,
// Add all prime numbers then return the sum

let sumOfPrimes = 0;
let result;

function summationOfPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    for (let j = 2; j <= i; j++) {
      result = i % j;
      if (result === 0) {
        if (j !== i) {
          break;
        } else {
          console.log(j);
          sumOfPrimes = sumOfPrimes + j;
        }
      }
    }
  }

  console.log(sumOfPrimes);
}

summationOfPrimes(10);
