//Prompt the user to enter their full name. generate a username for them based on the input.strat username with @,followed their fullname& ending with the full length Ex:- username='amrutha' and output is '@amrutha7'

let start = "@";
let name = prompt("Enter your full name");
let end = name.length;
console.log(start + name + end);
