function XO(str) {
  str.split(" ");
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      xCount++;
    } else if (str[i].toLowerCase() === "o") {
      oCount++;
    }
  }
  if (oCount === xCount) {
    return true;
  }
  return false;
}
console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooXxm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
