// function setUsername(username){
//   this.username = username
// }

// function createUser(username, email){

//     setUsername(username)

//     console.log("this", this);
//      this.email= email
// }

// const user  = new createUser("username", 'email')

// console.log(user);




const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("Resolved");
  }, 5000);
});

const p2 = new Promise(function (resolve, reject) {
   setTimeout(() => {
     resolve("Resolved");
   }, 1000);
 });

// function handlePromise1() {
//   p.then((res) => console.log(res)); // returning Promise

//   console.log("handlePromise1");
// }

async function handlePromise3(){

   const data1 = await p1;
   console.log(data1);
   console.log('first call');

   const data2 = await p2;
   console.log(data2);
   console.log('second call');
}

handlePromise3()























