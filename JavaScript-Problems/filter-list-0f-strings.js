//! a program that filters a list of strings and returns a list with only your friends name in it.
/*If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not... */
function friend(friends) {
  let output = [];
  let real = friends.filter((item) => item.length === 4);
  real.forEach((item) => {
    output.push(item);
  });

  return output;
}
console.log(friend(["Ryan", "Kieran", "Mark"]));
console.log(friend(["Love", "Your", "Face", "1", "killer", "123"]));
