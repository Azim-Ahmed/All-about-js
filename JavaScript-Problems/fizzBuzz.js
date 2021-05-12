//! Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5.

// for (let i = 1; i <= 25; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

const fizzBuzz = (limit, num1, num2) => {
  for (let j = 1; j < limit; j++) {
    if (j % num1 == 0 && j % num2 == 0) {
      console.log("FizzBuzz");
    } else if (j % num1 == 0) {
      console.log("Fizz");
    } else if (j % num2 == 0) {
      console.log("Buzz");
    } else {
      console.log(j);
    }
  }
};
fizzBuzz(20, 3, 5);
fizzBuzz(30, 3, 7);
