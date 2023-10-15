/* ********** For_of *********** */

/* 
NOTE : 
****** Only "map" and "arrays" are ittaratable using "for-of" loop .
****** "Objects" are not ittaratable using "for-of" loop .
*/

// for of loop : Iska prayog "array ka elements ko ( object ke keys ya values ko )" nikalne(access) keliye kiya jata hai.

/* ***************************
for (const iterator of objectName ) {
    console.log(iterator);
}
// iterator : Jis naam se array ke "elements" ko access kana hai .
// objectName : Wo array ka naam , jiske elements ko hame access karna hai.
*************************** */

// (1).
let arr = [1, 2, 3, 4, 5]
for (const iterator of arr) {
    console.log(iterator);
}
/* ***************
OUTPUT :---

1
2
3
4
5
    ********** */



/* **************************************** " Map() " ******************************************** */

let meraMap = new Map() ;
// console.log(typeof meraMap);
meraMap.set('name' , 'Araham');
meraMap.set('collegeYear','3rd');
meraMap.set('IN','India');
meraMap.set('USA' , 'United States of America');


console.log(meraMap);
/*
OUTPUT :---

Map(4) {
    'name' => 'Araham',
    'collegeYear' => '3rd',
    'IN' => 'India',
    'USA' => 'United States of America'
}
*/
console.log(meraMap.keys());   // OUTPUT : { 'name', 'collegeYear', 'IN', 'USA' }
console.log(meraMap.values());   // OUTPUT : { 'Araham', '3rd', 'India', 'United States of America' }



// (2).
for (const iterator of meraMap ) {
    console.log(iterator);
}
/*
OUTPUT :---

[ 'name', 'Araham' ]
[ 'collegeYear', '3rd' ]
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]

*/



// (3). NOTE : Yanha par map ka "destructure" hogaya hai [ keys , values ]  ===> "keys" me map ka sara key store hojayga aur values me map ka sara values store hjayega .
for (const [ keys , values ] of meraMap) {
    console.log(keys);
    // console.log(values);
}
/*
OUTPUT :---

name
collegeYear
IN
USA

*/


// (4).
for (const [ keys , values ] of meraMap) {
    console.log(values);
}
/*
OUTPUT :---

Araham
3rd
India
United States of America

*/
