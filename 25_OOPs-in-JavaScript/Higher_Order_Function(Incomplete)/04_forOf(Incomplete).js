/*
Important Notes :---
(1). "forOf()" method dose not "return" any value.
(2). "forOf()" method is used to ittrate the "array".
(3). "forOf()" method dose not used directely to ittarte object , but to ittrate object using "forOf()" method we use :---
        for (const [keys , values] of Object.entries(myObj)) {
    // console.log(`${keys} : ${values}`);
};
*/


let myArray = [56 , 69 , 73 , 96 , 108 , 210 , 321 , 413 , 512 , 613 , 701 , 812 , 900];


// (1).
for (const element of myArray) {
    console.log(element);
}


let myObj = {
    name: "araham",
    class: "B Tech.",
    collegeId: "21273030381"
}
// (2). ittarating object using for of
for (const [keys , values] of Object.entries(myObj)) {
    // console.log(`${keys} : ${values}`);
};






