// *********** Class ************

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   getPassword() {
//     return this.password;
//   }
// }

// const chai = new User("chai", "chai@fb.com", "wertttasdasdasdasdasd");

// console.log(chai.getPassword());

// *********** function ************

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.getPassword = function () {
  return this.password;
};

const tea = new User("tea", "tea@gmail.com", "1212sadasdasdasd");

console.log(tea.getPassword());
