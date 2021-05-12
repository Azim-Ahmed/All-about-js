function squareDigits(num) {
  let str = num.toString();
  let output = "";
  for (let i of str) {
    output += i * i;
  }
  return parseInt(output);
}
console.log(squareDigits(223));
console.log(squareDigits(9967));
