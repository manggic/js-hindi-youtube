const user = {
  username: "hitesh",
  age: 30,
  availableOnYoutube: true,

  getUsername: function () {
    return this.username;
  },
};

// console.log(user.username);

function User(username, isLoggedIn) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;
  return this;
}

// new keyword here will create new object or new instances
// a constructor function is called becauze of new keyword
// inject all parameters inside [this] object
const userOne = new User("manya", true);

const userTwo = new User("singh", false);

console.log(userOne);
