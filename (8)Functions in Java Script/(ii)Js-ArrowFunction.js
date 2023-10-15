/*
NOTE :---
***** "Simple function" aur "Arrow function" ke santh humlog "this." use nahi karsakten hai .
 */

/*
[NOTE : Important notes hai iska use humlog react js me karenge ok.
***** Arrow function me agar business logic ko { } curly bracket ke andar me likhenge to humlogon ko return keyword ka use karna parega aur agar () round bracket me likhenge to hame return keyword ka use nahi karna hoga]

Note :---
***** Yadi humlogon ko Arrow function se *Object* return karwana hai to uske liye humlog rond-bracket ke andar object i.e, ({Object}) me likhenge ok
[   ex: let x = ()=> ({"firstName" : "Araham" , "lastName" : "Abeddin"})   
] .
*/

/* ************* Arrow function ************* */

/*
//Making an "Arrow" function :---
let functionName = (parameter1,parameter2,...)=>{
    function_dafiniation;
};

// calling of arrow function :---

functionName(parameter1,parameter2,...)
 */





/* (1). Arrow function taking no Parameter */
let amma = ()=>{ 
    console.log("Hello ! , How are you ?");
}
amma();   // OUTPUT : Hello ! , How are you ?





/* (2). Arrow function taking Parameter ( rturn type ) */
let mul = (num1 , num2)=>{
    let num3 = num1*num2 ;
    return num3 ;
};
let result = mul(420 , 986);
console.log(result);

/* --------------------------------------------------------------------------------------------------- */

/*
Note:---
(1). curly bracket lagane par humlog use *Explicit return* kahten hai kyuki humlogon ko return alag se likhna parta hai .
(2). Round bracket lagane par (yaphir bina bracket lagane par) hame koi "return" nahi likhna par raha hai isiliye humlog ise *implicit return* krhenge.
*/

// (1). Implecit return :---
let fun1 = (a,b)=> a + b  ;
let storeSum = fun1(12,24) ;
console.log(storeSum);    // OUTPUT : 36

// (2). Implecit return :---
let fun2 = (p,q)=>(p * q);
console.log(fun2(56,93));    // OUTPUT : 5208



// (3). Explicit return :---
/*
    NOTE : 
        Jab kabhi bhi hamare arrow function ke definition me curly-brases(i.e {}  ) ka istamal kiya gaya ho tab humlog "return" ka prayog karten hai.
 */
let fun3 = (m , n)=>{ return m / n }
console.log(fun3(57,2));    // OUTPUT : 28.5



// (4). Implicit return :---
/* 
NOTE :--- 
*** Yadi hame arrow function se object return karwana hai to humlogon ko "()" ke andar me object ko likhna parega .
 */

let fun4 = ()=> ({Name : "Araham" , Gender : "Male" , CollegeId : "21273030381"})
console.log(fun4());   // OUTPUT : { Name: 'Araham', Gender: 'Male', CollegeId: '21273030381' }
