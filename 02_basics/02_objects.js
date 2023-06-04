
// constructor - singleton    Object.create()
// object literals



// The Object.assign() static method copies all properties from one or more source objects to a target object.
// It returns the modified target object.
let obj1 = { match: 'final', player:'virat' }
let obj2 = { score: 20, player: 'ronaldo' }
let finalObj = Object.assign(obj1, obj2)

console.log(finalObj)  //   { match: "final", player: "ronaldo", score: 20 }

console.log(Object.entries(obj1)); // [ [ 'match', 'final' ], [ 'player', 'virat' ] ]



// A frozen object can no longer be changed: new properties cannot be added, 
// existing properties cannot be removed, their enumerability, configurability,
// writability, or value cannot be changed, and the object's prototype cannot be re-assigned. 
Object.freeze(obj1)


// The Object.fromEntries() static method transforms a list of key-value pairs into an object.
let arrays = [["name", 'manish'],['age', 20]]
console.log(Object.fromEntries(arrays)); // { name: 'manish', age: 20 }

// The Object.hasOwn() method returns true if the specified property is a direct property of the object — 
// even if the property value is null or undefined.
// The method returns false if the property is inherited, or has not been declared at all. 
console.log( Object.hasOwn(obj1,'match') );  // true
console.log( Object.hasOwn(obj1,'toString') ); // false


// The Object.is() static method determines whether two values are the same value.
console.log(Object.is('1', 1)); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(-0, 0));  //  false
console.log(Object.is({}, {}));  // false
Object.is([], []); // false

// The Object.isFrozen() static method determines if an object is frozen.
Object.isFrozen(obj1) 

console.log(Object.keys({count: 10, isClicked: false })); // [ 'count', 'isClicked' ]
console.log(Object.values({ accountStatus:'active', isLoggedIn: true })); // [ 'active', true ]
