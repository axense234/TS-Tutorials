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
enum Role {
  ADMIN = "AUTHOR",
  READ_ONLY = 5,
  AUTHOR = "ADMIN",
}

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
let favoriteActivities: string[];
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
