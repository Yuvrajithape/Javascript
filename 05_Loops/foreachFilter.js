// Foreach and filter 
const arr = [1,2,3];
// printing all element in arr using foreach 
//The forEach() method of Array instances executes a provided function once for each array element.
//arr.forEach((element , index , array) => console.log(element , index , array));


//arr.forEach(function(element)  {console.log(element)});


// CallBackiN function 
// The forEach() method is an iterative method. It calls a provided callbackFn function once for each element in an array in ascending-index order.
const myobj = {
    'c++' : "CPP",
    'Js' : "Javascript",
    'Py' : "Python"
}
//myobj.forEach((i) => console.log(i));


// write a code for sum of array 
// let sum = 0 ;
// for(let i = 0 ; i < 3 ; i++)
// {
//     sum = sum +  arr[i];
// }
// console.log(sum);



// const newnum = arr.filter((ele) => {
//    return ele > 50 ;  
// });

// const newnums = arr
//                .map((num) => num*10)
//                .map((num)=> num+1)
//                .filter((num) => num > 20);
// console.log(newnums);

// Reduce 
const ans = arr.reduce(function(acc , curr)  {
return acc + curr;
} , 0);
console.log(ans);