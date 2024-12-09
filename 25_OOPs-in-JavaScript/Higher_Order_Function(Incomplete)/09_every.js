/*
Important Note :---
This method is basically used to chech the data types of every element of an array.
*/

const arr = [35 , 63 , 48 , 39 , 69 , 96 , 108 , 512 , "852"];

// This function will check weather all the array elements are number or not .(if all the array emenets are number then it will return true if not it will return false).
const dataNumberType = arr.every((element)=>{
    return typeof(element)==="number";
});

console.log(dataNumberType);





