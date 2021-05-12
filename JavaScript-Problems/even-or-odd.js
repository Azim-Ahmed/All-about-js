function evenOrOdd(number) {
  if (number % 2 === 0) {
    return `${number} is even`;
  }
  return `${number} is odd`;
}
console.log(evenOrOdd(5));
console.log(evenOrOdd(2));
console.log(evenOrOdd(1));
console.log(evenOrOdd(122));
