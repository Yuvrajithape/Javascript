// This keyword reference to the current context 
const info = {
    name : "Yuvraj",
    add : "Pune",
    engin: function()
    {
        console.log(`${this.name} , is good boy `); // this keyword refer current context 
        console.log(this);
    }
   
    
}
//console.log(this);
info.engin();
console.log(info.add);

// Let's discuss arrow function in Js 
// In arrow function we replace function keyword to arrow sign 
const addnum  =  ( num1 , num2 ) =>
{
    return num1 + num2 ;
}
// for avoid return in function then another way is 
const sumofnum = (num1 , num2) =>(num1 + num2);
console.log(sumofnum(41 , 20));