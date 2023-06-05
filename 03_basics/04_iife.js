

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
