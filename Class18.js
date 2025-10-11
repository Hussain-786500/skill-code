// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const Descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(Descriptor);

const say = {
    name: 'rahul walya',
    age: 29,
    isAvailable: true,
    giveMe: function(){
      console.log("let me again");
    }
}

console.log(Object.getOwnPropertyDescriptor(say, "name"));


for (let [key, value ] of Object.entries(say)) {
    if(typeof value !== 'function' )
    console.log(`${key} : ${value}`);
}