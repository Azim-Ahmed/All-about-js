function posNegative(number) {
  if (number < 0) {
    return `${number} number is negative`;
  }
  return `${number} number is positive`;
}
console.log(posNegative(14));
console.log(posNegative(-14));

function opposite(number) {
  return `Opposite of ${number} : ${-number}`;
}
console.log(opposite(10));
console.log(opposite(-90));
