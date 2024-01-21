// Array 
// array is collection of different types of data items in single variable 
// array is dynamic in nature meanse array can shrik at runtime 
// while passing array it has has created shallow copy 
// shallow copy meanse passing array by reference 

const names = ["Yuvraj" , "Harsh" , "Pravin" , "Rohit"];
/*console.log(names)
names.push("Om");
console.log(names)
names.pop()
console.log(names)
names.unshift("Aman")  // Unshift Push element from Front 
console.log(names)
names.shift();  // Shift Pop element from Front 
console.log(names)*/
//console.log(names.indexOf("Yuvraj"))  // it return index if element is present 
const newarr = names.join();

// Join Keyword is used to convert array into the string 

//console.log(typeof newarr);

// slice and splice understand the difference between them 

const slice1 = names.slice(0,2);
console.log( slice1);
console.log(names);

const splice2 = names.splice(1,3);
console.log(splice2);
console.log(names)

// ****** splice delete the part of array that we get as splice  
// Flat : Return a new array with all sub array elements . concatented into it recursiely up to the specified depth 
