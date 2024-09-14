const accountId = 112;
let accountName = "bhupendra";
var acoountCity = "raipur";
accountState = "CG";
let accountSalary;
/* prefer not to use var
because of bblock scope and functional scope */
// console.table([accountId, accountName,acoountCity,accountState,accountSalary]);

// data variables;
// let value=null;
// console.log(typeof(accountName));

// console.log(typeof(null));

// let str="help-bc";
// // console.log(str.slice(1,3));
// // console.log(str.toUpperCase())
// // console.log(str.split('-'))
// // console.log(str.includes('help'))
// let url='https://www.google.com/bhai%20system'
// console.log(url.replace('%20','-'));
// console.log(str.slice(-2,7));
// console.log(str.substring(1,4))

// let value=400;
// let nom=new Number(400450);
// console.log(nom)
// console.log(nom.toFixed(2))
// console.log(nom.toPrecision(4))
// console.log(nom.toLocaleString())
// let random=Math.floor((Math.random()*10)+1);
// console.log(random);

let arr = [1, 2, 3, 4];
// arr.push(5);
// console.log(arr)
// arr.unshift(0)
// console.log(arr)
// arr.shift(1)
// console.log(arr)
// let newarr1 = arr.slice(1, 3);
// console.log(arr);
// console.log(newarr1);
// let newarr2 = arr.splice(1, 3);
// console.log(arr);
// console.log(newarr2);
// let newarr=arr.join()
// console.log(newarr)

const marvel_heroes=["thor","IronMan","spiderMan"];
const dc_heroes=["level","sbke","nikalege"];
const newarr=marvel_heroes.concat(dc_heroes);
console.log(newarr);
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

let newarr5=[...marvel_heroes,...dc_heroes]
console.log(newarr5);

