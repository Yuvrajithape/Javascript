// Function : It is set of code to perfrom a specific task 

function addtion(num1 , num2)      // (  ) parameter 
{
    return num1 + num2 ;
}
// we can stored function output in single variable 
 const result = addtion();  // Argument
 //console.log(result);
 //console.log(typeof result);

 function info (username)
 {
    if(!username)
    {
        return " Please enter a username ";
    }
    return ` ${username} is my name  `;
 }
 console.log(info());;

 // Rest OPerator in Function 
 function calculatorpriceofcart(...num1)
 {
    return num1 ;
 }
 console.log(calculatorpriceofcart(10,20,50,60,40));       // it Print all value in array format 