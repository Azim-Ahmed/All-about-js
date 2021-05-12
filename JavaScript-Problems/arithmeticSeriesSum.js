//! Series 1 : 1+2+3+4...N
function series1(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i; //? incremented by 1
  }
  return sum;
}
console.log(series1(5));

//! Series 2 : 9+13+17...N

function series2(n) {
  let sum = 0;
  for (let i = 9; i <= n; i += 4) {
    sum += i; //? incremented by 4
  }
  return sum;
}
console.log(series2(13));

//! Series 3 : 2+4+6+8...N

function series3(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i; //? incremented by 2
  }
  return sum;
}
console.log(series3(5));

//! Series 4: 1+3+5+7...N

function series4(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i; //? incremented by 2
  }
  return sum;
}
console.log(series4(5));

//! Series 5: 10 + 9 +8 ... 1
//decreasing number series

function series5(n) {
  let sum = 0;
  for (i = 10; i >= n; i--) {
    sum += i;
  }
  return sum;
}
console.log("Series 5:", series5());
