function setUsername(username) {
  // Complex database calls
  this.username = username
  console.log("called")
}

function createUser(username, email, password) {
  setUsername.call(this, username);  //  .call(this, username) invokes setUsername with the current context (this) inside createUser

  this.email = email;
  this.password = password
}

const user = new createUser("Suk", "suk@gmail.com", "123456");   //  createUser(...) is being invoked using new
console.log(user)