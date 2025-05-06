// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);  //Math.PI is a non-writable constant — even if we try to change its value, it won’t update.

// const descripter = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descripter);

const product = {
  name: "Charger",
  price: 1000,
  isAvailable: true,

  orderProduct: function () {
    console.log("Cannot buy");
  },
};

// console.log(Object.getOwnPropertyDescriptor(product)); //undefined  because Object.getOwnPropertyDescriptor() requires both:
// The object
// The property name

console.log(Object.getOwnPropertyDescriptor(product, "name"));

Object.defineProperty(product, "name", {
  // writable: false,
  enumerable: false, // enumerable: false → means "name" will not show up in for...in loops or Object.entries()
});

// console.log(Object.getOwnPropertyDescriptor(product, "name"));

for (let [key, value] of Object.entries(product)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}

/*This loop:

Uses Object.entries(product) to iterate over enumerable properties.

"name" will be excluded because it’s now enumerable: false.

Skips any value that is a function (like orderProduct).

Logs price : 1000 and isAvailable : true.  */

/* 
Object.defineProperty() gives fine control over a property.
enumerable: false hides properties from loops.
Object.getOwnPropertyDescriptor() is useful to inspect property flags like writable, enumerable, and configurable. 
*/
