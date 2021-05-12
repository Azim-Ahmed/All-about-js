function removeExclamationMarks(s) {
  let str = s.replace(/!/g, "");
  return str;
}
console.log(removeExclamationMarks("hello world!"));
