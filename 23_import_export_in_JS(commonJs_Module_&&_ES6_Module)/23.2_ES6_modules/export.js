/*

//  (1). First way of export :---

// Is tarhese humlog different different funtions ko ek-ek karke export karten hai . 
export function mul(a,b,c) {
    return (a*b*c);
}
export function divide(a , b) {
    return (a/b);
}
*/



// defining function :---

function add(a,b,c) {
    return (a+b+c)
}
function subs(a,b) {
    return (a-b)
}
function mul(a,b) {
    return (a*b)
}
function divide(a,b) {
    return (a/b)
}



/*
//      (2). Second way of export :---
// Is tarhe se humlog jitna function jhahen utne ko module(js_file) se export karten hain . 
export {add , subs , mul , divide} ;
*/



/*
// (3). Third way of export :---
// Is tarhe se humlog sare functiontion ko object bana karke export karten hai , jise humlog import karten samay Object_destructure laga karke functions ko differen name se use karsakten hai . 
*/
export default {
    add ,
    subs ,
    mul ,
    divide
}