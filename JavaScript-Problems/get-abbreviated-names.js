function abbrevName(name) {
  let result = name.match(/\b(\w)/g);
  let initial = result.join(".");
  return initial.toUpperCase();
}
console.log(abbrevName("zakir hossain"));
console.log(abbrevName("rakib rahman"));
