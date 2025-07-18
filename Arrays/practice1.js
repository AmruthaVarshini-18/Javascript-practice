//For a given array with marks of students =[85,97,44,37,76,60]n.Find the average marks of entire class
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}
let average;
average = sum / marks.length;
console.log("The average of given marks is", average);
