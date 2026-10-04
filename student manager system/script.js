let students = [
    { name: "Heet", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Amit", marks: 91 },
    { name: "Priya", marks: 64 }
];


for (let student of students) {
    console.log(`Name: ${student.name}, Marks: ${student.marks}`);
}


students.push({
    name: "Raj",
    marks: 40
});


let topstudent = students[0];

for (let student of students) {
    if (student.marks > topstudent.marks) {
        topstudent = student;
    }
}

console.log("Top student:", topstudent.name);
console.log("Marks:", topstudent.marks);

let passed = 0;

for (let student of students) {
    if (student.marks >= 50) {
        passed++;
    }
}

console.log("Passed students:", passed);
console.log("Total students:", students.length);