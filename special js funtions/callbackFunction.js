/*------------------------------------callback function----------------------------------------*/
/* NOTE :---
*** Callback Function = Is function ka use ek hi function se dusre sare function ko call karneke keliye liya jata hai . */


// Exmple :---

//Here we are defining "addition function" :---
const sum = (a,b)=>{
    let c = (a+b) ;
    return c ;
};

//Here we are defining "difference function" :---
const dif = (a,b)=>{
    let c = (a-b) ;
    return c ;
}

//Here we are defining "multiplication function" :---
const mul = (a,b)=>{
    let c = (a*b) ;
    return c ;
}

//Here we are defining "division function" :---
const div = (a,b)=>{
    let c = (a/b) ;
    return c ;
}

/* 
    NOTE :---
    ******* Call_back_function = A function calling different function .
*/

// callback function :---
let callback = (fx , a , b)=>{
    return fx(a,b);
};

//(1)
let num1 = 53 , num2 = 2 ;
sum_of_two_num = callback(sum , num1 , num2 ) ;
// console.log(sum_of_two_num);
console.log(`The Summation of two numbers ${num1} and ${num2} = ${sum_of_two_num}`);
// OUTPUT : The Summation of two numbers 53 and 2 = 55



// (2)
let num3 = 56 , num4 = 22 ;
dif_of_two_num = callback(dif , num3 ,  num4 ) ;
// console.log(dif_of_two_num);
console.log(`The Substraction of two numbers ${num3} and ${num4} = ${dif_of_two_num}`);
// OUTPUT : The Substraction of two numbers 56 and 22 = 34



// (3)
let num5 = 19 , num6 = 108 ;
mul_of_two_num = callback(mul , num5 , num6) ;
// console.log(mul_of_two_num);
console.log(`The Multiplication of two numbers ${num5} and ${num6} = ${mul_of_two_num}`);
// OUTPUT : The Multiplication of two numbers 19 and 108 = 2052



// (4)
let num7 = 973 , num8 = 35 ;
div_of_two_num = callback(div , num7 , num8 ) ;
// console.log(div_of_two_num);
console.log(`The Division of two numbers ${num7} and ${num8} = ${div_of_two_num}`);
// OUTPUT : The Division of two numbers 973 and 35 = 27.8