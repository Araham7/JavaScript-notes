/* ***************************** "Map()" ******************************* */

/* *********************************
In JavaScript, the Map object is a collection of key-value pairs where both the keys and the values can be any data type, unlike regular objects where keys are typically strings or symbols. A Map maintains the insertion order of keys and is more efficient for frequent additions and deletions of key-value pairs compared to a regular object.
*********************************** */

// Map() : Ye 'Map()' , 'object[]' ke tarha hi "key-values pair" me data ko store karta hai , lekin object me repetation allowed hota hai magar "Map()" me koi bhi repetation allowed nahi hota hai .
/*
 NOTE :---
 ***** map me jis order me "key-value pairs" ko dala jata hai usi order me map me data store rehta hai.
 ***** Objec me repetation allowed hai aur isme bhi jis order me "key-value pairs" ko dala jata hai usi order me object me data store rehta hai.
 */

let meraMap = new Map() ;
// console.log(typeof meraMap);
meraMap.set('name' , 'Araham');
meraMap.set('collegeYear' , '3rd');
meraMap.set('IN' , 'India');
meraMap.set('USA' , 'United States of America');
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
