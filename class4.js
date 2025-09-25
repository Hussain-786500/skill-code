//daes..

// let myDate = new Date()
// console.log(myDate.toString()); //Tue Sep 23 2025 22:56:56 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  // Tue Sep 23 2025
// console.log(myDate.toLocaleString()); // 23/9/2025, 10:59:42 pm

// console.log(myDate.toLocaleDateString());  // 23/9/2025
// console.log(typeof myDate);  // object


// let mySchool = new Date(2023, 0, 23);
// console.log(mySchool.toDateString());  //Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 30);
// console.log(myCreatedDate.toLocaleString()); //23/1/2023, 5:30:00 am

// let myData = new Date("05-12-2025")
// console.log(myData.toLocaleString())  //12/5/2025, 12:00:00 am

// let myGen = Date.now()
// console.log(myGen)       //1758650138098


// let newDate = new Date()

// console.log(newDate)   /          //2025-09-23T18:07:57.630Z
// console.log(newDate.getMonth())  // 8
// console.log(newDate.getDay())    // 2


// let newYork = new Date ()
// newYork.toLocaleString('default', {
    // weekday: "long"
// })





// const hello = { name: "ibrahim",age: 22};

// hello.age = 23;

// console.log(hello)


//stack (primitive), Heap(Non-primitive)..........

/*let myNmae = "radha"
let anotherName = myNmae;
  anotherName = "krishna"

  console.log(myName)
  console.log(anotherName)

  //refrance (Non-primitive).................

  let typeOne = {
    email: "ibrahim@google.com"
    // password: "1234"
  }

  let typeTwo = typeOne;
   typeTwo.email = "hussain@google.com"

   console.log(typeOne.email)
   console.log(typeTwo.email)*/


   //string concatinate...........

//    const name = "hussain " 
//    const roll = 786        

//    console.log(name + roll + " is a good"); 

//    console.log(`my name is ${name}, and my roll number is ${roll}, "is a very good`)   

//this way concatinate..........

// const str1 = "ibrahim"
// const str2 = " hussain"

//  const str3 = str1 + str2
// console.log(str3)     // ibrahim husain

// array concate method...........

// 1)..
//  const arr1 = [1, 2, 3, 4];
// const arr2 = [,5, 6, 7, 8];
// const newArr =  arr1 + ( arr2)

// console.log(newArr)  // 1, 2, 3, 4, 5, 6, 7, 8

// 2)..multiplication..........
// const arr1 = [1, 2,]
// const arr2 = [,3, 4,]
// const arr3 = [,5, 6,]

// const newArr = arr1 + (arr2 + arr3);

// console.log(newArr)

//stringObj concatinate in array.............

// const arr = ["apple","orange"];
// const objArr = [{name: "hussain"}]

// const newArr = [...arr, ...objArr]
// console.log(newArr)

//string convert into object............

// let str =`{"name":"ibrahim","age":22}`;
// let obj = JSON.parse(str);
// console.log(obj);
// console.log(obj.name)

//array convert into object................

// let arr = ["apple", "mango","orange"];
// let obj = Object.assign({}, arr);
// console.log(obj);

//this is manually set array.........

// let arr = ["apple", "orange", "banana"];
// let obj = {};
// arr.forEach((item, index) => {
//     obj[index] = item;
// });

// console.log(obj);

// **************** function practice *********************
// *normal........

// function add(a, b) {
//     return a + b
// }

// console.log(add(5, 10))

// *function with const (Add)........

// const add = function(a, b) {
//     return a + b
// }

// console.log(add(5, 10))    // 15

// *function with const (multiply)........

// const multiply = (a, b) => {
//     return a * b;
// }
// console.log(multiply(4, 6))    // 24

// *function with const (square)........

const square = num => num * num;
console.log(square(7));      // 49