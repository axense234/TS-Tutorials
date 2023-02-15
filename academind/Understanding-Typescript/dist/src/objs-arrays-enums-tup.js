"use strict";
// Object example(type inference)
/*const person:{
 name:string
 age:number
} = {
 name:"Testing",
 age:100
}
*/
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   // Tuple type
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// Enum(in js kinda)
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// Enum
var Role;
(function (Role) {
    Role["ADMIN"] = "AUTHOR";
    Role[Role["READ_ONLY"] = 5] = "READ_ONLY";
    Role["AUTHOR"] = "ADMIN";
})(Role || (Role = {}));
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// Tuple assignments
// tuple.push() is an exception to the rule
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0,'admin','user']
// Array assignments
let favoriteActivities;
favoriteActivities = ["Sports"];
// String intellisense for type string
for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}
console.log(person.name);
// ENUM
if (person.role === Role.AUTHOR) {
    console.log(`is author`);
}
