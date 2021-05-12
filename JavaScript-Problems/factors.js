//!  factors are the integers that are multiplied together to find other integers. For example, 6 × 5 = 30. In this example, 6 and 5 are the factors of 30. 1, 2, 3, 10, 15 and 30 would also be factors of 30.

const factor = (n) => {
  let k = [];
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      k = [...k, i];
    }
  }
  console.info(`${n} has the following factors: ${k.join(", ")}`);
};
factor(50);
factor(100);
