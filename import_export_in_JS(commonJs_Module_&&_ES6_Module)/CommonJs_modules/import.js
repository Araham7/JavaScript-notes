/* 
// (1). Importing only one function using commonJS_module :---
const hello = require('./export.js') ; 
hello() ; // Callong the single function from the module . 
*/ 

/* ************************************************************************************************ */

/* 
// (2). Importing multiple function using commonJS_module :---
// We are using here "Object_Method" to access moduleFunction(object_method) : 
const myModule = require('./export.js') ; 
myModule.hello() ; 
console.log(myModule.extraOrdinaryHello("Waah Kya baat hai !")) ; 
*/ 

/* ************************************************************************************************ */

/* 
(3). Importing multiple function using commonJS_module :--- 
// We are using here "Object_Destructaring" to access modulesFunction(exported_function) : 
 */ 
const { hello , extraOrdinaryHello  } = require('./export.js') ; // Applying object destructure to access module function . 
console.log(hello()); ; 
console.log(extraOrdinaryHello('Araham Abeddin !'));
console.log(extraOrdinaryHello('Arefa Aabedin !'));
console.log(extraOrdinaryHello('Arefa Aabedin !'));
console.log(extraOrdinaryHello('Pari !'));




