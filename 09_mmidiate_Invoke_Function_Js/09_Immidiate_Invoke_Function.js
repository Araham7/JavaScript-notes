/* ++++++++++++++ "Immediately Invoked Function Expressions (IIFE)" ++++++++++++++++ */

/* (()=>{
    function_dafinition
})() // function call */

/* NOTE:---

***** Iska prayog global variable ke pollution se bachne ke liye Kiya. Aur hamare function ko immediately(turant) execute(run) karwane ke liye Kiya jata hai.
***** (Function definition)(execution) // Example of "Immediately Invoked Function Expressions"
first () me function ka definition likha jata hai ,
second () me ham log function ko call karte hain isi ke andar chahe to function ka parameter bhi dal sakten hai .

 */





/* ---------- (1). Named "Immediately Invoked Function Expressions(IIFE)" ---------- */
(function chai(){
    console.log(`DB CONNECTED`);
})();   //  NOTE : Yadi hame do ya dose adhik "Immediate Invoke Function Expressions (IIFE)" ka use karna hai to hame previous sare "Immediate Invoke Function" ke ant me terminator ";" lagaya jata hai.





/* --------- (2). Immediate invoce function expression(IIFE) taking string --------- */
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('araham');



/* ---- (3). Immediate invoce function expression(IIFE) taking taking integer parameter ---- */
((num1,num2)=>{
    let num3 = num1 + num2 ;
    console.log(num3);
})(29,63)
