// Javascript is Case sensitive language 
// Upperleeter and lowerleeter treated as differently 
// String is collection of charater 
//const name = "Yuvraj";
const post = "Software Developement"

//console.log(`Hii Everyone my name is ${name} , i'm  aspiring for ${post}`)  // Use this method for String Concatenation 

// String is an object 
//console.log(name[3])

// String creation : we Can create a string in given way 
/*const n = new String("Yuvraj Ithape         ");
console.log(n.toUpperCase())
console.log(n.toLowerCase())
console.log(n.trim());

console.log(n.charAt(4));
console.log(n.indexOf('Z'))  // if charater is not present in string then index written as -1 
/*console.log(n.replace('Ithape' ," Software Developer"))
console.log(n)
console.log(n.includes(""))*/

// In JavaScript to make comments format is similar with cpp 

//console.log(`Yuvraj ${'Ithape'}`)

// let's understand the spilt function work 
const bio = " My name is Yuvraj i'm from Ashti"
const word = bio.split(' ');
console.log(word[5]);
const name = "Yuvraj";
console.log(name.slice(-5 , 4))  // Including excluding 
// slice allows negative value  
console.log(name.substring(-5,4)) // Substring does not allow negative value . negative value considered as 0 is substring  




