// if(true) {
//     const userName= "Bhupendra"
//     if(userName === "Bhupendra"){
//         const newName= "Klaus"
//         console.log(userName)
//     }
//     console.log(userName)
//     // console.log(newName)
// }
// console.log(addTwo(5))
// const addTwo = function(num){
//     return num+2;
// }
// console.log(addTwo(5))
// console.log(addOne(5));
// function addOne(num){
//     return num+1;    
// }
// console.log(addOne(5));

console.log(this)

function GreetMe(userName){
    console.log(`${userName} , Hello!!`)
    console.log(this)
}
GreetMe("SaM");
