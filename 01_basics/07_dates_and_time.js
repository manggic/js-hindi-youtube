
let date = new Date()

console.log(date.toString());              // Thu Jun 01 2023 11:13:57 GMT+0000 (Coordinated Universal Time)
console.log(date.toLocaleDateString());    // 6/1/2023
console.log(date.toLocaleString());        // 6/1/2023, 11:13:57 AM
console.log(date.toLocaleTimeString());    // 11:13:57 AM
console.log(date.toDateString());          // Thu Jun 01 2023

   
console.log(typeof date);   // object

// year month date hour minute
let date2 = new Date('2023-1-23')
console.log(date2.toLocaleString());


let date3 = new Date(2023, 0, 13, 2, 4)
console.log(date3.toLocaleString());

