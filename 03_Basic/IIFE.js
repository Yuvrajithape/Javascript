// Immediately invoked function Expression 
// this type of function is used when Global Scope ke Pollution se problem hotee hai uss pollution ko avoid karne ke leye we use Immediate invoked function 

(function char(name)
{
    console.log(`My name is  ${ name }`);
})("Yuvraj");
// for creating another immediate invoked function we need to assign semicolon to last IIFE

((name) =>{
    console.log(`My name is ${name}`);
})("Yuvraj")

/// ********* Javascript Execution Context **********////////
/*

There are three exection context 
1. Global exection context 
2. Function execution context 
3. Eval execution context 

({}) our whole programm is divided into two categaories 
1. Memory execution phase 
2. Execution phase 


In memory execution phase we just create space for variable and in exection phase we assign value to variable and perform further process ..... ! 


for function == > it declare as (Defination ) then -- another New variable and Exection Thred is created 









*/