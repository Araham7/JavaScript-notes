/*
NOTE :---
*****
let arrayName = [ 1, 2, 3, 4, 5, 6 ]
let totalVal = arrayName.reduce(( accumulator , currentvalue )=>{
    return ( accumulator + currentvalue )
}, initial_Value_of_accumulator )
console.log(totalVal);
*/


let myNum = [ 1, 2, 3, 4, 5, 6 ] ;

// (1).
let totalVal = myNum.reduce(function( accumulator , currentvalue ){
    console.log(`The preasent value of "accumulator" : ${accumulator} and "currentvalues" : ${currentvalue}`);
    return accumulator + currentvalue
}, 0 )
console.log(totalVal);
/*
OUTPUT :---

The preasent value of "accumulator" : 0 and "currentvalues" : 1
The preasent value of "accumulator" : 1 and "currentvalues" : 2
The preasent value of "accumulator" : 3 and "currentvalues" : 3
The preasent value of "accumulator" : 6 and "currentvalues" : 4
The preasent value of "accumulator" : 10 and "currentvalues" : 5
The preasent value of "accumulator" : 15 and "currentvalues" : 6
21

*/



// (2).
newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let totalSum = newArr.reduce((accu , currentval)=> accu + currentval , 0 )
console.log(totalSum);
/*
OUTPUT :---

55

*/
