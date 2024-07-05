// singleton
// Object.create



// object literals
const mySym = Symbol("key1");   // Symbol "declaration" .


const JsUser = {
    name: "Araham",
    "full name": "Araham Abeddin",
    [mySym]: "mykey1",   // NOTE: Is tarhese Object me "Sybol" ko as a key assign kiya jata hai.
    age: 22,
    location: "West Bengol",
    email: "arahamabeddin7@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) // 1st way of accessing Object element.
console.log(JsUser["email"]) // 2nd way of accessing object element.
console.log(JsUser["full name"]) // NoTE :- yadi kisi object ke "key" me 'space' hoto is tarhese object ke value ko access kiya jata hai.
console.log(JsUser[mySym])   // Is tarhese Object mese 'Symbol' ka Value nikala jata hai.

/* ------------ Updation of Object value ------------ */
JsUser.email = "rukhsanayasmin786@gmail.com"   // Is tarhese "Object" ke value ko "Update" kiya jata hai .
console.log(JsUser);

/* *************** Freezing of object ***************** */
Object.freeze(JsUser)   // Is tarhese "Object" ko 'freeze' kiya jata hai taki hamare Dwara banaye gaye obejct me koi bhi update ya changes na kiya ja sake .



JsUser.email = "rukhsanayasmin786@gmail.com" // Ab email update nahi ho payega , kyunki hamara Object ("JsUser") ko freez kiya ja chuka hai .
JsUser.age = 56 // ab age update nahi hopayega , kyunki hamara Object ("JsUser") ko freez kiya ja chuka hai .
console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());






