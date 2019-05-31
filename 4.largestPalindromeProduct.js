// Problem

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers      is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

// Problem break down

// Find the product of all the individual numbers that consist of 3 digit number
// check and see which one of the products is a palindrome
// replaces the previous palindrome of a product if a larger palindrome product surfaces further in the loop

// Initializing Variables
let largestPalindrome = 0;
let currentPalindrome;
let firstNumber;
let secondNumber;
let product;
let reversed;

function palindromeProduct(a, b) {
  // Looping through individual numbers with 3 digits
  for (let i = a; i <= b; i++) {
    // Inner loop to get product and check if its palindrome
    for (let j = a; j <= b; j++) {
      product = i * j;
      reversed = parseInt(
        product
          .toString()
          .split("")
          .reverse()
          .join("")
      );

      // Checking to see if the reversed number is a palindrome
      if (product === reversed) {
        currentPalindrome = reversed;
        // Checking to see if the palindrome is the largest product
        if (currentPalindrome > largestPalindrome) {
          largestPalindrome = currentPalindrome;
          firstNumber = i;
          secondNumber = j;
        }
      }
    }
  }

  console.log(
    `largest palindrome product is ${largestPalindrome} = ${firstNumber} x ${secondNumber}`
  );
}

palindromeProduct(100, 999);
