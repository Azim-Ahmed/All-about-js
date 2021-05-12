function multiTable(number) {
  let output = "";

  for (let i = 1; i <= 10; i++) {
    let result = i * number;
    output += `${i} * ${number} = ${result}${i < 10 ? "\n" : ""}`;
  }

  return output;
}

console.log(multiTable(5));
