// Number is data type is js 
// const num = 400 ;
// // another way to decalare number in js is given as 
// const balance = new Number(4000000);
// //console.log(num);
// //console.log(balance);
// const bal = balance.toFixed(2);
// console.log(bal);
// console.log(typeof bal);

// const indianrupee = balance.toLocaleString("en-In");
// console.log(indianrupee)
// console.log(typeof indianrupee)



// Math in Js 
//console.log(Math)
// Math is an object 
const num = 64;
//console.log( Math.abs(num-100))
// Every inbuild function in math we need to write with Math.(that function name )
// Let's understand the random keyword in javascript 
//console.log(Math.floor(Math.random()));
// Random function gives you value from 0 to 0.999999999999

// let's print the dice 
//console.log(Math.floor(1 + Math.random()*6))

let min = 10 ;
let max = 20 ;
// Let's we need to print value from 10 to 20 
console.log(Math.floor(Math.random()*(max-min+1)) + min) // to avoid 0 condition we add 1 

