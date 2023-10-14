/* ++++++++++++++++++++++ (1). "setTimeout()" ++++++++++++++++++++++ */

// (i). First way of using "setTimeout()" :---
setTimeout( ()=> {
    console.log("My name is Araham Abeddin .");
} , 500 );

// (ii). Second of using "setTimeout()" :---
let funTwo = ()=> {
    console.log("My father name is Anwar Hussain .");
}
 // set time out execution .
setTimeout( funTwo , 2000 );   // "setTimeout" ka first parameter 'function ka refrence(funTwo) / purara function'





/* ++++++++++++++++++++++ (2). "setInterval()" ++++++++++++++++++++++ */
// (i) first  way of using "setInterval()" :---
// setInterval( ()=>{
//     console.log("Im a good boy! ");
// } , 2000 );





// (ii) first  way of using "setInterval()" :---
// let funThree = ()=>{
//     console.log("Im a bad boy! ");
// }
// setInterval( funThree , 500 );

/* ++++++++++++++++++++++++++ (3). "clearTimeout()" ++++++++++++++++++ */
// clearTimeout