"use strict";
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
let favoriteActivities;
favoriteActivities = ["Sports"];
for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}
console.log(person.name);
if (person.role === Role.AUTHOR) {
    console.log(`is author`);
}
