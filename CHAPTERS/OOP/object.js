function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};
createUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

const hey = new createUser("hey", 50);
const hello = new createUser("hello", 200);

hey.printMe();


/*
Here's what happens behind the scenes when the new keyboard is used : 

A new object is created : The new keyboard initiates the creation of new JavaScript object.

A prototype is linked : The newly created object gets linked to the prototype of the constructor function. This means that it has access to properties and methods of the constructor's prototype.

The constructor is called : The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, as the return value.

The new object is returned : After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly craeted object is returned.


*/