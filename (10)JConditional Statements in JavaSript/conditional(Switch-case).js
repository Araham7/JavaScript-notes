/* ******************** "Switch Case" ************************ */
// switch (key) {
//     case value:
//         (statement 1)
//         break;
//     case value:
//         (statement 2)
//         break;
//     default:
//         (default statement)
//     break;
// }


/* 
    NOTE :---

        ***** Ham log jab bhi kabhi "case" ka prayog karenge to hame pratek case ke bad me "break" ka prayog karna jaruri hai taki hamare case match karne ke baad statement execute hojaye aur wanhi khatm hojaye , Yadi humlog case me "break" nahi lagayenge to jayse hi koi case match karega wayse hi matched case ka statement ko to run karega hi aur uske santh-santh uske baad ke case ka sara statement ko bhi run kardega(kyunki isme humlogon ne break nahi lagaya hai.)
    ***** default ===> Ye statement tab run karega jab koi bhi case matched naho.
*/

/* ************** (1). Case-1 **************** */

const month = "feb"

switch (month) {
    case "jan":
        console.log("January");
        break; 
    case "feb":
        console.log("feb");
    case "march":
        console.log("march");
    case "april":
        console.log("april");
}   // OUTPUT : feb
//              march
//              april





/* ************** (2). Case with break and default **************** */
let val = 1

switch (val) {
    case 1 :
        console.log("Case 1 is matched");
        break;
    case 2 :
        console.log("Case 2 is matched");
        break;
    case 3 :
        console.log("Case 3 is matched");
        break;
    default:
        console.log("No case is matched");
        break;
}