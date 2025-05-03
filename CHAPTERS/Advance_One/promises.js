//  A promise is an object representing the eventual completion or failure of an asynchronous operation.

// Creation of promise
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // Database calls, cryptography, network calls
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

// Consumption of promise
// .then() has connection directly connection with resolve
// .then() handles the resolved promise.
promiseOne.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

// parametrized resolve
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Sukriti", email: "waani@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Sukriti", password: "1234" });
    } else {
      reject("ERROR : Something went wrong");
    }
  }, 1000);
});

// Promise consumption
promiseFour
  .then((user) => {
    // If resolved, it logs the user object and returns user.username for the next .then() to use
    console.log(user);
    return user.username;
  })
  .then((username) => {
    // This .then() receives the returned username from the previous .then() and logs it.
    console.log(username);
  })
  .catch(function (error) {
    // .catch() handles any errors from the promise chain.
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected")); // .finally() runs no matter what, whether the promise is resolved or rejected.

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR : JS went wrong");
    }
  }, 1000);
});
async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// fetch() is used to make a network request to the provided URL.
//  await tells JavaScript to wait until the fetch request is complete and the response is returned

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://    jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();

fetch("https.//jsonplaceholder.typicode.com/users")
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
})
.catch((error) => console.log(error))