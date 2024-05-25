/*Assignment 2:Manipulating an Array: Rearranging Words
Objective:
Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
Steps:
1. Scrambled Array:
o Start with an array of elements in a scrambled order, like:
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
• Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to: 
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or 
create temporary arrays).
• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC".*/

// 1. Start with the scrambled array:

const scrambledArray: any = [
  "student",
  "of",
  true,
  123,
  "am",
  "a",
  "GIAIC",
  "I",
];

// Convert non-string elements to strings

scrambledArray[2] = String(scrambledArray[2]);
scrambledArray[3] = String(scrambledArray[3]);

// Rearrange the elements in the correct order

const rearrangedArray: string[] = [];

rearrangedArray.push(scrambledArray[7]);
rearrangedArray.push(scrambledArray[4]);
rearrangedArray.push(scrambledArray[5]);
rearrangedArray.push(scrambledArray[0]);
rearrangedArray.push(scrambledArray[1]);
rearrangedArray.push(scrambledArray[6]);

// Combine the elements into a single string

const modifiedSentence: string = rearrangedArray.join(" ");

console.log(modifiedSentence);
