/*
! if word's length is odd return the middle character
? if word's length is even return the middle 2 characters

*/

function getMiddle(str) {
  if (str.length % 2 === 0) {
    return str[str.length / 2 - 1] + str[str.length / 2];
  }
  return `${str.charAt(str.length / 2)}`;
}

console.log(getMiddle("huawei"));
console.log(getMiddle("C"));
console.log(getMiddle("whatever"));
console.log(getMiddle("rakib"));
console.log(getMiddle("Islamic"));
