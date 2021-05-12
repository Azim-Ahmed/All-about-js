function sumOfStrings(a, b) {
  let result = parseInt(a) + parseInt(b);

  if (a === "" && b === "") {
    a = "0";
    b = "0";
    result = parseInt(a) + parseInt(b);
  }
  if (a === "") {
    a = "0";
    result = parseInt(a) + parseInt(b);
  } else if (b === "") {
    b = "0";
    result = parseInt(a) + parseInt(b);
  }

  return result.toString();
}
console.log(sumOfStrings("20", "30"));
console.log(sumOfStrings("", "30"));
console.log(sumOfStrings("2", ""));
console.log(sumOfStrings("", ""));
