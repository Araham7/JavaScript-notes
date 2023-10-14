/**
NOTE : 
***** We ca insert as many "else-if" as want between "if" and "else".
***** Hum jitna chahe utna "else-if" ka prayog "if" aur "else" ke bech me karsaten hai.
 */

// (1). if-else :---
// if (condition) {
//     // statement:
// } else {
//     // statement;
// }



// (2). if-elseif-else
// if (condition1) {
    
// }else if(condition2){

// }else{
    
// }


/* ------------------ (if-else) ------------------- */
const isUserloggedIn = true
const temperature = 41

if ( temperature < 50 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}
console.log("Execute");

/* ------------------------------------------ */
const score = 200
if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}else{
    console.log("You can't fly .");
}



/* *************************** */
// istarhese humlog bina {} lagaye huwe if lause karsakten hai bas statements ko , se saparate kardenge
const balance = 1000
// if (balance > 500) console.log("test"),console.log("test2");
/* *************************** */



/* ++++++++++++++++++++++++++++++++++++++++++++++ */
let tolerance = 600 ;
if (tolerance < 500) {
    console.log("less than 500");
} else if (tolerance < 750) {
    console.log("less than 750 and greater than 500");
} else if (tolerance < 900) {
    console.log("less than 900 and greater than 750");
} else {
    console.log("greaterthan 900");
}
/* +++++++++++++++++++++++++++++++++++++++++++++++ */



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if (userLoggedIn && debitCard && !loggedInFromGoogle) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail ) {
    console.log("User logged in");
}