/*
Important Notes :---
1). "array.find()" method , return kiye gaye condition ko satsfy karne wale first element ko hi return karega.
2). "array.find()" method is used to search for an element in an array that satisfies a specific condition (provided by a function) and returns the first occurrence of that element."If no elements satisfy the condition, it returns undefined".
3). 
*/


let num = [56 , 69 , 73 , 96 , 108 , 210 , 321 , 413 , 512 , 613 , 701 , 812 , 900];

// num.find((element , index , array)=>{
//     console.log(element , index , array);
// })

let result = num.find((element)=>{
    return element>500;
});

console.log(result);