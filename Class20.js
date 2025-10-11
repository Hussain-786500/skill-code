// ************ Lexical Scoping and Closure ***********

// 1)...lexical scope..........

// => inner function can use and access outer variable function but outer function can not use or accsess inner variable function.

function outer(){
let name = "ibrahim"; //where outer function vaiable


function inner(){
    console.log(name); //inner function can use outer variable
  }
inner();
}

outer();


// => when inner function, remembered and can use  variable of outer function, even end of outer function, is known as Closure.

function outer(){
    let count = 0;  //variable of outer function

    function inner(){
        count++    //the inner function is using  variables the  outer function.

    console.log(count);
    }

return inner;  //outer function return of inner variables
}

const counter = outer(); //outer() called, and return inner function 

counter();  // 1
counter();  // 2
counter();  // 3

counter();  // 4
