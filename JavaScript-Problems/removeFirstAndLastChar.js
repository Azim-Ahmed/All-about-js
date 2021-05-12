function removeChar(str) {
  return str.substring(1, str.length - 1, -1);
  // return str.slice(1, -1);
}
console.log(removeChar("eloquent"));
console.log(removeChar("pain"));
