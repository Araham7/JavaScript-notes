// const pinkuUser = new Object() /* 1st way of declaring "Object" */

const pinkuUser = {} /* 2nd way of declaring "Object" */

//adding 'key' and 'value' in "tinderUser"===>Object.
pinkuUser.id = "Pinku-Tinku"
pinkuUser.name = "PINKU BABU"
pinkuUser.isLoggedIn = false
console.log(pinkuUser);   // OUTPUT : { id: '123abc', name: 'Sammy', isLoggedIn: false }


/* IMPORTENT NOTE :---
    Humlog ek "Object" ke andar me ek se jyada object ko key-value pair me karke store karsakten hai.
 */
const regularUser = {
    email: "pinku@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Araham",
            lastname: "Abeddin"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);   // OUTPUT : Araham





const objOne = {1: "a", 2: "b"};
const objTwo = {3: "c", 4: "d"};
const objThree = {5: "e", 6: "f"};


// (1). Don'n use this method for merging two or more then two arrays
const combinedArrayContainer = { objOne , objTwo , objThree }
console.log(combinedArrayContainer);   /* OUTPUT: {
                                                    objOne: { '1': 'a', '2': 'b' },
                                                    objTwo: { '3': 'c', '4': 'd' },
                                                    objThree: { '5': 'e', '6': 'f' }
                                                  }
*/





/*-------------- (2). combining two or more then two array using "Object.assign()" method --------------*/
/* NOTE:---
        Object.assign({} , {5,9,12} , {"A" , "B" , "C" , "D"}), ===> Isme jo "first_array" ko argument me dala jata hai usime uske bad ke jitne bhi array ko argument me dala gaya hai sara ka sara array ke elements ko first arraya mehi store kardiya jata hai.
        *** NOTE : to isiliye humlog jab bhi do ya dose jyada array ko assign ki sahayeta se merge karna chahenge to humlog "Object.assign()" ka first arrgument "empty-arry" (i.e, '{}') ko dalenge taki dusre sare array me koi pariwartan naho aur humlogon ko "merge" kiya huwa array bhi prapt hojaye .
*/
/* Object.assign() ===> This method is used to merge two or morethen two arrays.  */
const combinedArrayContaonerUsingAssingMethod = Object.assign({} , objOne , objTwo , objThree)
console.log(combinedArrayContaonerUsingAssingMethod);   // OUTPUT : { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

/*------------------------ (3).sprad operator (...arrayName) -------------------------*/
//sprad operator se 2 ya 2 se adhik arrays ko merge karna .
const mergeArrayUsingSpradOperador = {...objOne , ...objTwo }
// const mergeArrayUsingSpradOperador = {...objOne , ...objTwo , ...objThree}
console.log(mergeArrayUsingSpradOperador);   // OUTPUT : { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }




/* ------------------ NOTE : We can also store array inside the "Object" -------------------- */
const users = [
    {
        id: 1,
        email: "tansha@gmail.com"
    },
    {
        id: 2,
        email: "manisha@gmail.com"
    },
    {
        id: 3,
        email: "anisha@gmail.com"
    },
]
console.log(users[1]);   // OUTPUT : { id: 2, email: 'manisha@gmail.com' }
console.log(users[2].email);   // OUTPUT : anisha@gmail.com



console.log(pinkuUser);
console.log(Object.keys(pinkuUser));   // Object.keys() ===> Ye method hamare object ke sare keys ko print kardeta hai .
console.log(Object.values(pinkuUser));   // Object.values() ===> Ye method hamare object ke sare values ko print kardeta hai .
/*
console.log(Object.entries(pinkuUser));

//  OUTPUT :---
[
    [ 'id', 'Pinku-Tinku' ],
    [ 'name', 'PINKU BABU' ],
    [ 'isLoggedIn', false ]
  ]
*/

/* ".hasOwnProperty('key that you like to check')" ===> Ye hame ye batlata hai ki koi "key" kisi given araa me exist karta hai ki nahi , yadi wo "key" yadi wo key us aray me exist karta hai to ye "true" print karega aur agar wo "key" us aray me exist nahi karta hoga to ye "alse" print karega. */
console.log(pinkuUser.hasOwnProperty('isLoggedIn'));   // OUTPUT : true
console.log(pinkuUser.hasOwnProperty("name"));   // OUTPUT : true

const course = {
    coursename: "js in hindi",
    price: "2999",
    courseInstructor: "Araham"
}
console.log(course.courseInstructor);   // OUTPUT : Araham


// Destructure of object :---

// (1). first way of destructuring of an object .
const {courseInstructor} = course
console.log(courseInstructor);   // OUTPUT : Araham

// (2). second way of destructuring of an object .
const {courseInstructor : instructure} = course
console.log(instructure);   // OUTPUT : Araham

// // {
// //     "name": "hitesh",
// //     "coursename": "js in hindi",
// //     "price": "free"
// // }

// [
//     {},
//     {},
//     {}
// ]
