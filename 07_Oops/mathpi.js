const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }

const rapper = {
  name: "emiway",
};

console.log(Object.getOwnPropertyDescriptor(rapper, "name"));
// {
//     value: 'emiway',
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

Object.defineProperty(rapper, "name", {
  writable: false,
  enumerable: false,
});

rapper.name = "raftaar";

console.log(Object.getOwnPropertyDescriptor(rapper, "name"));
// {
//     value: 'emiway',
//     writable: false,
//     enumerable: false,
//     configurable: true
// }
