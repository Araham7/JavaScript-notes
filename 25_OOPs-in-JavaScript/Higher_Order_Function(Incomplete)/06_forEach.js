/*
Importent Note : "array.forEach" loop "dose not return any value".
*/

// Normal function inside the forEach loop :---
let arr1 = [56 , 63 , "araham" , "abeddin" , 986 , 324 , "56" , 32];
arr1.forEach(function (element , index , array) {
    console.log("This is inside the array_1 >" , element , index , array, "\n");
});

// Arrow function inside the forEach loop :---
let arr2 = ["human", "insan", "aadmi", "sumit", "jindagi"];
arr2.forEach((element , index , array)=>{
    // console.log("This is inside the array_2 >" , element , index , array, "\n");
    // element.toUpperCase();
    console.log(element.toUpperCase());
});


// 