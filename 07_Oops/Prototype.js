let myHeros = ["thor", "spiderman"];

let heroPower = {
  spiderman: "sling",
  thor: "hammer",

  getSpidermanPower: function () {
    console.log(`power of spiderman is ${this.spiderman}`);
  },
};

// adding this new manya property in global Object
Object.prototype.manya = function () {
  console.log("manya is available in all object");
};

// manya function is available to object heroPower
heroPower.manya();

// manya function is also available to Arry myHeros
myHeros.manya();

// heyHitesh property is been added to Array
Array.prototype.heyHitesh = function () {
  console.log("hitesh says hello to everyone");
};

myHeros.heyHitesh();

// heroPower.heyHitesh()   ERROR : heyHitesh is added in Array, it is not available in global object

// inheritance
const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

console.log(TASupport.isAvailable);
console.log(Teacher.name);

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TeachingSupport.makeVideo);

let plsTrimThisString = "TrimThis       ";

String.prototype.truelength = function () {
  console.log(`true length of string is ${this.trim().length}`);
};

plsTrimThisString.truelength();

"messi   ".truelength();
