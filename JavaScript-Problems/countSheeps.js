let array = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
function countSheeps(arrayOfSheep) {
  let count = 0;
  arrayOfSheep.filter((item) => {
    if (item === true) {
      count++;
    }
  });
  return count;
}
console.log(countSheeps(array));
