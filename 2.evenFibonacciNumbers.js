// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// Big O is strong with this one lool too many operations: solution 1

function evenFobonacci(num) {
  let prevNumber = 1,
    nextNumber = 2,
    newNumber = 0,
    sum = 0;

  for (let i = 0; i <= num; i++) {
    if (nextNumber <= 4000000) {
      if (nextNumber % 2 === 0) {
        sum = sum + nextNumber;
      }
      newNumber = prevNumber + nextNumber;
      prevNumber = nextNumber;
      nextNumber = newNumber;
    } else {
      break;
    }
  }

  console.log(`The sum of even Fibonacci numbers is ${sum}`);
}

evenFobonacci(20);