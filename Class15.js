
// ********PROMISE Fetch API (.then, .catch, .finally)********


// Normal .then or .catch..........

const promise = new Promise(function(resolve, reject){
      setTimeout(function(){
            console.log("Async task is resolved") // after 2 Sec this value print
      }),2000
})

//.then use.............

const hello = new Promise(function(resolve, reject){
 setTimeout(function(){
    console.log("hii i am brahim")
    resolve({username: "ibrahim", email: "ibrahimhussain@gmail.com"})
 }, 2000)

}).then(function(user){
    console.log(user)
})

.catch use................

const hello1 = new Promise(function(resolve, reject){
 setTimeout(function(){
    console.log("hii i am brahim")
    reject({id: "hello", name:"ihussain"})
 }, 3000)

}).catch(function(user){
    console.log(user)
})


// .then,.catch Catching Process.............

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "ibrahim", id: "4747"})
        } else {
             reject('ERROR: Somthing went wrong')
        }
        
    }, 3000)
})
 promiseOne
 .then((user) => {
        console.log(user);
        return user.username
}).then((username) => {
     console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolve or rejected") ) 


//async chainning Process....with fetch API...........

const promiseTwo = new Promise (function(resolve, reject){
    setTimeout(function(){

       let error = true
       if (!error){
        resolve({username: "Python", password: "4743"})
       } else {
        reject('ERROR: Python went wrong')
       }
    }, 2000)

 });
 
 async function consumePromiseTwo(){ try {
    const response = await promiseTwo
       console.log(response)
 } catch (error){
    console.log(error)
   }
 }
 consumePromiseTwo()
async function getAllUsers(){
    try{
        const response = await fetch(' https://api.thecatapi.com/v1/images/search?limit=10')
        const data = await response.json()
        console.log(data)
    } catch (error){
        console.log("error")
    }
}
getAllUsers()


//.then, .catch with fetch API.............

fetch('https://api.thecatapi.com/v1/images/search?limit=10')
.then((response) => {
     return response.json()
})
.then((data) => {
  console.log(data)
})
.catch((error) => {
    console.log(error)

})
