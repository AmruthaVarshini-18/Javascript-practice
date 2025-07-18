//loops

//for loop
let i;
for (i = 0; i <= 5; i++) {
  console.log("I LOVE JAVASCRIPT");
}
console.log(i);

//while loop
let idx = 0;
while (idx > 7) {
  console.log("JAVA SCRIPT DEVELOPER");
  idx++;
}

//do-while loop
do {
  console.log("This is Javascript code");
  i++;
} while (i < 12);

//for-of loop
str = "hello";
for (let val of str) {
  console.log(val);
}

//for-in loop
let info = { name: "ammu", age: 20, cgpa: 9.2 };
for (let key in info) {
  console.log(key, info[key]);
}
