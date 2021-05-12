function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let one = age1 * age1;
  let two = age2 * age2;
  let three = age3 * age3;
  let four = age4 * age4;
  let five = age5 * age5;
  let six = age6 * age6;
  let seven = age7 * age7;
  let eight = age8 * age8;

  let total = one + two + three + four + five + six + seven + eight;

  let sqrt = Math.sqrt(total);

  return Math.floor(sqrt / 2);
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

//! functional Programming
function predictAge2(age1, age2, age3, age4, age5, age6, age7, age8) {
  let arr = [age1, age2, age3, age4, age5, age6, age7, age8];
  return Math.floor(
    Math.sqrt(arr.map((a) => a * a).reduce((b, c) => b + c)) / 2
  );
}
console.log(predictAge2(65, 60, 75, 55, 60, 63, 64, 45));
