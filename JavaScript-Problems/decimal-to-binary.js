function inputNumber(num) {
  let binary = "";
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}
console.log(inputNumber(1));
console.log(inputNumber(5));
