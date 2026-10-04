let marks = [78, 45, 92, 61, 33, 88];

for(let mark of marks){
    console.log(mark);
}

let highest=marks[0];

for (let mark of marks){
    if (mark > highest){
        highest = mark;
    }       
}
console.log("Highest mark: " + highest);

let lowest=marks[0];

for (let mark of marks){
    if (mark < lowest){
        lowest = mark;
    }       
}
console.log("Lowest mark: " + lowest);

let passed=0;
for (let mark of marks){
    if (mark>=50){
        passed++;
    }
}
console.log("Number of students passed: " + passed);    
  