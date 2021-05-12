function flattenAndSort(array) {
  let flatten = [].concat(...array);
  let output = flatten.sort((a, b) => a - b);
  return output;
}
let arr = [
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5],
];
console.log(flattenAndSort(arr));
