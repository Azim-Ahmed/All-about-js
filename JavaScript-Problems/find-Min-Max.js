//! with spread operator
function highestNumber(nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return `Max number is: ${max}\nMin number is: ${min}`;
}
console.log(highestNumber([10, 20, 6, 909, 6]));
console.log(highestNumber([10, 20, 6, 99, 2, -1]));

//! with loop

function findMaxMin(nums) {
  let max = nums[0];
  let min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      max = nums[i];
    }
    if (nums[i] <= min) {
      min = nums[i];
    }
  }
  return `${max} is the max number\n${min} is the min number`;
}
console.log(findMaxMin([10, 20, -5, 89]));
console.log(findMaxMin([10, -1, 20, -5, -6, 89]));
console.log(findMaxMin([-10, -1, -20, -5, -6, -89]));
