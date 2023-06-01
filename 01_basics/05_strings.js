
let name = 'manish'
let myPassion = new String('Writing')


console.log(myPassion.toUpperCase()); // "WRITING"
console.log(myPassion.charAt(1));     // r
console.log(myPassion.indexOf("t"));  // 3
console.log(myPassion.length);        // 7
console.log(myPassion.slice(1,3));    // "ri"
console.log(myPassion.substr(1,5));   // "ritin"
console.log(myPassion.includes('ti'));   // true
console.log('      plstrim me    '.trim());    //  "plstrim me"
console.log(myPassion.concat(' is', ' the', ' my', ' passion'));   // "Writing is the my passion"
console.log(myPassion.replace('ing','ten'));   // "Written"
console.log(myPassion.split(''));   // ['W','r','i','t','i','n','g']
console.log((23).toString()); // "23"