

// Immediately Invoked function expressions ( IIFE )

/*
To avoid global scope variable or other declaration which might pollute the inner scope, 
we use IIFE
*/



(function(){
    console.log("Calling IIFE");
})();  // here semicolon is mandatory


((props) => {
    console.log(`${props}`);
})('2nd call to IIFE')




// The nullish coalescing (??) operator is a logical operator that returns 
// its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

console.log(null ?? 20);  // 20
console.log(undefined ?? 'manish');  // "manish"