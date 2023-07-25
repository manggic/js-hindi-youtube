// Way 1 to create promise
const promiseOne = new Promise(function (resolve, reject) {
  // async call
  // DB call, cryptography, network call

  setTimeout(() => {
    console.log("Async operation done");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("PROMISE RESOLVED");
});

// Way 2 to create promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    setTimeout(function () {
      resolve();
    }, 2000);
  }, 1000);
}).then(function () {
  console.log("Promise is resolved");
});

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@gmail.com" });
  }, 3000);
});

promiseTwo.then(function (user) {
  console.log(user);
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (error) {
      reject("ERROR: Something went wrong!");
    } else {
      resolve({ username: "coding", surname: "programming" });
    }
  }, 2000);
});

promiseThree
  .then(function (user) {
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("THIS FOR SURE WILL RUN");
  });

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (error) {
      reject("ERROR: Js went wrong!");
    } else {
      resolve({ language: "javascript", library: "react" });
    }
  }, 2000);
});

async function consumePromise() {
  try {
    const res = await promiseFour;

    console.log("res", res);
  } catch (error) {
    console.log(error);
  }
}

consumePromise();

// using async await
const promiseFive = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("res", await res.json());
};

// using then & catch
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log("response data from api call", res);
  })
  .catch((err) => {
    console.log("error", err);
  });

promiseFive();
