let array1 = [":)", ";(", ";}", ":-D"];
let array2 = [";D", ":-(", ":-)", ";~)"];
let array3 = [";]", ":[", ";*", ":$", ";-D"];
//return the total number of smiling faces in the array
function countSmileys(arr) {
  let count = 0;
  arr.filter((item) => {
    if (
      item === ":)" ||
      item === ";)" ||
      item === ":~)" ||
      item === ":-)" ||
      item === ";~)" ||
      item === ";-)" ||
      item === ":-D" ||
      item === ";-D" ||
      item === ";~D" ||
      item === ":~D" ||
      item === ":D" ||
      item === ";D"
    ) {
      count++;
    }
  });
  if (arr.length === 0) {
    return 0;
  }
  return count;
}
console.log(countSmileys(array1));
console.log(countSmileys(array2));
console.log(countSmileys(array3));
console.log(countSmileys([]));
