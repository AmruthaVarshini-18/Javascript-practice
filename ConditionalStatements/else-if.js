let marks = prompt("Enter your marks to know your Grade");
let grade;
if (marks >= 90) {
  grade = "A";
  console.log(grade);
} else if (marks >= 70) {
  grade = "B";
  console.log(grade);
} else if (marks >= 60) {
  grade = "C";
  console.log(grade);
} else if (marks >= 35) {
  grade = "D";
  console.log(grade);
} else {
  console.log("Fail");
}
