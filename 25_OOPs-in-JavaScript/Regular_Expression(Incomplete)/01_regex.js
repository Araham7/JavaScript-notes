// const strToFind = /pw/gi;

const pattern  = 'pw';
let flag = 'gi'; /*  g => globally , i => case insensetively */



/* 1st way of making regular expression :--- */
let regExOne = new RegExp(pattern);



/* 2nd way of making regular expression with flag :--- */
let regExTwo = new RegExp(pattern , flag);



/* 3rd way of making regular expression :--- */
let regExThree = /pw/gi;

let strToCheck = "pw is growing at rapid speed and recentely they are working on pwskills based pwcontent"

console.log(regExOne.test(strToCheck)); // true
/*
OUTPUT :
true
*/

console.log(regExTwo.test(strToCheck)); 
/*
OUTPUT :
true
*/

console.log(strToCheck.match(regExOne));
/*
OUTPUT :
[
  'pw',
  index: 0,
  input: 'pw is growing at rapid speed and recentely they are working on pwskills based pwcontent',
  groups: undefined
]
*/

console.log(strToCheck.match(regExTwo));
/*
OUTPUT :
[ 'pw', 'pw', 'pw' ]
*/

console.log(strToCheck.match(regExThree));
/*
OUTPUT :
[ 'pw', 'pw', 'pw' ]
*/



