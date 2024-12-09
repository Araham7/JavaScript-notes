class Product_1 {
    name;
    price;
    rating;

    constructor(){
        console.log(`Calling the constructor !`);
    }

    display(){
        console.log(`This is display method!`);
    }
}

const p_1 = new Product_1(); // Jab bhi humlog object banaten hai ye automatically constructor function ko call kardeta hai .
console.log(p_1);
p_1.display()


console.log("********************************************************************");


/*
Important Noote :---
*** JavaScript me kewal matra ek hi "constructor" ho sakta hai.
*/

class Product_2 { 
    name; // isko likh karkho ya na likho baat barabar hai kyunki constructor ke andar me isko define kar diya gaya hai.
    price; // isko likh karkho ya na likho baat barabar hai kyunki constructor ke andar me isko define kar diya gaya hai.
    rating; // isko likh karkho ya na likho baat barabar hai kyunki constructor ke andar me isko define kar diya gaya hai.

    constructor( n , p , r ){
        this.name = n ,
        this.price = p ,
        this.rating = r
    }

    display(){
        console.log(`This is display method!`);
        console.log(this);
    }
}

const p_2 = new Product_2("Araham" , 6589123 , 5); // Jab bhi humlog object banaten hai ye automatically constructor function ko call kardeta hai .
console.log(p_2);
p_2.display()

