// // for (let i = 0; i < 10; i++) {
// //     if(i==4){
// //         console.log(`${i} is here`);
// //         continue;
// //     }
// //     if(i==9){
// //         console.log(`Opps!! Game Over ${i} x is here`);
// //         break;
// //     }
// //     console.log(`Hello number ${i}`);

// // }
// // let index=0;
// // do {
// //     console.log(`value is ${index}`)
// //     index++;
// // } while (index<=10);

// // #High order array loops
// const map = new Map();
// map.set('1',"help");
// map.set('2',"I'm being");
// map.set('3',"Surrounded");
// // for (const [key, value] of map) {
// //     console.log(`key ${key} and it's value is ${value}`)
// // }
// for (const key of map) {
//     console.log(key)
// }

// const myObject = {
//     game1: "NFS",
//     game2: "GTA"
// }
// // for (const key of myObject) {
// //     console.log(`${key} :-> ${myObject[key]}`)
// // }
// for (const key in myObject) {
//     console.log(`${key} :-> ${myObject[key]}`)
// }

// const myArr = ["superman", "batman", "perman"];
// myArr.forEach((val,index)=>{
//     console.log(val,index);
// })
// const newArr = myArr.filter((item)=>{
//     return item==="superman";
// })
// console.log(newArr)

// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const myArr = numArr.map((num) => num + 1);
// console.log(myArr);

// const newNumArr = numArr
//   .map((num) => {
//     return num * 10;
//   })
//   .map((num) => {
//     return num + 1;
//   })
//   .filter((num) => {
//     return num >= 40;
//   });
// console.log(newNumArr);

const myObj = [
    {
        course: "A",
        Price: 2999
    },
    {
        course: "B",
        Price: 3999
    },
    {
        course: "C",
        Price: 4999
    },
    {
        course: "D",
        Price: 4999
    }
]

const total = myObj.reduce((acc,item)=> acc+item.Price,0)
console.log(total);