/*

// (1). Exporting only one function using common js module :---
const hello = ()=> {
    console.log("Hello Araham_Abeddin!");
}
module.exports = hello ; // is tarhe se humlog single function ko CommonJs_module ka use karke send karten hai . 

*/ 

/* ************************************************************************************************ */

/* (2). Exporting more than one function using commonJs_Module(Using , Javascript_Object) :--- */ 
const hello = ()=> {    // first_function:
    return (`Hello from Araham_Abeddin!`) ; 
}
const extraOrdinaryHello = (value)=>{   // second_function:
    return (`name > ${value}`) ; 
}
module.exports = { 
    hello , 
    extraOrdinaryHello 
} ;

/* ************************************************************************************************ */