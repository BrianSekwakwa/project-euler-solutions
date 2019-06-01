// Problem

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// Problem Break Down

let isSmallestMultiple = false;
let counter = 1;

function smallestMultiple() {
  while (isSmallestMultiple === false) {
    if (
      counter % 2 === 0 &&
      counter % 3 === 0 &&
      counter % 4 === 0 &&
      counter % 5 === 0 &&
      counter % 7 === 0
    ) {
      console.log("smallest multiple is " + counter);
      isSmallestMultiple = true;
    } else {
      console.log(counter);
      counter++;
    }
  }
}

smallestMultiple();
