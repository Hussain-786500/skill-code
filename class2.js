// satck (primitive), Heap (non-primitive).........

//primitive value copy (stack memory)........

let myYoutubename = "sacchi Knowledge"  //this original value.
let anothername = myYoutubename;
anothername = "The ibristani"   //changing this value but not affected the original value.
console.log(myYoutubename);    //output: sacchi knowledge
console.log(anothername);      //output: The ibristani

//Non primiutive value (haep memory - reference).........

let userOne = {
    email: "hussain@google.com", 
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "ibrahim@google.com" //modifying this affects the original object.

console.log(userOne.email)         // output: ibrahim@google.com
console.log(userTwo.email)         // output: ibrahim@google.com


// string concatenation.........

 const name = "hussain "
const repoCount = 786

console.log(name + repoCount + " is a good"); // old way (not recommended)

console.log(`Hello my name is ${name} and my repo Count is ${repoCount} `); //this is good way to do it (recommended)


// string object methods..........

const gameName = new String("Hussain-jax");

console.log(gameName[0]);        // it will show H
console.log(gameName.__proto__); // it will show all the methods of string)
console.log(gameName.length);         // it will show the length of string
console.log(gameName.toString());     // it will convert object to string
console.log(gameName.toUpperCase());  // HUSSAIN
console.log(gameName.toLowerCase());  // hussain
console.log(gameName.slice(0, 4));    // Huss
console.log(gameName.charAt('6'));    // n
console.log(gameName.indexOf('n'));   // it will show 6
console.log(gameName.split('-'))

// substring with slice..........

const newString = gameName.substring(0, 4);
console.log(newString);                      // huss

const oldString = gameName.slice(0, 4);
console.log(oldString);                      // huss

//trim (removes extra spaces from start and end).............

const newStringOne = "         HUSSAIN          ";
console.log(newStringOne);
console.log(newStringOne.trim()); // it will remove the extra spaces from start and end

// url handling (replace, includes)...................

const url = "https://hussain.com/hussain%20knowledge";

console.log(url.replace("knowledge", "skillwala")); // it will replace %20 with -
console.log(url.includes("skillwala")); // it will be return false because 'skillwala' is not present in url.
console.log(url.includes("hussain")); // it will be return true because 'hussain' is present in url.
