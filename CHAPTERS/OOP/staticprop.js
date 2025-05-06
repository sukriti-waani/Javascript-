class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() { // static method
    return `123;`
  }
}

const suk = new User('Sukriti');
console.log(suk.createId()); 

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email;
  }
}

const iphone = new Teacher("iphone", "ip@phone.com")
iphone.logMe();
console.log(iphone.createId()); // cannot access static method from subclass