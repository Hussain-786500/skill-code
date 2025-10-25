// **************** Array *******************

// const myArr = [0, 1, 2, 3, 4, 5, 6]

// myArr.push(7,8)
// myArr.pop()
// myArr.unshift(0.9) //this method value add in first 
// myArr.shift()      //this method remove first value

// console.log(myArr)

// console.log(myArr.includes(9))   // false  , not eist 9 value in this array
// console.log(myArr.indexOf(9))    // -1 means not exist 9 value

// const newArr = myArr.join()

// console.log(myArr)      // [0, 1, 2, 3, 4, 5, 6]
// console.log(newArr)     // 0, 1, 2, 3, 4, 5, 6


// slice, splice..............

// console.log("A ", myArr);
// const myn1 = myArr.slice(1, 3)

// console.log(myn1)
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C ", myArr)
// console.log(myn2)


// *********************************************

// const bollywood = ["sahrukh khan", "salman khan", "Amir khan"]
// const hollywood = ["superman", "flash", "ironman"]
// const tollywood = ["kesharilal yadav", "pawan singh", "akshara panday"]
// // const newHeros = bollywood.concat(hollywood)
// const newHeros = [...bollywood, ...hollywood, ...tollywood]
// console.log(newHeros)


// flat array method.................

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 5, 4, [4, 5 ,[4, 2]]]]

// const real_another_array =another_array.flat(Infinity)

// console.log(real_another_array)  //[1, 2, 3, 4, 5, 6,7, 6, 5, 4, 4, 5, 4, 2]

//ask question.......

// console.log(Array.isArray('ibrahim'))  //false
// console.log(Array.from("hussain"))     // ['h', 'u', 's','s', 'a', 'i','n']
// console.log(Array.from({name: "ibrahim"}))   // [] empty


// ************
// let score1 = 1000
// let score2 = 2000
// let score3 = 3000

// console.log(Array.of(score1, score2, score3))


// console.log("hello world")





