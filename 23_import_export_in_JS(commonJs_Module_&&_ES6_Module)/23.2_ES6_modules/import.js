/* ************************************************************************************************ */
/*
// (1). First way of import . 

 // kisi module('javascript_file') ke kuch functions ko import karwana :---
//(a). import { mul } from "./export.js"; // Is tarhe se humlog "mul" function ko use kar_sakten hai .
// let muliply_result = mul(2,5,10);
// console.log("The returned result by the imported multiply function is : " , muliply_result );



//(b). import { mul , devide } from "./export.js"; // is tarhe se humlog "./export.js" ke saren functions ko import karwaten hai .
// let muliply_result = mul(2,5,10);
// let devide_result = devide(53,7);
// console.log("The returned result by the imported multiply function is : " ,muliply_result );
// console.log("The returned result by the imported divide function is : " , divide_result );



//(c). import { mul as multiply , devide } from "./export.js"; // Is tarhese humlog ('mul' ko 'multiply' ke rup_me) use kar sakten hai . 
// let muliply_result = multiply(2,5,10);
// let divide_result = divide(53,7);
// console.log("The returned result by the imported multiply function is : " ,muliply_result );
// console.log("The returned result by the imported divide function is : " , divide_result );



// (d). import { mul as multiply , divide as divi } from "./export.js";
// let mul_result = multiply(2,5,10);
// let divide_result = div(49,9); 
// console.log("The returned result by the imported multiply function is : " , mul_result );
// console.log("The returned result by the imported divide function is : " , divide_result );

*/

/* ************************************************************************************************ */

/*

// (2). Second way of import . 
// import { add , subs , mul , devide } from "./export.js";
console.log(add(5,6,9));
console.log(subs(35,21));
console.log(mul(93,71));
console.log(devide(108,95));

*/

/* ************************************************************************************************ */

// (3). Third way of import .
import mathFunctions from "./export.js" // Yanha par humlog "mathFunctions" naam se "export.jsx" module ko import kar rahen hai . 
// const { add : addition , mul : multiplication , divide : devision , subs : substraction } = mathFunctions ; // de_stuctaring "mathFunctions" 
const {subs : substraction , add : addition , divide : devision , mul : multiplication } = mathFunctions ; // Order is not important but funtion/variable_name should be to the similar to the exported_module(exported_file) variable . 
console.log(addition(5,6,9));
console.log(substraction(35,21));
console.log(multiplication(93,71));
console.log(devision(108,95));
