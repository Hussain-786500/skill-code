
// **************Data Types Conversion**************

//Primitive  data types in js..............

number => 2 to pwer 53
bigint
string   => ""
boolean  => true/falser
null => standalone value
undefined => 
symbol => uniqe value


//Non-Primitive (Reference) Data Types in js..........


object => {}

    console.log(typeof "ibrahim")  //string

    console.log(typeof age); //number

    console.log(typeof null); //object

    console.log(typeof BigInt); //function

    console.log(typeof boolean); //undefined

    console.log(typeof undefined);//undefined

    console.log(typeof state); //object

    console.log(typeof symbool); //undefined

    console.log(typeof Number); //number




    let score = 29
    console.log(typeof score); //number
    
    let score1 = "29"
    console.log(typeof score1) //string

// //     // // now change string into number...........

    let valueInNumber = Number(score1) 
    console.log(typeof valueInNumber) //number


    let isLoggedIn = 1

    let booleanIsLoggedIn = Boolean(isLoggedIn)
    console.log(booleanIsLoggedIn); //true

     
    let isLoggedIn1 = ""

    let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
    console.log(booleanIsLoggedIn1); //false


    let isLoggedIn2 = "ibrahim"

    let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
    console.log(booleanIsLoggedIn2); //true


//     //resultut................

    let someNumber = 123
    let stringNumber = String(someNumber)
    console.log(stringNumber);//"123"

    console.log(typeof stringNumber);  //string



   // **************** Operations ***************

    let value = 3
    let negValue = -value
    console.log(negValue); // -3
     
    console.log(2 + 2); //4
    console.log(2 - 2); //0
    console.log(2 * 2); //4
    console.log(2 ** 2); //4
    console.log(2 / 2); //1
    console.log(2 % 2); //0

//     // Value addition in tring..............

    let str1 = "ibrahim"
    let str2 = " hussain"

    let str3 = str1 + str2
    console.log(str3)  // ibrahim hussain
    
    let str1 = 20
    let str2 = 10

    let str3 = str1 + str2
    console.log(str3); //30

    console.log("2" + 2) // "22"
    console.log(2 + "2") // "22"
    console.log("1" + 2 + 2) // "122"
    console.log(1 + 2 + "2") // "32"
    console.log(2 + 2 + "1") // "41"
    

 console.log((2 + 3) * 4 / 2) //10
 console.log((2 + 3) * 4 % 2) //remainder 0 ...........

console.log(+true) // 1
console.log(+"") // 0

console.log(+false)  // 0
console.log(+"") // 0

let gameCounter = 100
  gameCounter++
  console.log(gameCounter); //101


let x = 3
const y = x++

console.log(`x: ${x}, y: ${y}`);  // Expected output..: "x : 4, y : 3"


// // ********* pst & pre increment *********

    let x = 5;

    console.log("x = " + x );

    console.log("x++ = " + (x++));
    console.log("x = " + x);    // X = 5, X++ = 5, X = 6

    console.log("++x = " + (++x))
    console.log("x = " + x) // X = 6, ++X = 7, X = 7

//     // *********** boolean type ***********

    console.log(2 > 1)  //true
    console.log(2 < 1)  //false
    console.log(2 >= 1) //true
    console.log(2 <= 1) //false
    console.log(2 == 1) //false
    console.log(2 != 1) //true

    console.log("2" > 1); //true
   console.log("02" > 1); //true
   console.log("2" < 1); //false
   console.log(2 > "1"); //true

console.log(null > 0) //false
console.log(null < 0) //false
console.log(null >= 0) //true
console.log(null <= 0) //true
console.log(null == 0) //false
console.log(null === 0) //false
console.log(null != 0) //true
console.log(null !== 0) //true

console.log(undefined > 0) //false
console.log(undefined < 0) //false
console.log(undefined >= 0) //true
console.log(undefined <= 0) //true
console.log(undefined == 0) //false
console.log(undefined === 0) //false
console.log(undefined != 0) //true
console.log(undefined !== 0) //true



