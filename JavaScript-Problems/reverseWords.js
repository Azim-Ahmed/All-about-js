function reverseWords(str) {
  let arr = str.split("");
  let resArr = arr.reverse();
  let reverse = resArr.join("");
  let out = reverse.split(" ");
  let words = out.reverse();
  return words.join(" ");
}
console.log(reverseWords("This is an example!"));
