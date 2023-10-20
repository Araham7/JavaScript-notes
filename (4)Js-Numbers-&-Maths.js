/* -----------------------Javascript Numbers------------------------*/

const currentBalance = new Number(951.1235235) ; //   Ye specially hame Number wala objct dega.
console.log(currentBalance);   // OUTPUT :   [Number: 951.1235235]
console.log(currentBalance.toString().length); // Ye 'currentBalance' ko sabse pehle string banayega phir uska length nikal karke dega.
console.log(currentBalance.toFixed(3)); // "currentBalance.toFixed(3)" ye kisi floating point number(currentBalance) ko , three decimal places tak hi dega( ye hame "currentBalance" ke sirf 3 decimal places tak dega , yadi 4th decimal 5 ya 5 se bada hai to 3rd decimal me ek badha karke dega aur yadi , 4th decimal 5 se chota hai to 3rd decimal tak ko as it is da_dega ).

const otherNumber = 123.8245
console.log(otherNumber.toPrecision(5));  //Output : 123.82
console.log(otherNumber.toPrecision(4));  //Output : 123.8
console.log(otherNumber.toPrecision(2));   // OUTPUT : 1.2e+2

// const nmberCount = 1000000000 ;
// console.log(nmberCount.toLocaleString());   //Output : 
// console.log(nmberCount.toLocaleString('en-IN'));   //Output : 


/* ++++++++++++++++++++++++ Javascript Maths +++++++++++++++++++++++++++++ */

console.log(Math);   // OUTPUT : Object [Math] {}
const negativenum = -457 ;
console.log(Math.abs(negativenum));    // Math.abs ==> Ye hame kisi bhi given number ka magnitude(Positive bana kare) deta hai.

                                //   Math.round()
/* Math.round() : Ye hame integer deta hai , yadi decimal ke baad ka number 5 se jyada hai to ye integer part me ek number add karke dega aur yadi decimal ke baad ka number 5 se chota hai to ye integer part ko as it is dedega . */
console.log(Math.round(4.4));   // OUTPUT : 4
console.log(Math.round(4.6));   // OUTPUT : 5


console.log(Math.ceil(9.0)); //  agar decimal(.) ke bad wala part 0 se bada hoto , "Math.ceil(fractional_number)" Ye hamesa 'top wali value(jo integer hai usse jyada)' deta hai , nahito sirf integer valuehi dega .
console.log(Math.ceil(9.2));   // //OUTPUT : 10


console.log(Math.floor(420.9));   // ye kisi number ki "floor wali value" deta hai matlab ki jo kisi number ka integer part hai bas usiko deta hai .

console.log(Math.min(9 , 12 , 15 ,108 , 420)); // "Math.min(9 , 12 , 15 ,108 , 420)" ===> Ye hame 'Math.min()' ke andar pass kiye gaye comma saparated number mese sabse chota wala number deta hai .

console.log(Math.max(9 , 12 , 15 ,108 , 420));// "Math.max(4, 3, 6, 8)" ===> Ye hame 'Math.max()' ke andar pass kiye gaye comma saparated number mese sabse bada wala number deta hai .

console.log(Math.random()); // Ye hame 0 se 1 tak ke sare fractional values dega.
// console.log((Math.random()*10) + 1); //   Ye hame 1 se 10 tak ki sari fractional valuse ko dega.
console.log(Math.floor(Math.random()*10) + 1); // Ye hame 1 se 10 tak ki sari integer values ko dega .

// getting a desired number between the min and max numbers(i.e , the range of given numbers) :
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // ye hame 10 se 20 ke tak ke numbers ko dega.


