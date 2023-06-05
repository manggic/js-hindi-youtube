// Everything in javascript happens inside an Execution Context


/*
It has two component in it
1) memory creation (variable environment) : variable and function are just stored in it as key:value pair.
Initially all variable in these phase will be undefined.
In case of function it literally stored the complete code inside the function
2) code (Thread of execution) : code is executed one line at a time in a specific manner.

Whenever a function is invoke a new execution context is been created
The new created EC will be deleted once it returns the value to main EC
*/

// Call stack is simple a stack of all the Execution context (At the bottom there will always be global execution context)
// Call stack maintains the order of execution of execution context