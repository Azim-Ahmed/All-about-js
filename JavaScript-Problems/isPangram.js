const str = "We promptly judged antique ivory buckles for the next prize";
const { length } = str;

const isPangram = (str = "") => {
  str = str.toLowerCase();
  const { length } = str;
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphaArr = alphabets.split("");
  for (let i = 0; i < length; i++) {
    const el = str[i];
    const index = alphaArr.indexOf(el);
    if (index !== -1) {
      alphaArr.splice(index, 1);
    }
  }
  return !alphaArr.length;
};
