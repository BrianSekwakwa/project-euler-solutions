// Problem

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Problem break down

// Find all prime numbers from 10 up to the number n
// Find how many of these prime numbers are factors of the number n
// Within those factors that were found, find the largest number among them

let primeNumbers = [2, 3, 5, 7];
let primeFactors = [];

function primeFactor(num) {
  // Finding prime numbers up to n
  for (let i = 10; i <= num; i++) {
    for (let j = 2; j <= i; j++) {
      let result = i % j;
      if (result === 0) {
        if (j !== i) {
          break;
        } else {
          primeNumbers.push(j);
        }
      }
    }
  }

  // Finding which of the prime numbers are factors of n
  primeNumbers.forEach(prime => {
    if (num % prime === 0) {
      primeFactors.push(prime);
    }
  });

  // Finding the larget prime factor of n
  console.log(Math.max(...primeFactors));
}

primeFactor(13195);
