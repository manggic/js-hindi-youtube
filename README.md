# js-hindi-youtube (30)

* JavaScript original documentation link : https://tc39.es/ecma262/
* JavaScript is a synchronous single-threaded language

### JS is single thread or multiple thread ?
```
JavaScript (JS) is primarily a single-threaded programming language. This means that it executes one task at a time in a sequential manner. The single thread in JavaScript is responsible for executing the code and handling events, including user interactions, timers, and asynchronous operations.

However, JavaScript also supports concurrent execution through the concept of an event loop and non-blocking operations. It utilizes callback functions, promises, and async/await syntax to handle asynchronous tasks efficiently. When an asynchronous operation is encountered, such as fetching data from a server or performing a time-consuming task, JavaScript delegates the operation to another thread, typically managed by the browser or the underlying runtime environment.

These additional threads handle the time-consuming tasks, and once they are completed, they notify the main JavaScript thread through callbacks or promise resolutions. The event loop then places these callbacks or resolved promises in the execution queue, and the main thread picks them up when it's idle.

So, while JavaScript itself is single-threaded, it can leverage multiple threads through the use of asynchronous operations and concurrency mechanisms provided by the browser or the runtime environment.
```

### During async/await operation, does the main thread get blocked ?

```
When an async/await operation is encountered in JavaScript, the main thread does not keep itself idle and can continue executing other tasks. The async/await syntax provides a way to write asynchronous code in a more synchronous and sequential manner, but it doesn't block the main thread.

When an async function is called, it returns a promise immediately, allowing the main thread to move on to the next task in the code. If the async function contains an await expression, it pauses the execution of the function until the awaited promise is resolved. However, during this waiting period, the main thread is free to execute other code and tasks.

While the await keyword suspends the execution of the async function, it does not block the entire JavaScript thread. Instead, it allows the event loop to process other events and execute other tasks that are ready to be executed. Once the awaited promise is resolved, the async function resumes execution from where it left off.

This asynchronous behavior of async/await allows JavaScript to efficiently handle multiple tasks concurrently without blocking the main thread and improving responsiveness in scenarios where there are time-consuming operations like network requests or file operations.
```


### Execution Context
![Alt text](/images/01_Execution_Context.png)
![Alt text](/images/02_Execution_Context.png)


## Iteration through object can be done by following ways
```
let obj = {
  color : "red",
  state:"maharashtra"
}

for(let [key, values] of Object.entries(obj)){
  console.log(key , values)
}

for(let i in obj){
  console.log(i, obj[i])
}

output:
color red
state maharashtra
```

## Methods we can use for looping Array 

```
let arr = ['js','py','cpp']

for(let i in arr){
  console.log(arr[i])
}

for(let i of arr){
console.log(i)
}

output:
js
py
cpp
```


* <b> IMPORTANT TO NOTE</b>

1) for of loop can only be used for an iterator ( for ex: array, string )
2) we are not using var because if we initialize any variable with var inside a scope. It is still available outside which create confusion.
3) In browser, global object is Window hence this refers to browser window object.
4) These are falsy values: false, 0, -0, "", null, undefined, NaN
5) forEach() always returns undefined
6) To return an object from arrow function, const arr = () => ({playerName :"ronaldo"})
