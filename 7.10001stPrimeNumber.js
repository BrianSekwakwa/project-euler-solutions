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
let count = 2;
let primeArray = [];

function tenThounsandOne(len) {
  while (isFull === false) {
    if (primeArray.length === len) {
      isFull = true;
    } else {
      for (let j = 2; j <= count; j++) {
        let result = count % j;
        if (result === 0) {
          if (j !== count) {
            break;
          } else {
            primeArray.push(j);
          }
        }
      }

      count++;
    }
  }

  console.log(primeArray[primeArray.length - 1]);
}

tenThounsandOne(10001);
