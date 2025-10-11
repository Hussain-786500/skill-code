// Classes..................


function setUsername(username){
    this.username = username
    console.log("called");
}

function CreateUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const Hero = new CreateUser("Hero", "hero@gmail.com", "487394")

console.log(Hero)



class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const user1 = new person("ibrahim", 45)
console.log(user1)

class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

createPass(){
    return `${this.password}`
}
createName(){
    return `${this.name.toUpperCase()} rahul`
}

}
const user1 = new person("ibrahim", 45)
console.log(user1)