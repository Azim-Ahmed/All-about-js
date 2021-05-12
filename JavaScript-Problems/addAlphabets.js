function wordsToMarks(string) {
  const f = [...string].reduce((t, l) => t + l.charCodeAt`` - 96, 0);
  return f;
}
console.log(wordsToMarks("friendship"));
console.log(wordsToMarks("pain"));
console.log(wordsToMarks("love"));
