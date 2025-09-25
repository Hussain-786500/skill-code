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

// const square = num => num * num;
// console.log(square(7));      // 49


