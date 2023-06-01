
let name = 'manish'
let myPassion = new String('Writing')


console.log(myPassion.toUpperCase()); // "WRITING"
console.log(myPassion.charAt(1));     // r
console.log(myPassion.indexOf("t"));  // 3
console.log(myPassion.length);        // 7
console.log(myPassion.slice(1,3));    // "ri"
console.log(myPassion.substring(1,5));   // "riti"
console.log(myPassion.includes('ti'));   // true
console.log('      plstrim me    '.trim());    //  "plstrim me"
console.log(myPassion.concat(' is', ' the', ' my', ' passion'));   // "Writing is the my passion"
console.log(myPassion.replace('ing','ten'));   // "Written"
console.log(myPassion.split(''));   // ['W','r','i','t','i','n','g']
console.log((23).toString()); // "23"



console.log('Did Not'.match(/[a-z]/g));  // [ 'i', 'd', 'o', 't' ]

// 10 is the result length
console.log('myname'.padEnd(10,'*')) //  "myname****"

console.log('myname'.padStart(10,'*')) // "****myname"
console.log('myname'.repeat(3)) // "mynamemynamemyname"

// Tt return the index of the first match between the regular expression and the given string, or -1 if no match was found.
console.log('myname'.search(/a/g)) // 3
