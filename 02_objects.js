const mysum=Symbol("key1");

const JsUser = {
    Name: "Bhupendra Kumar Gehlot",
    "Full Name": "Kumar Gehlot",
    Email: "gehlot@gmail.com",
    [mysum]:"mykey2",
    lastLogins: ["Monday","Wednesday"]
}

console.log(JsUser.Name);
console.log(JsUser["Name"])

console.log(JsUser["Full Name"])
console.log(JsUser[mysum]);
console.log(JsUser);

JsUser.Email="gehlot@yahoo.com"
console.log(JsUser);
// Object.freeze(JsUser);
JsUser.Email="gehlot@xyz.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log(`Hello, ${this.Name}`)
}
console.log(JsUser.greeting())

const tinderUser={
    Name: "Haa mai hi too hoon",
    Email: "terabhai@gmail.com",
    isLoggedIn: false
}
const obj3 = {...JsUser,...tinderUser};
console.log(obj3);

console.log(Object.keys(JsUser))
console.log(Object.values(JsUser))
console.log(Object.entries(JsUser))
console.log(JsUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const {Name}= tinderUser;
console.log(Name)
const {Name:N}= tinderUser;
console.log(N)