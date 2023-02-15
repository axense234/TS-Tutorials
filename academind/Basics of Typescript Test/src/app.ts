let age = 12;
let firstName = "John";
let secondName = "Smilga";
let married = false;
let role: [string, number];

enum Role {
  ADMIN,
  USER,
  TEST_USER,
}

const ConstructProfile = (
  age: number,
  firstName: string,
  secondName: string,
  married: boolean
) => {
  console.log(
    `Hello i am ${firstName} ${secondName},i am ${age} years old and ${
      married ? "i am married." : "i am not married."
    }`
  );
  return {
    age,
    firstName,
    secondName,
    married,
  };
};

const Profile = ConstructProfile(age, firstName, secondName, married);
console.log(Profile);

const UpdateProfile = (key: string, value: any) => {
  Profile[key] = value;
  console.log(Profile);
};

const profile: {
  age: number;
  username: string;
  loggedIn: boolean;
  role: Role;
} = {
  age: 19,
  username: "Nigga",
  loggedIn: true,
  role: Role.ADMIN,
};

console.log(profile);
