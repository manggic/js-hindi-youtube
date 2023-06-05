const user = {
  name: "manish",
  price: 299,

  welcomeMsg: function () {
    console.log(`${this.name}, welcome to our website`);
  },
};

user.welcomeMsg(); // manish, welcome to our website
user.name = "sameer";

user.welcomeMsg(); // sameer, welcome to our website

console.log(this); // {} - Here this refers to node environment



function chai() {
  let username = "himesh";
  console.log(this.username); // undefined
}
/*
In the code you provided, the this keyword is used inside the chai function to access the property username.
However, since username is a local variable defined within the function, it is not accessible through this.username.
The this keyword in JavaScript typically refers to the context of the current execution.
In the case of standalone functions like chai, where the function is not a method of an object or 
explicitly bound to a specific context, the value of this will be the global object 
(window in a browser or global in Node.js) in non-strict mode. In strict mode, this will be undefined.
*/
chai();



const returnObj = () => ({singer:"arijit"}) // to return object from an arrow function

console.log(returnObj());
