/* ********************* For-in ************************ */

/*
NOTE : 
*** for-in hamesha humlogon ko object_ka_keys aur array_ka_index deta hai .
***** "for-in" loop ka prayog humlog "Object" aur "Array" dono ke santh karsakten hai .
***** "for-in" loop hamesa key(object ka) / index(array ka) output me deta hai .
***** "Map()" ke santh "for-in" loop ka prayog nahi hota hai .
 */

/* 
for (const objKey in objName ) {
    console.log(objKey);
}   // OUTPUT : Ye hame "objName" naam ke 'object' ke sare keys ko print kardega.
*/

let myObj = {
    "cpp" : "C++ " ,
    "py" : "Python" ,
    "c" : "C" ,
    "js" : "JavaScript" ,
    "swift" : "Swift"
}

// (1).
for (const key in myObj) {
    console.log(key);
}
/* *****************
 OUTPUT :---

cpp
py
c
js
swift

******************** */


// (2).
for (const key in myObj) {
    let myObjVal = myObj[key] ;
    console.log(myObjVal);
}
/* 

OUTPUT :---

C++ 
Python
C
JavaScript
Swift

*/

// (3).
let myArr = ["araham" , "abddin" , true , 786] ;
for (const key in myArr) {
    console.log(key);
    console.log(myArr[key]);   //
}
/* ****************
OUTPUT :---

0
1
2
3

***************** */
