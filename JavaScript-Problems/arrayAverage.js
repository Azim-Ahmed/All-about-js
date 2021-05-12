function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  let res = array.reduce((a, b) => a + b, 0);

  return res / array.length;
}
console.log(find_average([1, 1, 1]));
console.log(find_average([]));
console.log(find_average([1, 2, 3, 4]));

// array total with for of loop
// let out = null;
// for (let i of arr) {
//   out = out + i;
// }
// console.log(out);

// array total with for loop

// let put = null;
// for (let i = 0; i <= arr.length; i++) {
//   put = put + i;
// }
// console.log(put);
