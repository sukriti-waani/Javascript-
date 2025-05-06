// let myName = "Sukriti     ";
// let myHobby = "Badminton    ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Sukriti = function () {
  console.log(`Sukriti is present in all objects`);
};

Array.prototype.heySukriti = function () {
  console.log(`Sukriti says hello`);
};

// heroPower.Sukriti();
myHeros.Sukriti();
myHeros.heySukriti();
// heroPower.heySukriti(); // It has no  access to heroPower

// Inheritance

const User = {
  name: "Sukriti",
  email: "suk1234@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,  // Now TASupport can access isAvailable via prototype chain
};

Teacher.__proto__ = User;  // Sets the prototype of Teacher to User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);  // Another way (modern syntax) to set prototype.

let anotherUsername = "SukritiWaani    ";

String.prototype.trueLength = function () {
  console.log(`${name}`);
  console.log(`{True length is : ${this.trim().length}}`); // trims whitespace from both ends and returns the character count.
};

anotherUsername.trueLength();
"Sukriti".trueLength();
"works".trueLength();
