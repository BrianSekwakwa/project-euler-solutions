// Problem

// The sum of the squares of the first ten natural numbers is,
// 1**2 + 2**2 + ... + 10**2 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)**2 = 55**2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// Problem Break Down

// Find the sum of squares for the first 100 natural numbers
// Find the square of the sum of the first 100 natural numbers
// Find the difference between them

let sumOfSquare = 0;
let squareOfSum;
let sumOfNatural = 0;
let sumSquareDiff;

function squareDifference() {
  // sum of squares
  for (let i = 1; i <= 100; i++) {
    sumOfSquare += i ** 2;
  }

  // square of the sum
  for (let i = 1; i <= 100; i++) {
    sumOfNatural += i;
  }
  squareOfSum = sumOfNatural ** 2;

  // Find the difference
  sumSquareDiff = squareOfSum - sumOfSquare;
  console.log(sumSquareDiff);
}

squareDifference();
