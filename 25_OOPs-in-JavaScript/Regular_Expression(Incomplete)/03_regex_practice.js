// let regEx = /[a-z]@/gi ;
// /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
let regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g


// let strToCheck = "RegExr was created by gskinner.com. Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.The side bar includes a Cheatsheet, full Reference, and Help. You can also Save & Share with the Community and view patterns you create or favorite in My Patterns.Explore results with the Tools below. Replace & List output custom results. Details lists capture groups. Explain describes your expression in plain English."

let strToCheck = "arahamabeddin7@gmail.com" ;

console.log(strToCheck.match(regEx));




