/*
Create a function that takes 2 arguments, an array and an object. 
The array will contain 2 or more elements that, when combined with adjoining spaces, 
will produce a person's name. The object will contain two keys, "title" and "occupation", 
and the appropriate values. Your function should return a greeting that uses the person's full name, 
and mentions the person's title.

Example:
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

PEDAC
=====
Problem(Implicit rule, mental model)
------------------------------------
  (1) Input: ["Kumar", "S", "Tanmay"] , {title: "Hard worker", occupation: "Builder"}
  (2) Ouput: Hello, Kumar S Tanmay! Nice to have Hard worker Builder around.
  (3) Input: ["Shilpam", "Sood"], {title: "Experienced", occupation: "Architect"}
  (4) Output: Hello, Shilpam Sood! Nice to have Experienced Architect around.
  (5) Implicit rule: Array will have not have less than two elements. 
  (6) Mental model: Concatenate all elements of the array and get values of all the keys of the object
  in another array. Concatenate all the elements of the array from object. Print both the concatenated
  strings in the console as desired.

Example:
  (1) Input: ["Kumar", "S", "Tanmay"] , {title: "Hard worker", occupation: "Builder"}
  (2) Ouput: Hello, Kumar S Tanmay! Nice to have Hard worker Builder around.
  (3) Input: ["Shilpam", "Sood"], {title: "Experienced", occupation: "Architect"}
  (4) Output: Hello, Shilpam Sood! Nice to have Experienced Architect around.
Data Structure:
  Input: array and object
  Ouput: Concatenate elements of array with spaces. Concatenate the keys of object.
Algorithm:
  (1) Produce person's name by joining the elements of the array
  (2) concatenate the keys of the objects in another variable, occupation
  (3) Print the name and occupation in console
*/

function greetings(nameArr, occupationObj) {
  let name = "";
  let service = occupationObj.title + " " + occupationObj.occupation;

  for (let index = 0; index < nameArr.length; index++) {
    name = name + nameArr[index] + " ";
  }
  console.log(`Hello, ${name.trim()}! Nice to have ${service} around.`);
}

greetings(["Kumar", "S", "Tanmay"], {title: "Experienced", occupation: "Builder"});
greetings(["Shilpam", "Sood"], {title: "Experienced", occupation: "Architect"})