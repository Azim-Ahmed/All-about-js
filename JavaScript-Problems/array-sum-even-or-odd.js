function oddOrEven(array) {
  let result = null;
  for (let i of array) {
    result += i;
  }
  if (result % 2 === 0) {
    return "Even";
  }
  return "Odd";
}
console.log(oddOrEven([0]));
