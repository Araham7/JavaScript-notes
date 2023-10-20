// "Nullish Coalescing Operator(??)" ===> Is operator(??) ka prayog humlog data base se aaye huwe response ko show karne keliye karten hai. agar response null ya undefined rahta hai to ye ?? ke aaspas ke "non-null / non-undefined" value ko return kardeta hai.

let val1 ;

// (1).
val1 = null ?? 10
console.log(val1);   // OUTPUT : 10

// (2).
val1 = null ?? undefined ?? 32
console.log(val1);   // OUTPUT : 32

// (3).
val1 = undefined ?? 15
console.log(val1);   // OUTPUT : 15

// (4).
val1 = null ?? 10 ?? 20
console.log(val1);   // OUTPUT : 10

// (5).
val1 = 5 ?? 37
console.log(val1);   // OUTPUT : 5

// (6).
val1 = 420 ?? null
console.log(val1);   // OUTPUT : 420


/* ****************************************************************************************************************************************** */
const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;

const valA = undefined ?? nullValue;
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;

console.log(valA);   // OUTPUT : null

console.log(typeof valB);   // OUTPUT : string
console.log(valB);   // OUTPUT :            ===> Ye kuch bhi nahi print karega jiska matlab hai ki ye empty-string(" ") ko print karega .

console.log(valC);   // OUTPUT : 42

console.log(55??66);   // OUTPUT : 55



