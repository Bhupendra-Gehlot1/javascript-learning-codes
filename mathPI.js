console.log(Math.PI)
// console.log(Object.getOwnPropertyDescriptor(Math,"PI"))

let myObject = {
    name: "Bhupendra",
    email: "bhupendra@google.com",
    password: 200
}

// console.log(Object.getOwnPropertyDescriptor(myObject,"name"))

// Object.defineProperty(myObject,"name",{
//     enumerable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(myObject,"name"))

for(let [key,values] of Object.entries(myObject)){
    console.log(`${key} : ${values}`)
}