// Let's understand the for in and for of  loops in javascript 


const arr = [1,2,3,4,5,6,7,8,9];
// for(const i of arr)
// {
//     console.log(i*10);
// }
// console.log("For in loop is printed ");
// for(const i in arr)
// {
//     console.log(arr[i]*10);
// }

// *******  The Main difference between for in and for of loop is for in loop gives you index and for off gives you value of array  *********

// In JavaScript, Object s are not iterable unless they implement the iterable protocol. Therefore, you cannot use for...of to iterate over the properties of an object
const myobj = {
    cpp : "C++",
    js : "Javascript",
    py : "Python",
    java : "Java"
}
for(let i in myobj)
{  
    console.log(`${i}  :- ${myobj[i]} ` );
}
// for in loop is mostly used in object .. 

