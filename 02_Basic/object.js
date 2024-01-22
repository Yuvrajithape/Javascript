// Object is instance of class it has some properties 
// Object properties stored in form of curlybracket in key value format 
// singleton object , literals
// Keys can be same while printing updated key printing and values printing well  
 const mysym = Symbol("Mykey1");
const employee = { 
    name :  "Yuvraj  Ithape",
    namee : "Yuvraj  Ithape",
    "company name" : "Google",
    "post" : "Software Developement Engineer",
    email : "yuvraj@google.com",
    [mysym] : "Mykey1"
};

 //console.log(employee)
// console.log(employee.name);
// console.log(typeof employee["company name"]) // This is  best way to Access object instance 
// console.log(employee[mysym])

// symbol is data type which has unique values 

//console.log(employee["company name"])
//Object.freeze(employee);
// after freeze the object no Further changes allowed 
employee["company name"] = "Amazon";
//console.log(employee["company name"]);

employee.greeting = function()
{
    console.log(` hello my name is ${this.name}`);
}
//console.log(employee.greeting())


// const tinder = {} ; // Non Singleton object 
// Object Design using object keyword called as Singleton object 
// const tind = new Object();  
// console.log(typeof tind);

// Assgin value data must 
const college = 
{   
    name : "Yuvraj ",
    age : 21 ,
    course : "Computer science" ,
    pune : {
          
         JSPM : "Thathavde ",
         GHRCEM : "Wagoli" , 
         COEP : "Shivaji Nagar",
         PICT : "Katraj" 
    },
    topper : [
        "Yuvraj "," harsh" , "Pravin" , "Rohit"

    ]
}

//console.log(Object.values(college)); // it gives you all the keys in array format 
//console.log(Object.entries(college));  // All data are came in format of arrays 

// Destructor : to avoid multiple time naming we create destructor 

const {course : c } = college ;
console.log(c);
// In this way we can create and use of destructor 
