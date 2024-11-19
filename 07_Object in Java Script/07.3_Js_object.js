/* +++++++++++++++++++++ Destucture of an Object ++++++++++++++++++++ */

/* 
"Destucture of an Object" ===> Iska prayog , wojo Java-Script ke "Object" ke kisi element ke value ko access karnekeliye humlog jo "ObjectName.ObjectKeyName" ka bar-bar istamal karten the usse bachne ke liye kiyajata hai .
*/

/* 
    IMPORTENT NOTE :---



    (1). First Way of destructuring of an object :---

    const { ObjectKeyNameThatYouWantToAccess } = ObjectName  // Desturctaring of an object
    console.log(ObjectKeyNameThatYouWantToAccess); //It will print the "ObjectKeyNameThatYouWantToAccess".



    (2). Second Way of destructuring of an object :---

        const { ObjectKeyNameThatYouWantToAccess : jisNaamSeAapObjectKeKeyKoCallKarnaChahteHo } = ObjectName  // Desturctaring of an object
        console.log(jisNaamSeAapObjectKeKeyKoCallKarnaChahteHo);   // It will print "ObjectKeyNameThatYouWantToAccess".
*/


const meraObj = {
    fullName : "Araham Abeddin" ,
    "college Id" : 1273030381 ,
    currentStudingYear : "3rd" ,
    gender : "MALE"
}

console.log(meraObj);   // OUTPUT : It will print the whole object key-value pairs of an object(i.e , meraObj) .
// An ordinary way of accessing the value of an object .
console.log(meraObj.fullName);   // First ordinary way of accessing the "value" of an object . 
// OUTPUT : Araham Abeddin

console.log(meraObj['college Id']);   // Second ordinary way of accessing the "value" of an object .
// OUTPUT : 1273030381

//First way of the destructuring of an object :---
const {gender} = meraObj ;
console.log(gender);   // OUTPUT : MALE

//Second way of the destruturing of an object :---
const {currentStudingYear : Year} = meraObj 
console.log(Year);   // OUTPUT : 3rd