/*
Important NOTES :---
1). filter method is used when we want to retun the value when some array element saytisfy some condition.
2). Number of returned array by the filter() method can be less less then the originiol number of array elements(because filter method only returs that arraya elements which satisfy the given condition);
3). if wo want to return some array using ".map()" method you should always use "return" keyword to return new array.
*/

let heros = ["pukhraj" , "yamraj" , "amrud" , "mohini" , "shila" , "kamraj" , "namrud" , "mina" , "araham" , "abeddin"];


let nameIncludesRAJ = heros.filter((element , index , array)=>{
    // console.log(element , index , array);
    // return element.includes("raj");
    return element.endsWith("raj");
});


console.log(nameIncludesRAJ);






