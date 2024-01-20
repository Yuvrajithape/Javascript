// we have three types of variabel 
// var , let , const 
// we use only const and let variable 
// not prefer to use var because of issue in block space and function space 
// only use let and const variable.............

var stu_name = "Yuvraj";
let rollno = 46 ;
const city = "daund" ;
country = "india"

console.table([stu_name , rollno , city , country]);

if (rollno > 5) { 
    let stu_name = "sharma";
    console.table([stu_name , rollno , city , country]);
}
console.table([stu_name , rollno , city , country]);
