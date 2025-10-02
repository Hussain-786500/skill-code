// ************* Loop ittration ****************

//  1. For Loop.............



// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("10 is the best number")
//     }
//     console.log(element);


// }

// for (let i = 0; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`inner loop value ${j} and inner loop value ${i}`)
//         console.log(i + '*' + j + ' = ' + i*j) ;
        
//     }
    
// }


// let myHero = ["ironman", "superman", "godman"]
// console.log(myHero.length)
// for (let index = 0; index < myHero.length; index++) {
//     const element = myHero[index];
//     console.log(element)
    
// }


// important condition............braek & contineue

// for (let index = 1; index <= 20; index++) {
//   if(index == 5){
//     console.log('Detected 5')
//     break
//   }

//     console.log(`value of i is ${index}`)

    

// for (let index = 1; index <= 20; index++) {
//   if(index == 5){
//     console.log('Detected 5')
//     continue
//   }

//     console.log(`value of i is ${index}`)

    
// }


// 2. do-while while loop...........


// let index = 0
// while (index <= 10){
//     console.log(`value of index is ${index}`);
//     index = index + 2
// }

// let myArr = ["superman","goldman", "ironman"]
// let arr = 0
// while (arr < myArr.length) {
//     console.log(`value is ${myArr[arr]} `)
//     arr = arr + 1
// }


// let score = 1

// do {
//     console.log(`Score is ${score}`);
//     score++
// } while (score <= 10 )



// 3. For of Loop........

// const arr = [1, 2, 3, 4, 5,]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world!"


// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }
    

//4. Map......................

// const map = new Map()
// map.set('IN', "india")
// map.set('USA', "United State of America")

// // console.log(map)

// for(const [key, value] of map){
//     console.log(key, ':-', value);
// }

//by object................

// const myObject = {
//     js: 'javaScript',
//     cpp: 'C++',
//     sys: 'system'
// }
// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`) 
    
// }


// by array................

// const program = ["js", "ib", "py", "hava", "cpp"]

// for (const key in program) {
    
//     console.log(program[key])

    
// }

//by for each loop................


// const coding = ["js", "ruby", "java", "html"]

// coding.forEach(function (val){
//     console.log(val)
// }
// )
// coding.forEach((item) => {
// console.log(item)
// }
// )
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index,arr )
// }
// )



// /by object...............

// const myCoding = [
//     {
//         languageName: "javaScript",
//         languageFileName: "js"
//     },

//     {
//         languageName: "python",
//         languageFileName: "py"
//     },

//     {
//         languageName: "react",
//         languageFileName: "re"
//     }
// ]
// myCoding.forEach((item) => {

// console.log(item.languageName);
// }
// )



// by filter map...............

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

//  console.log(newNums)

//filter use data types...............


// const books = [
//     {title: 'Book one', genre: 'fiction', publish: 1981, edition: 2004},

//     {title: 'Book Two', genre: 'history', publish: 1998, edition: 2008},

//     {title: 'Book Three', genre: 'science', publish: 1999, edition:2010},

//     {title: 'Book four', genre: 'polity', publish: 2000, edition: 2015},
// ]

// const userBooks = books.filter( (bk) => bk.genre === 'history')
// console.log(userBooks)
 

// const userBook = books.filter( (bk) => bk.genre === 'polity')
// console.log(userBook)
 


// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newNums = myNumbers.map( (num) => { return num + 10})

// // console.log(newNums)

// //map chaining.................

// const newNums2 = myNumbers 
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)
// console.log(newNums2);


// reduce js..................

// const anyArr = [1, 2, 3, 4]
// const myTotal = anyArr.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval} `)
//     return acc + currval
// }, 5)

// console.log(myTotal)


// reduce in array..................

// const anyArr = [1, 2, 3, 4]
// const myTotal = anyArr.reduce( (acc, currval) => acc + currval, 0)

// console.log(myTotal)


const shoppingCart = [
    {
        itemName: "mobile",
        price: 2390
    },
    {
        itemName: "handwash",
        price: 239
    },
    {
        itemName: "toyCar",
        price: 3004
    },
]

const nowPay =  shoppingCart.reduce((acc, product) => acc + product.price, 2)

console.log(nowPay)  // TOTAL BILL = 5635