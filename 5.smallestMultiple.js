// Problem

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// Problem Break Down

// Divide each counter starting from 1 by numbers ranging from 1 to 10
// check to see if the counter is evenly divisible by the range of number 1 to 10
// continue to check until you find the smallest counter that can be evenly divisible by the numbers 1 to 10

let isSmallestMultiple = false;
let counter = 1;
let evenlyDivisible = [];
let result;

function smallestMultiple() {
  while (isSmallestMultiple === false) {
    // Looping for the numbers 1 to 10 to divide the counter with
    for (let i = 1; i <= 10; i++) {
      result = counter % i;
      // Checking to see if the counter gets evenly divided by (n) in the range 1 to 10
      if (result === 0) {
        evenlyDivisible.push(i);
        if (evenlyDivisible.length === 10) {
          isSmallestMultiple = true;
        }
      }
    }

    evenlyDivisible = [];
    counter++;
  }
}

smallestMultiple();
