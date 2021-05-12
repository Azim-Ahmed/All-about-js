function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  //! using for loop
  //   for (let i = 0; i < str.length; i++) {
  //     // console.log(str[i]);
  //     if (vowels.includes(str[i])) {
  //       count++;
  //     }
  //   }

  //! using for of loop
  for (let letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return `Total vowels in the text : ${count}`;
}
const sentence = "this world shall know pain";

let a = countVowels("aeiou");
let b = countVowels(sentence);
console.log(a);
console.log(b);
console.log(countVowels("you think you know me"));
