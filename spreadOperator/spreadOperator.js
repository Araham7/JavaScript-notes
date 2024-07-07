const arry1 = [1,2,3,4,5]
const arry2 = [6,7,8,9]

const arry3 = arry1.concat(arry2);
console.log(arry3); // OUTPUT : [1, 2, 3, 4, 5, 6, 7, 8, 9]

const arry4 = [ arry1 , arry2]
console.log(arry4); // OUTPUT : [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9 ] ]



                        // (1)Sprad operator :---

const arry5 = [...arry1 , ...arry2] ;
console.log(arry5); 
// OUTPUT : 
// [
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9
//   ]

/*
NOTE :---
           
...arry1 = 1, 2, 3, 4, 5 
...arry2 = 6, 7, 8, 9
           
*/
