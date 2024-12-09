/*
Importent Notes :
1). Iska istamal humlog 
*/




let arr = [ 56 , 93 , 35 , 63 , 57 , 35 , 29 , 37 , 93 , 71 ];

// 1st_way :---
// let sumOfAllArrayNum = arr.reduce((preVal , curVal)=> preVal + curVal , 0);

// 2nd_way :---
let sumOfAllArrayNum = arr.reduce((previousValue , currentValue)=>{
    return previousValue + currentValue;
},0);

console.log(sumOfAllArrayNum);



