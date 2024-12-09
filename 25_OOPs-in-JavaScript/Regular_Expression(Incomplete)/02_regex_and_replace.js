let strToCheck ="pw is growing at rapid speed and recentely they are working on pw skills based pwcontent";

let regEx = /pw/gi; // assigning regular expression.

// (1).
let replacedStr = strToCheck.replace(regEx , "p_w");
console.log(replacedStr);
/*
OUTPUT:
p_w is growing at rapid speed and recentely they are working on p_w skills based p_wcontent
*/

/* ************************************************************************************************** */


let webUrl = "http://zxts.com/abcd%20pqr";


// (2).
const useableUrl_1 = webUrl.replace(/%20/gi , "@");
console.log(useableUrl_1);
/*
OUTPUT:
http://zxts.com/abcd@pqr
*/


// (3).
const useableUrl_2 = webUrl.replace(/%\d\d/gi , "-");
/*
/\d\d/gi

1). \d => integer.
2). g => global.
3). i => case insencitive.
*/
console.log(useableUrl_2);
/*
OUTPUT:
http://zxts.com/abcd-pqr
*/








