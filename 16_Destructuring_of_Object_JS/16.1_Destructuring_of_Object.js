// (1). Define an object 'course' with properties coursename, price, and courseInstructor
let course = {
    coursename: "Js in Hindi",
    price: "9999",
    courseInstructor: "Araham Abeddin"
};
// Destructure the course object to extract courseInstructor and rename it to instructor
let { courseInstructor: instructor } = course;
console.log(instructor); // Araham Abeddin



// (2). Conversion of variables into an object using shorthand property names
let num1 = 58;
let num2 = 105;
let myObj = { num1, num2 };
console.log(myObj); // OUTPUT: { num1: 58, num2: 105 }



// (3). Use of array destructuring to swap the values of p and q :---
let p = 36;
let q = 49;
console.log(`The value of p = ${p} and the value of q = ${q}`);
[p, q] = [q, p];
console.log(`The value of p = ${p} and the value of q = ${q}`);
