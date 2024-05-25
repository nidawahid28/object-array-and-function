"use strict";
/*Assignment 4: Student List Organizer
Learning Objective: Get comfortable with data structures (objects and arrays) and basic
functions in TypeScript.
Tasks:
1. Student Data: The provided code defines an interface named Student that describes
student information like name, senior status (true/false), and whether they've completed
their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the
Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors
and have completed their assignments.
o Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have
a function that removes students who haven't completed their assignments
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)?*/
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Create students array
let students = [
    { name: "Qasim", isSenior: true, hasCompletedAssignments: true },
    { name: "Ali", isSenior: false, hasCompletedAssignments: false },
    { name: "Hashim", isSenior: false, hasCompletedAssignments: true },
    { name: "Hamza", isSenior: true, hasCompletedAssignments: true },
    { name: "Aleena", isSenior: false, hasCompletedAssignments: false }
];
//3. Implement function to find senior students with completed assignments
function seniorStudentsWithAss(students) {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}
//4. find senior students with completed assignments
let seniorStudentsWithAssignments = seniorStudentsWithAss(students);
console.log("Senior students with completed assignments:", seniorStudentsWithAssignments);
//5.Implement a function to update class list and removing students who have not completed assignments
function updateClassList(students) {
    return students.filter(student => student.hasCompletedAssignments);
}
// 6. Testing the function to update the class list
students = updateClassList(students);
console.log("Updated class list of students who has completed their assignments", students);
