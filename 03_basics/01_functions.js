
// num1 and num2 are parameters
function addTwoNumber(num1, num2){
     return num1 + num2
}

// 19 and 11 are arguments
console.log(addTwoNumber(19, 11));


function addAll(...params){
      return params.reduce( (acc , num) => acc + num    , 0)
}

console.log(addAll(1,2,3,4,5));







