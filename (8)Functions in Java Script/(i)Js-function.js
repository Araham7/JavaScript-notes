/* +++++++++++++++++++++++ Javascript Function ++++++++++++++++++++++++ */

// (1). Function that does not takes parameter :---
let myFun1 = function () {
    console.log("Hey i'm a new function. ");
}
myFun1 // This is called "function ka reference" dena.
myFun1()   // This is called "function call(function ko execute karwana)".

// (2). Function that takes parameter :---
let mul = function (num1 , num2) {
    let num3 = ( num1 * num2 );
    console.log(num3);
}
mul(56,63)   // OUTPUT : 3528

// ----------------------------------------------

// (3).
function sayMyName(){
    console.log("a");
    console.log("r");
    console.log("a");
    console.log("h");
    console.log("a");
    console.log("m");
}
// sayMyName()   // Function call


/* number1 and nuber2 are called "parameters" */
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers   // function ka "referance dena" .
// addTwoNumbers()   // function ka "call karna" .



// *****************************************************


// (4).
function addTwoNumbers(number1, number2){
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


// ******************************************************

// (5).
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("araham"))



// ------------------------------------------------------------------------------------------------
// (6).
// object declaration
const user = {
    username: "hitesh",
    price: 199
}
// function definition
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) ;   //function call



// ----------------------------------------------------

// (7).
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));



// ----------------------------------------------------

// (8).
/*
 NOTE :--- 
 ***** Jab bhi kahi function me ek se jyada bar return aaya hoto usme jo return sabse pehle aaya hai wahi wala return function return kaega . 
 ***** First return ke baad ke sare code ko function execute nahi karega.
*/

function fun1(num1 , num2) {
    return 45 ;
    return num1 + num2 ;   // "Ye return execute hi nahi karega" (Unreachable code) kyuki Isse pehle bhi ek return aaya huwa hai(joki 45 return karta hai. )
}
console.log(fun1(55 , 64));
/*
OUTPUT :---

45
*/

