//traversing all the elements in a array
let marks = [96, 86, 92, 76, 89];
//printing all elements of array using for loop
for (let i = 0; i <= marks.length; i++) {
  console.log(marks[i]);
}
//while loop
let j = 0;
while (j != marks.length) {
  console.log(marks[j]);
  j++;
}

//for-of loop
for (let k of marks) {
  console.log(k);
}
