let arr = [1, 2, 3, 4, 6, 7, 8];
let arr2 = [6, 7, 8, 9, 10, 11, 12, 13, 14];

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) {
      return arr[i];
    }
  }
  return null;
}
console.log(firstNonConsecutive(arr2));
console.log(firstNonConsecutive(arr));
