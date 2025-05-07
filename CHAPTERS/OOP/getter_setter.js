class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    // When we access email, this getter runs
    return this._email.toUpperCase(); // It returns the internal variable _email in uppercase
  }

  set email(value) {
    this._email = value; // When we assign to email, this setter stores the value in _email
  }

  get password() {
    // return this._password.toUpperCase();
    return `${this._password}suk`; // if anyone tries to get the password, it will be modified
  }

  set password(value) {
    // this._password = value.toUpperCase();
    this._password = value;
  }
}

const u1 = new User("user1@ex.com", "123");
console.log(u1.email);

//    PROPERTIES OF GETTER SETTER

// function User1(email, password) {
//   this._email = email;
//   this._password = password;
// _email and _password are stored as internal properties (by convention, the underscore means "private-like")

//   Object.defineProperty(this, "email", {
//     get: function () {
//       return this._email.toUpperCase();
//     },
//     set: function (value) {
//       this._email = value;
//     },
//   });

//   Object.defineProperty(this, "password", {
//     get: function () {
//       return this._password.toUpperCase();
//     },
//     set: function (value) {
//       this._password = value;
//     },
//   });
// }

// const u2 = new User1("user1@ex.com", "123");
// console.log(u1.email);

//    OBJECT OF GETTER SETTER
const User2 = {
  _email: "user2@ex.com",
  _password: "123",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const u3 = Object.create(User2); // u3 is an object that uses User2 as its prototype
console.log(u3.email);
