/*Assignment 1: Building Your Friend List
Learning Objective: Practice working with objects and arrays in TypeScript to create a data 
structure.
Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName, 
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your 
friend list.*/

//  Define a type alias for a friend

type Friend = {
   firstName: string;
   lastName: string;
   id?: number; 
};

// 1. Define an object named people containing an empty array called friends

const people = {
    friends: [] as Friend[]
};

// 2. Create three separate objects, each representing a friend
const friend1: Friend = {
    firstName: "Sara",
    lastName: "Khan",
    id: 1
};

const friend2: Friend = {
    firstName: "Mehak",
    lastName: "Ali",
    id: 2
};

const friend3: Friend = {
    firstName: "Hina",
    lastName: "Ahmed",
    id: 3
};

// 3. Add these friends objects to the friends array within the people object

// Method 1
//  people.friends.push(friend1, friend2, friend3);

// Method 2
 people.friends.unshift(friend3);
 people.friends.unshift(friend2);
 people.friends.unshift(friend1);

// 4. Output the entire people object to console
console.log(people);
