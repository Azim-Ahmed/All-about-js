function SequenceSum(n) {
  if (n < 0) {
    return `${n}<0`;
  } else if (n === 0) {
    return `${n}=0`;
  }
  let output = null;
  let res = "";
  for (let i = 0; i <= n; i++) {
    res += "+" + i;
    output += i;
  }
  let sequence = res.substring(1);
  return `${sequence} = ${output}`;
}
console.log(SequenceSum(6));
console.log(SequenceSum(15));
console.log(SequenceSum(0));
console.log(SequenceSum(-15));
