//! Generate range of integers
function generateRange(min, max, step) {
  let output = [];
  let result = null;
  for (let i = min; i <= max; i += step) {
    output.push(i);
  }
  return output;
}
console.log(generateRange(2, 10, 2));
console.log(generateRange(1, 10, 3));
