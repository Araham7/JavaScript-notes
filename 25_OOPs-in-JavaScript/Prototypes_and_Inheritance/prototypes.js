let myHero = [ "hor" , "spiderman" , "shaktiman" , "nagraj" ];
let dcHero = ["batman" , "flash" , "superman"];

let heroPower = {
    thor: "hammer" ,
    spiderman: "sling" ,

    getSpiderman : function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

console.log(myHero);
console.log(dcHero);
console.log(heroPower.getSpiderman());



// Array aur Object dono hi JavaScript me under the hood "Object" treate hota hai.
Object.prototype.araham = function () {
    console.log(`Araham is preasent in every object.`);
}

console.log("*******************************************");


console.log(myHero.araham());
console.log(dcHero.araham());
console.log(heroPower.araham());



Array.prototype.heyAraham = function () {
    console.log(`Araham says hi!`);
    // return NaN
}

console.log(myHero.heyAraham());
console.log(dcHero.heyAraham());
// console.log(heroPower.heyAraham()); Isme humlog "heyAraham()" ko access nahi karpayenge kyunki ye(heyAraham()) method kewal matra "Array" me hi dala gaya hai.


/* ****************************************************************************** */

// 1st way of Inheritance Using Prototype :---
const User = {
    name: "Araha",
    email: "arahamabeddin@***.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}



const TeacherAssistance = {
    makeAssigment: true,
    fulltime: true,
    __proto__:TeachingSupport /* Ye karnese "TeachingSupport" ka sara property "TeacherAssistance" me aajayega */
}
console.log(TeacherAssistance.isAvailable);

// 2nd way of Inheritance Using Prototype :---
Teacher.__proto__ = User; /* Ye "Teacher" object me "User" object ki sari property ko rakh dega. */

console.log(Teacher.email);


// 3rd way of Inheritance Using Prototype :---
const pinkuDetails = {
    name:"Pinku_Babu",
    age: 22
}
const address = {
    liveIn: "India"
}

Object.setPrototypeOf(pinkuDetails , address); // Ye "address" ki sari property "pinkuDetailes" de dega.
console.log(pinkuDetails.liveIn);



//  prototype-based method extension(for getting the true length of the string) :---
String.prototype.trueLength = function () {
    console.log(`True length is > ${this.trim().length}`);
}

"Araham       ".trueLength()
