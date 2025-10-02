// *********** control flow/ logic flow**********

// const balance = 1000

// if (balance < 500) {
//     console.log("less then 500");

// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//      console.log("less than 750")
// }else{
//     console.log("less than 1200")
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInfromGoogle = false
// const loggedInfromEmail = true

// if (userLoggedIn && debitCard){
//     console.log("Allow to buy courses")
// } 

// if (loggedInfromGoogle || loggedInfromEmail){
//     console.log("User logged in ")
// }


// const month = "march"

// switch (month) {
//     case 1:
//     console.log("january");
//     break;
//     case 2:
//     console.log("february");
//     break;
//     case 3:
//     console.log("march");
//     break;
//     case 4:
//     console.log("april");
//     break;

//   default:
//     console.log("default case match");
//     break;
// }


// const userEmail = ""

// if (userEmail){
//   console.log("Got user Email")
// }else {
//   console.log("Don't have any user email")
// }



// i assume this value is, false................

// false values...

//  0   =      false
// -0   =      false
// BigInt 0n = false
 
// ""  =      false
// null =      false
// undefined = false
// NaN  =      false

// // True values....

// "0"        =      True
// 'false'    =      True

// " "        =      True
// []         =      True
// {}         =      True
// function() =      True
// function{} =      True


if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
  console.log("object is empty");
}

// Nullish Coalescing Operator (???)

let val1;
val1 = 5 ?? 0
val1 = null ?? 10
val1 = undefined ?? 20
val1 = null ?? 10 ?? 20


console.log(val1)

// Turniary Operator.........

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
