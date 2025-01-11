we can declare object as litrals and as constructors


// singleton 
when we make any constructor of it, then can create a singleton object, means only one object
// Object.create ( it is constructor method)

// object literals ( it will never be singleton)

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",     symbol like this its data type will be symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


mostly we access objects using . but in some cases we need to use [].

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])   we can access it as a symbol like this its data type will be symbol

JsUser.email = "hitesh@chatgpt.com"   can overwrite the value
// Object.freeze(JsUser)   we are locking the value it cant be changed now
JsUser.email = "hitesh@microsoft.com" 
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
