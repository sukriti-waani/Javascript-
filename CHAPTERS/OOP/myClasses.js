// class user {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const input = new user("john", "john@example.com", "password123");
// // console.log(input.encryptPassword()); // outputs: password123abc
// console.log(input.changeUsername()); // outputs: JOHN


// Behind the scene
function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function() {
  return `${this.password}abc`;
}
User.prototype.changeUsername = function() {
  return `${this.username.toUpperCase()}`;
}

const input1 = new User("defg","def@gmail.com","789")

consolelog(input1.encryptPassword()); 
console.log(input1.changeUsername());