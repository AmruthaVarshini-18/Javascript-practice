const student = {
  name: "Amrutha Varshini",
  age: 20,
  Cgpa: 9.2,
  isPlaced: false,
  college: "Pragati Engineering College",
};
console.log(student);
console.log(typeof student);
console.log(student.name);
console.log(student["name"]);
console.log(student["age"] + student["age"] + 1);
student["name"] = "Amrutha";
console.log(student.name);
