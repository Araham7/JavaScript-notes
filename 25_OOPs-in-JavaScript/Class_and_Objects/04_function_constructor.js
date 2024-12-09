/*
Importent note :---

**** In function_constructor also if we return primite data type it would get not returned.
**** In function_constructor also if we return non-primite data type it would get returned.

*/


// (1).Named function Constructor:---
function Product_1(n , p , r) {
    this.name = n;
    this.price = p;
    this.rating = r;

    // return 10; /* Ye ignore hojayega */

    // return { x:65 , y:"aru" , z:'A' }; /* This would get returned by the constructor! */
    // return this; /* Ye return hojayega. */
}

const p1 = new Product_1("laptop" , 250000 , 4);
console.log(p1);


// (2).Un-named function constructor :---
const Product_2 = function (n , p , r) {
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p2 = new Product_2("bike" , 150000 , 5);
console.log(p2);


// (3). we cant use this under arrow function :---
let obj1 = { /* object ke andar humlog function ko "function" keyword likhe bina bhi bana sakten hai. */
    x: 100,
    fun(){
        console.log(this.x);
    }
}

obj1.fun(); // this would get executed.


// (4).

let obj2 = { /* object ke andar humlog function ko "function" keyword likhe bina bhi bana sakten hai. */
    x: 120,
    fun: ()=>{
        console.log(this.x);
    }
}

obj2.fun(); // It would print "undefined" because "this" keyword is not defined inside arrow function .