//! Find the stray number

let arr = [17, 17, 3, 17, 17, 17, 17];
let arr2 = [1, 1, 8];
let arr3 = [5, 5, 5, 5, 7];

//? using array find and filter methods
function strayWho(arr) {
  return arr.find(
    (number) => arr.filter((value) => number === value).length === 1
  );
}
console.log(strayWho(arr));
console.log(strayWho(arr2));
console.log(strayWho(arr3));

console.log("----------------------------");
//? using array reduce method
// works for only total odd number
function stray(arr) {
  const stray = arr.reduce((acc, value) => acc ^ value);
  return stray;
}
console.log(stray(arr3));
