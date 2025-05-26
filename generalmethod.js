const person1={
    firstname: "ishika",
    lastname: "khade",
    age: 20,
    eyecolor: "blue",
};
const person2 = {firstName: "Anne",lastName: "Smith",age: 20,eyecolor: "blue"};
Object.assign(person1,person2);
let text = Object.entries(person1);
let text1 = Object.entries(person2);
console.log(text);
console.log(text1);
