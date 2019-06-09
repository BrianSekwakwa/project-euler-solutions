// Problem

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

// Problem Break Down

// Loop through natural numbers
// Check to see if that natural number is a factor or not
// Put prime numbers into an array
// Check the length of the array and see if it reaches 10 001
// Return the last number in the array that is the 10 001st prime number

let isFull = false;
let count = 10;
let primeArray = [2, 3, 5, 7];

function tenThounsandOne() {
  // Loop through natural numbers
  while (isFull === false) {
    // Check to see if its a prime number or not
    if (
      count % 2 === 0 ||
      count % 3 === 0 ||
      count % 5 === 0 ||
      count % 7 === 0 ||
      count % 11 === 0
    ) {
    } else {
      primeArray.push(count);
      if (primeArray.length === 50) {
        console.log(primeArray);
        isFull = true;
      }
    }
    count++;
  }
}

tenThounsandOne();

// 104743
