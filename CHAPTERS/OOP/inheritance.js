class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const teacher1 = new Teacher("John", "john12@example.com", "123");
teacher1.addCourse();

const user1 = new User("user1");
// user1.addCourse(); // Error: Does not have access to addCourse
user1.logMe(); // Output: Username is user1

// console.log(teacher1 === Teacher) // Error: Cannot read property 'prototype' of undefined

console.log(teacher1 instanceof Teacher) // Output: true
console.log(teacher1 instanceof User) // Output: true
