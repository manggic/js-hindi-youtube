// ****************** function example 1 ************

// on execution of this fun it's context along with all the property gets removed from call stack
function setUsername(username) {
  // this keyword of setUsername will take reference of user this keyword
  this.username = username;
}

// here we r passing our this and tells setUsername to add property username inside our this
function user(username, email, password) {
  this.email = email;
  this.password = password;
  setUsername.call(this, username);
}

const chai = new user("chai", "chai@gamil.com", "12345");

console.log(chai);

// ****************** function example 2 ************

function greet() {
  // this = {animal:"cats", sleepDuration: "12 and 16 hours"}
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
  // this = { animal : "cats", sleepDuration : "12 and 16 hours" }
};

// obj === this of greet() function
greet.call(obj);
