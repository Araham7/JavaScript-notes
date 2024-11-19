                                                  // Array

const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);

const myHeors = ["shaktiman", "naagraj"]
console.log(myHeors);

const myArr2 = new Array(1, 2, 3, 4 , 'abc')
console.log(myArr2);
console.log(myArr[0]); // istarhese 'myArr2' ke 0th index wale element ko access kiya jata hai.





/* +++++++++++++++++++++++++++++++ Array methods ++++++++++++++++++++++++++++++ */


// (1) ".push()"
myArr.push(6) //iska use karne se "myArr" ke end me ek aur element(6) jur jayega .
console.log(myArr);
myArr.push(7,8,12,52,"Aasayen") //iska use karne se "myArr" ke end me ek hi bar me ' 7,8,12,52,"Aasayen" ' itne saren elements jur jayenge .
console.log(myArr);

// (2) ".pop()"
myArr.pop() // Iska use karnese "myArr" ke end se ek element delete hojayega .
console.log(myArr);


// (3) ".unshift()"
myArr.unshift(9) //Ye "myArr" ke left-side(starting) me ek element ko add kardega .
console.log(myArr);
myArr.unshift(250,645,246,"Abeddin");   //Ye "myArr" ke left-side(starting) me {250,645,246,"Abeddin"} elements ko add kardega .
console.log(myArr);

// (4) ".shift()"
myArr.shift()  //Ye "myArr" ke left-side(starting-side) me ek element ko delete kardega .
console.log(myArr);

// (5) ".includes(9)"
console.log(myArr.includes(9)); // This will check weather "myArr" , inludes '9' or not , if it includes '9' it will print 'true' if it does not include '9' it will print 'false' .

// (6) ".indexOf(2)"
console.log(myArr.indexOf(2)); // Ye '3' ka index batyega , aur agar ".indexOf()" ke andar likha gaya element 'myArr' me nahi hoga to ye "-1" print karega .

// (7) ".join()"
const newArr = myArr.join() // Ye "newArr" me "myArr" ke sare elements ko comma saparater laga karke string me convert kaardega . lekin origional array me koi bhi priwartan nahi aayega .
console.log( newArr);   // OUTPUT : 0,1,2,3,4,5,6,7,8,12,52
console.log(typeof newArr);   // OUTPUT : string





/* ++++++++++++++ "slice()" and "splice()" methods in Javascript +++++++++++++++++++++++ */

console.log("A ", myArr);

/*                         "slice()"                         */

const myn1 = myArr.slice(2, 6);   // Ye hame "myArr" ke 2nd index se (6-1)th = 5th index tak ke sare elements ko dega , lekin isme origional array same hi rahega matlabki original array(myArr) me koi pariwartan nahi hoga .
console.log(myn1);
console.log("B ", myArr);





/*                         "splice()"                         */
/* 
IMPORTENE NOTE :---
     // splice(start, deleteCount) ; start ==> Jis index se array ko cut karna start karna hai . ;  deleteCount ==> starting index se kitne number of(counts me) elements ko cut karna hai .
     ***** splice originel array ko change kardeta hai.
*/



const meraArr = [ 0 , 1 , 2 , 3 , 4 , 5 , "Araham" , " Abeddin" , "Tanisha" , "Aabeddin" ];
console.log(meraArr);
const myn2 = meraArr.splice(2 , 5); // Ye "meraArr" ke 2nd index ke bad se(including 2nd index ) 5 number of elements ko delete kardega .
console.log(myn2);
console.log("C ", meraArr);



const lila = [ 7,8,12,52,"Aasayen" ]
console.log(lila)
lila.unshift(65,54,62)
console.log(lila)
lila.shift()
console.log(lila)







