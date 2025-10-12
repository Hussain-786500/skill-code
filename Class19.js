// *********** Getter Setter and Stack Overflow ************

// class Person {
//     constructor(email, password){
//         this.email = email;
//         this.password = password;
//     }
//    get password(){
//     return `${this._password} 443346`
//    }
//    set password(value){
//     this._password = value
//    } 

//    get email(){
//     return `${this._email} sayai@.com`
//    }
//    set email(value){
//       this._email = value
//    }

// }
// const person1 = new Person ("yooai@.com", 583989)
// console.log(person1.password)
// console.log(person1.email)

//By prototype define..............

// function User (email, password){
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email',{

//         get: function(){
//             return this._email.toUpperCase();
//         },
        
//         set: function (value){
//             this._email = value
//         },
//     });
//     Object.defineProperty(this, 'password',{

//         get: function(){
//             return this._password.toUpperCase();
//         },
//         set: function (value){
//             this._password = value
//         },
//     });


// }

// const say = new User ("huu@.com", "alpha123")

// console.log(say.email)

// By object Define................

const User = {
    _email: 'rrr@gmail.com',
    _password: "676767",


get email(){
    return  this._email.toUpperCase()
},

set email(value){
   this._email = value
},

get password(){
    return  this._password.toUpperCase()
},

set password(value){
   this._password = value
}
}

const see = Object.create(User)

console.log(see.password)