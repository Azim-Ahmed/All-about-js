function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  let firstMax = numbers[0];
  let secondMax = numbers[1];
  return firstMax + secondMax;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([19, 5, 42, 21, 8]));
