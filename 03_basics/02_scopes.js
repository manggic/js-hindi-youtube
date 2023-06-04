

// we are not using var because if we create any variable with var inside a scope 
// it is still available outside which create confusion 


// var c = 500

if(1){
    let a = 10
    const b = 20
    // var c = 30 
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    let name = "hitesh"

    function two(){
      let website = "youtube" 
      console.log(name);  // hitesh | As child can ask elder to give ice-cream
    }
    // console.log(website); // ERROR - two() is another diff scope we can't access it parameters
    two()
}

// one()



if(1){
     let player = 'virat'
     if(true){
        let rapper = "badshah"
        console.log(`Both ${player} and ${rapper} are top class of their fields`);
     }
    //  console.log(rapper); ERROR - out of scope
}
// console.log(player); ERROR - out of scope






sayHello() // this will work fine
function sayHello(){
    console.log('hello ji');
}



// console.log(myFun());  // ERROR - Cannot access 'myFun' before initialization


// function expression
let myFun = function(){
    console.log('his story');
}


