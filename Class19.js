// ************* Getter Setter and Stack Overflow *************

class Person {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
     get password(){
        return `${this._password} 123456`
     }
     set password(value){
        this._password = value
     }
     get email(){
        return `${this._email} khanna@gmail.com`
     }
     set email(value){
        this._email = value
     }
}
const person1 = new Person ("hussain@gmail.com", 234567)
console.log(person1.password)
console.log(person1.email)


// by prototype define...............

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value
        },
    });
   Object.defineProperty(this, 'password', {
      get: function(){
        return this._password.toUpperCase()
      },
      set: function(value){
        this._password = value
      },
   })
    
}

const say = new User("hussain@AI.com", "alpha123")

console.log(say.password);


//by object Define....................

const User = {
    _email: 'hussain@gmail.com',
    _password: "46467",

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

const tea = Object.create(User)
console.log(tea.password);