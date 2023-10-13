/* +++++++++++++++++++++++ Javascript Function ++++++++++++++++++++++++ */

// (1). Function that does not takes parameter :---
let myFun1 = function () {
    console.log("Hey i'm a new function. ");
}
myFun1 // This is called "function ka reference" dena.
myFun1()   // This is called "function call(function ko execute karna)".

// (2). Function that takes parameter :---
let mul = function (num1 , num2) {
    let num3 = ( num1 * num2 );
    console.log(num3);
}
mul(56,63)   // OUTPUT : 3528