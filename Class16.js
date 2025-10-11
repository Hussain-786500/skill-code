

//Object and New Keyword...................


function guna (num){
    return(num * 5)
}

guna.power = 2

console.log(guna.power)
console.log(guna(5))
console.log(guna.prototype)



// 1..........

const myUser = {
    name: "hello",
    age: "56",

intro: function(){
console.log(`my name is ${this.name} and my age is ${this.age}`)
   }
}

myUser.intro()

// 2............

function myUser (username, age){
this.username = username,
this.age = age
}

myUser.prototype.increment = function(){
    this.age++
}
myUser.prototype.printMe = function(){
    console.log(`my age is ${this.age}}`)
}

const user1 = new  myUser("ibrahim", 56)
const user2 = myUser("hussain", 34)

user1.printMe()


// prototype................

let myHeros = ["nuh", "musa"]

let heroPower = {
nuh: "kasti",
musa: "sea",


getIbroPower: function(){
    console.log(`heros power is ${this.musa}`);
}
}

Object.prototype.ibrahim = function(){
    console.log(`ibrahim is present in all objects`)
}
myHeros.ibrahim()

Array.prototype.hayIbrahim = function(){
    console.log(`hello i am ibrahim`)
}

myHeros.hayIbrahim()


//inheritance.......................

old code syntax method.......

const Creater = {
    makeVideo: true
}

const user = {
    name: "hussain",
    email: "hussain@gmail.com"
}
const CreaterSupport = {
    isAvailable: false
}

const ScriptSupport = {
    makeThumbnail: 'freedom movement',
    fullTime: true,
    __proto__: CreaterSupport
}

Creater.__proto__ = user

//  Newe code syntex method...(modern syntax).............


let anotherUsername = "theIbristani        ";

String.prototype.trueLength = function(){
    console.log(`${this}`);

    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()

"ibrahim".trueLength()
"tea".trueLength()
"collage".trueLength()