"use strict";
let age = 12;
let firstName = "John";
let secondName = "Smilga";
let married = false;
let role;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["TEST_USER"] = 2] = "TEST_USER";
})(Role || (Role = {}));
const ConstructProfile = (age, firstName, secondName, married) => {
    console.log(`Hello i am ${firstName} ${secondName},i am ${age} years old and ${married ? "i am married." : "i am not married."}`);
    return {
        age,
        firstName,
        secondName,
        married,
    };
};
const Profile = ConstructProfile(age, firstName, secondName, married);
console.log(Profile);
const UpdateProfile = (key, value) => {
    Profile[key] = value;
    console.log(Profile);
};
const profile = {
    age: 19,
    username: "Nigga",
    loggedIn: true,
    role: Role.ADMIN,
};
console.log(profile);
