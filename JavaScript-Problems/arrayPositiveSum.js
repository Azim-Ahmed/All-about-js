//! using array methods
let arr = [1, -4, 7, 12];

function positiveSum(arr) {
  const input = arr.filter((x) => x > 0);
  const output = input.reduce((a, b) => a + b, 0);
  return output;
}
console.log(positiveSum(arr));

//! using for loop
function positiveSum2(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    // setup loop to go through array of given length
    if (arr[i] > 0) {
      // if arr[i] is greater than zero
      total += arr[i]; // add arr[i] to total
    }
  }
  return total; // return total
}
console.log(positiveSum2(arr));
