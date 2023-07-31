



function setUsername(username){
  this.username = username
}

function createUser(username, email){

    setUsername(username)

    console.log("this", this);
     this.email= email
}

const user  = new createUser("username", 'email')

console.log(user);






// function one(){
//   this.one = 'one'
// }



// function two(){
//       one()

//       console.log('logging ', this);
// }


// two()




