// ***********IIFE (Immediately Invoked Function Expresion) *************

(function gain (name){
    console.log(`DB CONNECTED ${name}`)
})("hussain");

(  (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("ibrahim")