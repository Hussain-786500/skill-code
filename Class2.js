// ******************** forNumber *******************

const score = 500
console.log(score)

const balance = new Number(200)
console.log(balance);               //this is number value return

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2))


const oldNumber = 123.897
console.log(oldNumber.toPrecision(3));
                                                                        
const otherNumber = 1000000
console.log(otherNumber.toLocaleString('en-IN'))
                         

// +++++++++++++++++++ Maths ++++++++++++++++++
         
console.log(Math);
console.log(Math.abs(-4));                  // neg value into positiev 4
console.log(Math.round(4.2));               // round up value 4
console.log(Math.round(4.9));               //round up value 5
console.log(Math.ceil(4.2));                //ceil value 5
console.log(Math.floor(4.3));               //floor value 4
console.log(Math.min(2, 3, 4, 5, 6, 7, 8)); //min value 2
console.log(Math.max(2, 3, 4, 5, 6, 7, 8)); //max value 8

console.log(Math.random())      //every time value change, between 0 into 1
console.log((Math.random()*10) +1)    // 1.770.. 
console.log((Math.random()*10) +1)    // 4.6011...
console.log((Math.random()*10) +1)    // 2.4626....
console.log(Math.floor(Math.random()*10)  + 1)  // 5

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // every time value vary (change)  

