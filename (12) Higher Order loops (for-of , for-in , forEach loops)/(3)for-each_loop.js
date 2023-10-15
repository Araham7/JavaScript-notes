/* 
Note : 
*** "forEach" loop hamesa call-back function argument me leta hai.
*** Wastaw forEach loop ka call-back 3 argumrnts ( "(i). Array ka Item ", "(ii). Array ka Index" , "(iii). full Array" ) leta hai .
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

/* /////////////////////////////////////////////////////////////////////////////////// */

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


// (5).
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} ) ;
/*
OUTPUT :---

js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

*/