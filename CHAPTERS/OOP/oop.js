//  Javascript is a prototype-based language

const user = {
  username: "Sukriti",
  loginCount: 4,
  signedIn : true,

  getUserDetails: function() {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructors
// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function() {
    console.log(`Welcome ${this.username}`);
  }

  return this; // defined implicitly
}

// const userOne = User("Waani", 12, true);
// const userTwo = User("Sukriti", 10, false);
// console.log(userOne); // Here userTwo will override the userOne value without printing

const userOne = new User("Waani", 12, true);
const userTwo = new User("Sukriti", 10, false);
// console.log(userOne); 
// console.log(userTwo); 
console.log(userOne.constructor); 


// new keyword -- 
  // at first new(empty) object is created which is called instance.
  // a constructor function is called because of the new keyword. It packs all our arguments etc. inside it and give it to us.
  // this keyword whatever we have written , they all get injected inside it 
  // We will find it inside a function