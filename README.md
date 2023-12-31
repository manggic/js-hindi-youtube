# js-hindi-youtube (49 - closure)

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
```javascript
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

```javascript
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



```
const title = <h1 id="title" class="heading">Learning, DOM on chai aur code<span style="display: none">click here </span></h1>

title.innerHTML 
'Learning, DOM on chai aur code<span style="display: none">click here </span>'

title.textContent
'Learning, DOM on chai aur codeclick here'

title.innerText
'Learning, DOM on chai aur code'


let arrOfHTML = document.getElementsByClassName('list')
Its return HTMLCollection which can be converted to array by using Array.from() methods


let arrOfNodes = document.querySelectorAll('.list')
It return NodeList which has inbuild forEach property
```



```
<body>
    <h1>manish</h1>
    <span> - </span>
    <h1>pooja</h1>
</body>


- script
setTimeout(() => {
      document.querySelector("h1").innerHTML = "I WILL change everything";

      document.querySelector("body").innerHTML = "";

      const div = document.createElement("div");
      const p = document.createElement("p");

      p.innerHTML = "i m losing my mind and worried";

      div.appendChild(p);

      console.log('div', div);

      // document.querySelector('body').replaceChild(div)
      document.querySelector('body').replaceChildren(div)



      // document.querySelector("body").appendChild(div);
    }, 5000);


```


* <b> IMPORTANT TO NOTE</b>

1) for of loop can only be used for an iterator ( for ex: array, string )
2) we are not using var because if we initialize any variable with var inside a scope. It is still available outside which create confusion.
3) In browser, global object is Window hence this refers to browser window object.
4) These are falsy values: false, 0, -0, "", null, undefined, NaN
5) forEach() always returns undefined
6) To return an object from arrow function, const arr = () => ({playerName :"ronaldo"})
7) For getting text data of any node in HTML
- innerHTML
- innerText
- textContent
8) innerHTML and outerHTML diff
```
<div class="outer"><span class="inner"></span></div>

console.log(document.querySelector('.outer').innerHTML);  // <span class="inner"></span>


console.log(document.querySelector('.outer').outerHTML);  //  <div class="outer"><span class="inner"></span></div>
```

9)  document.querySelector("body").replaceChildren(div)
```
const div = document.createElement("div");
const p = document.createElement("p");
p.innerHTML = "i m losing my mind and worried";
div.appendChild(p);
```

10) Event bubbling
```
When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
A bubbling event goes from the target element straight up. Normally it goes upwards till <html>, and then to document object, and some events even reach window, calling all handlers on the path.

NOTE:
event capture is opposite of event bubbling
```

10) event.stopPropagation()
```
stopPropagation() is a method in JavaScript that prevents an event from triggering the same event on parent elements
```

11) e.preventDefault()
``` 
preventDefault() is a JavaScript method that allows you to stop the default behavior of an event from occurring.
```

12) stopImmediatePropagation()
```
stopImmediatePropagation() is a method in JavaScript that not only stops the propagation of an event to parent elements but also prevents any other event handlers attached to the same element from being executed
```

13) Third parameter of addEventListener (default : false)   <strong>( useCapture )</strong> 
```
if true, useCapture indicates that the user wishes to initiate capture (top to bottom approach).
Default is false, it's indicates that the user wishes to initiate bubbling ( bottom to top approach )

```

14) .remove()
```
The .remove() method in JavaScript is used to remove an element from the DOM (Document Object Model), effectively deleting it from the webpage. It is available on DOM nodes and allows you to remove an element and all of its child elements.


Example :

<div id="myElement">Hello, world!</div>
document.getElementById('myElement').remove();
```

15) e.target.tagName
```
<div id="parent1">parent1</div>
<button id="parent2">parent2</button>
<span id="child">child</span>


document.getElementById("child").addEventListener("click", function (e) {
    console.log("console", e.target.tagName);  // DIV
});

document.getElementById("parent1").addEventListener("click", function (e) {
    console.log("console", e.target.tagName);  // BUTTON
});

document.getElementById("parent2").addEventListener("click", function (e) {
    console.log("console", e.target.tagName);  // SPAN
});
```

16) Everything in javascript is object


![Alt text](/images/Every_thing_is_object.png)


17) static keyword in class
```
the static keyword is used to indicate that a property or method belongs to the class itself, rather than its instances (objects).
```

18) Bind diff betw arrow and function expression
```
Function Expression: A function expression creates its own this context, which is determined when the function is called. The value of this inside the function can change depending on how the function is invoked.

Arrow Function: An arrow function does not create its own this context. Instead, it captures the this value from the surrounding context (lexical scope). This behavior makes arrow functions especially useful for certain scenarios, like event listeners, where you want to retain the this context from the surrounding scope.
```

19) Writing async in function will always return Promise

```javascript

async function getData(){
  return "returning Promise"
}

const data = getData()

data.then(res => console.log(res)) // returning Promise
```