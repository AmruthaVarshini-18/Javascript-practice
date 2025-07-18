/*Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value*/
let random = 25;
let usernum = prompt("Guess a number which equals to my choice");
while (usernum != random) {
  usernum = prompt("Sorry! It is not correct choose another number");
}
console.log("Congrtaulations!!! It is Correct");
