
// string '2' gets converted to integer
console.log('2' > 1); // true
console.log('02' > 1); // true

// equality check and comparison both work differently
// comparison convert null to a number
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true


console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

console.log( '2' === 2  );  // false
 



