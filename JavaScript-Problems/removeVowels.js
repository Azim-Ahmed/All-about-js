let string = "kill me heal me";

function disemvowel(str) {
  let regex = /[aeiou]/gi;
  let res = str.replace(regex, "");
  return res;
}
console.log(disemvowel(string));
console.log(disemvowel("Rest In Peace"));
