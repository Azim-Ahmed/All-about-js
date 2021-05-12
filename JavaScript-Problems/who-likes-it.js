function likes(names) {
  switch (names.length) {
    case 0:
      return "No one likes this";
    case 1:
      return `${names[0]} likes it`;
    case 2:
      return `${names[0]} and ${names[1]} likes it`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} likes it`;
  }
  if (names.length > 3) {
    return `${names[0]},${names[1]} and ${
      names.slice(2).length
    } other likes it`;
  }
}
console.log(likes([]));
console.log(likes(["Rakib", "Zakir"]));
console.log(likes(["Rakib", "Zakir", "Ash"]));
console.log(likes(["Rakib", "Zakir", "Ash", "ohi", "pain"]));
console.log(likes(["Rakib", "Zakir", "Ash", "ohi", "pain", "nagato", "obito"]));
