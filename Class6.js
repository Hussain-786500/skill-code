// ******************** OBJECT ********************

//object literals..........
// const mySym = Symbol("key1")

// const JsUser = {
//     fullName: "ibrahin",
//     age: 22,
//     state: "bihar",
//     [mySym]: "mykey1",
//     email: "hussain@google.com",
//     isLoggedIn: false,
// }
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullName"])
// console.log(JsUser[mySym])

// JsUser.email = "ibrahim@google.com" //this value is change
// console.log(JsUser)

// JsUser.greeting = function(){
    // console.log("hello JS User");
// }
// JsUser.greetingTwo = function(){
    // console.log(`hello JS User, ${this.fullName}`);
// }
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo())


// ##############************+++++++++++@@@@@@@@@

// const hinder = new Object()  //singleTon object
// // const hinder = {}            //Non-singleTon object
// hinder.id = 678
// hinder.name = "ibrahim",
// hinder.email = "rahul@google.com",

// console.log(hinder)




// const regularUser = {
//     email:"rahul@gmail.com",
//         userfullname: {
//             firstname: "ibrahim",
//             lastname: "hussain"
//         }
// }

// console.log(regularUser)





// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = {5: "e", 6: "f"}

// const newObj = {obj1, obj2, obj3}

// console.log(newObj)



// ********* short JSON Metho **********

// const users = [
    
//     {
//         id: 1,
//         email: "husain@google.com"
//     },
//     {
//         id: 1,
//         email: "husain@google.com"
//     },
// ]

// users[1].email
// console.log(hinder);
// console.log(Object.keys(hinder))
// console.log(Object.values(hinder))
// console.log(Object.entries(hinder))

// console.log(hinder.hasOwnProperty('name'))


// *************

const course = {
    coursename: "js in console",
    Price: "9999",
    courseInstructor: "ibrahim"
}

const {courseInstructor: hello} = course

console.log(hello);