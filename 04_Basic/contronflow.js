// Control flow statement : controlling the code . control flow statement like as if elses , switch 
// === strictly check operator 
const balance = 1000
if( balance === 1000)
{
    console.log("Balance is equal to \n 1000" )
}

// Logical Operator && , || , ! 
// switch is extended version of if else statement . in cpp string can'not be use in switch statement but in case js we can use string as type in switch case statement 

const type = "Integer"
/*switch(type)
{
    case "Integer":
         console.log("Integer type of data and 4 byte memory is requrired ");
         break;
    case "Float":
         console.log(" Float type of data it required 4 byte of memory ") ;
         break;
    default:
        console.log("can't finding data type ");

}*/

// Nullish Coalscing Operator (??) this operator is used for NULL or Undefined data 
// when we get data from server is the data is NULL or Undefined that time we don't want to this for avoiding this type of condition we mostly use Nullish coalscing Operator 
const val = null?? 10 ;
console.log(val);  // the value is geting 10 it avoiding null value is work similary when it comes to  undefined operator 