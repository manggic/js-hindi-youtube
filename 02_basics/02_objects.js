
// constructor - singleton    Object.create()
// object literals



// The Object.assign() static method copies all properties from one or more source objects to a target object.
// It returns the modified target object.
let obj1 = { match: 'final', player:'virat' }
let obj2 = { score: 20, player: 'ronaldo' }
let finalObj = Object.assign(obj1, obj2)

console.log(finalObj)  //   { match: "final", player: "ronaldo", score: 20 }

console.log(Object.entries(obj1)); // [ [ 'match', 'final' ], [ 'player', 'virat' ] ]

