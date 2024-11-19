/* ------------ While loop ----------- */
/*

variable declarattion
while (condition) {
   ( variable updation )
   ( program_logic )
}

*/

// (1).
let i = 0 ;
while (i<10) {
    i++ ;
    console.log(i);
}
/*
OUTPUT :---
1
2
3
4
5
6
7
8
9
10
*/

// (2).
let myArray = ['flash', "batman", "superman"]

let arr = 0
while (arr < myArray.length) {
    arr = arr + 1
    console.log(`Value is ${myArray[arr]}`);
}
/*
OUTPUT :---
Value is batman
Value is superman
Value is undefined
*/