/* 
Note : 
*** "forEach" loop hamesa call-back function argument me leta hai.
*/

let myArr = [ "Araham" , "Abeddin" , 786 , true ] ;

//(1).
myArr.forEach((val)=>{
    console.log(val);
});
/*
OUTPUT :---

Araham
Abeddin
786
true

*/

// (2).
myArr.forEach(function (params) {
    console.log(params);
});
/*
/*
OUTPUT :---

Araham
Abeddin
786
true

*/


// (3). 
function myFun(val) {
    console.log(val); ;
}
myArr.forEach(myFun);   // NOTE : Yanha par foreEach ke andar me call-back function ke sthan par humlogon ne sirf function(i.e, myFun() naam ke function ) ka sirf referense diya hai.

/*
OUTPUT:---

Araham
Abeddin
786
true

 */







//(4).
const specialArr = [ 

    {
        Abbriviation : "cpp" ,
        fullForm : "C++"
    } ,
    {
        Abbriviation : "py" ,
        fullForm : "python"
    } ,
    {
        Abbriviation : "html" ,
        fullForm : "Hyper Text Transfer Protocall"
    } ,
    {
        Abbriviation : "CSS" ,
        fullForm : "Cascading Style Sheat"
    },
]

specialArr.forEach((arrVal)=>{
    let innerObjVal = arrVal.Abbriviation
    console.log(innerObjVal);
});

/*

OUTPUT :---

cpp
py
html
CSS

*/