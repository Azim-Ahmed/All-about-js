let arr = [11, 2, 805, 5, 9, 4];

// console.log(Math.min(...arr));

let array = ["each", "js", "loop", "looping"];

let shortestString = array.reduce((a, b) => (a.length <= b.length ? a : b));
// console.log(shortestString);

//! function

const shortest = (array) => {
  return array.reduce(
    (acc, value) => (acc.length <= value.length ? acc : value)

    /* 
   ! find the largest element
   ? acc.length >= value.length ? acc : value 
    */
  );
};

console.log(shortest(array));
console.log(shortest(["rakib", "sakib", "undertaker", "triple h", "hbk"]));
