//! write a code that capitalize each word of a sentence.

// ?make each word capitalized
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
console.log(capitalize("raKib"));

// ?Capitalize each word of a sentence
function toJadenCase(str) {
  let words = str.split(" "); // split(" ") will turn string to array
  let output = [];
  for (let word of words) {
    output.push(capitalize(word)); // add each word capitalized to output as array element
  }
  return output.join(" "); // join(" ") will turn array to string
}
console.log(toJadenCase("kill me heal me"));
console.log(toJadenCase("this world shaLL know paiN"));
