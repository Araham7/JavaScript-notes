/* 

NOTE :--- 
***** "Truthy Values" ===> "0" , 'false' , " " , [] , {} , function(){}
***** "Falsy Values" ===> false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

*/

const userEmail = []

// (1).
if (userEmail) {
    console.log("Got user email");
    console.log(userEmail);   // OUTPUT : []
} else {
    console.log("Don't have user email");
}

// (2).
if (userEmail.length === 0) {
    console.log("Array is empty");
    console.log(userEmail.length);   // OUTPUT : 0
}else {
    console.log("Don't have user email");
}

// (3).
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    console.log(Object.keys(emptyObj).length); // OUTPUT : 0
}else{
    console.log("Object having something");
}
