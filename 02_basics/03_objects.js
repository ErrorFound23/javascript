// singleton object => using contructor
// Object.create

const mySym = Symbol("key1"); // for create symbol

// object literals
const jsUser = {
  [mySym]: "myKey1", // [] => define symbol in object
  name: "Yash",
  "full name": "Rana yash subhashbhai",
  age: 20,
  location: "Surat",
  email: "yash@420.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]); // key must in string
// console.log(jsUser."full name"); // can't accept string value
// console.log(jsUser[mySym]); // access a symbol

// jsUser.email = "yash@2304.com"
// Object.freeze(jsUser); // lock to the attribute
// jsUser.email = "yash@35495.com" 
// console.log(jsUser);

jsUser.greeting = function() {
    console.log("Hello JS User");
    
}
// console.log(jsUser.greeting); // return function refference 

jsUser.greetingTwo = function() {
    console.log(`Hello JS User ${this.name}`); // this keyword refer current object
    
}
jsUser.greeting()
jsUser.greetingTwo()




