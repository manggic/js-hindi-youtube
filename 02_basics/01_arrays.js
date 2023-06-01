
const myArr = [ 1, 2, 3, 4, 5]

const Heros = [ 'shaktiman', 'naajraj', 'hatim']

let newArr = new Array(true, 10, { name:"manito" }, [1,2,3], null, undefined)

// console.log(newArr);

// Array methods
console.log(Heros.length); // 3

console.log([1,2,3].concat([4,5,6], ['manish'])); // [ 1, 2, 3, 4, 5, 6, 'manish' ] returns a new array.

const arrIterator = ['a', 'b', 'c'].entries(); // arrIterator = { 0:'a', 1:"b", 2:'c' } returns a new array.
for(let [ind, ele] of arrIterator){
  console.log('data',ind,ele)               //  (0 a) (1 b) (2 c)
}
 
console.log(myArr.every(ele => ele < 10));  // true      It returns a Boolean value.
// console.log(myArr.fill('mm', 2, 5))         // [ 1, 2, 'mm', 'mm', 'mm' ]     It mutate the og array.
// console.log(myArr.fill(6));                 // [ 6, 6, 6, 6, 6 ].  It mutate the og array.


console.log(myArr.filter(ele => ele > 3));  // [4,5]

// The find() method returns the first element in the provided array that satisfies the provided testing function.
// If no values satisfy the testing function, undefined is returned.
console.log(myArr.find(ele => ele > 2)); // 3

// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function.
// If no elements satisfy the testing function, -1 is returned.
console.log(myArr.findIndex(ele => ele > 3)); // 3


console.log(myArr.findLast(ele => ele > 4)); // 5

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(3));  // [ 0, 1, 2, 3, 4 ]


let modArr = ''
let arr = [1,2,3,4,5]
arr.forEach(ele => modArr = modArr+ele) 
console.log(modArr)    // "12345"


console.log(Array.from('manish'));   //  Array ["m", "a", "n", "i", "s", "h"]
console.log(Array.from('manish', x => x + 1));    // Array ["m1", "a1", "n1", "i1", "s1", "h1"]


console.log(arr.includes(2));   // true

console.log(arr.indexOf(3));   // 2

console.log(Array.isArray([1,2,3])); // true

console.log(Array.isArray(""));  // false


console.log([1,2,3,4].join('-')); // "1-2-3-4"


console.log([1,3,2,3,4].lastIndexOf(3));  // 3

console.log([1,3,2,3,4].map(ele => ele + 1)); // Array [2, 4, 3, 4, 5]
