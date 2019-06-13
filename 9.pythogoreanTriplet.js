// Problem

// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
// a2 + b2 = c2

// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// Problem Break Down

// Loop through the natural numbers to see if two of them make a pythogorean triplet
// Find the product of the a,b,c if the natural numbers give the pythogorean triplet

function pythogoreanTriplet() {
  let tripletSum = 1000;
  let abSum;
  let abcProduct;
  let c;

  for (let a = 1; a <= tripletSum; a++) {
    for (let b = 1; b <= tripletSum; b++) {
      c = tripletSum - a - b;
      abSum = a ** 2 + b ** 2;
      if (a < b && abSum === c ** 2) {
        abcProduct = a * b * c;
      }
    }
  }

  console.log(`The product is ${abcProduct}`);
}

pythogoreanTriplet();
