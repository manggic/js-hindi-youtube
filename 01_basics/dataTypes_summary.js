// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Non-Primitive
// 3 types : Object, Array, Function

/*
JavaScript is a dynamically typed language.
In a dynamically typed language like JavaScript, variable types are determined and checked at runtime rather than at compile-time. 
This means that you can assign values of different types to the same variable without explicitly declaring its type.
*/

const id = Symbol(123)

const anotherId = Symbol(123)


console.log(id, anotherId);