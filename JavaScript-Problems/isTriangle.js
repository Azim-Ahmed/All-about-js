function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return "It is a Valid Triangle";
  }
  return "It is an invalid Triangle";
}
console.log(isTriangle(10, 20, 40));
console.log(isTriangle(10, 20, 20));
