let score = "35" ;
console.log(score) ;
console.log(typeof score);   // OUTPUT : String

// (1).converting into "Number" :---
let strToNum = Number(score) ;   // converting into "number" .
console.log(typeof strToNum);   // OUTPUT :  Number



// (2).converting into "String" :---
let num = 153 ;
console.log(typeof num);   // OUTPUT : Number
let numToStr = String(num) ;   // converting into "string" .
console.log(typeof numToStr);   //OUTPUT : String



// (3).converting into "Boolean" :---
let num_1 = 56 ;
console.log(typeof num_1);
let numToBool = Boolean(num_1) ;   // converting into "Boolean" .
console.log(typeof numToBool);   //OUTPUT : Boolean
console.log(numToBool); // this will print 'true' .

console.table([ score , strToNum , num , numToStr , num_1 , numToBool ]);