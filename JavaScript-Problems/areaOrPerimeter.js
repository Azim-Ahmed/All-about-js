//! If it is a square, return its area. If it is a rectangle, return its perimeter.
const areaOrPerimeter = function (l, w) {
  //   if (l === w) {
  //     return l * w;
  //   }
  //   return 2 * l + 2 * w;
  return l === w ? l * w : 2 * l + 2 * w;
};
console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));
