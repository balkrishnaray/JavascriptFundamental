const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 consumed");
});

const PromiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("datas");
    resolve({ name: "Balkrishna", email: "Balkrishna@gmail.com" });
  }, 1000);
});

PromiseThree.then(function (data) {
  console.log(data);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Bala", password: "123" });
    } else {
      reject("Error:Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((result) => {
    console.log(result);
    return result.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("Error:js went wrong");
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

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(response);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
