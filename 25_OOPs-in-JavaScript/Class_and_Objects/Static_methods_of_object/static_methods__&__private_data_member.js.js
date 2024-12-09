/*
Importent note :---
**** public_data_member ko declair karne ki jarurat nahi part hai(aur agar declair karna chaho to use "data_member" ka naam likh karke declair kardeten hai.)
**** private_data_member ke aage "#" laga karke declair karten hai. 

NOTE: Private data members in JavaScript (those prefixed with #) can only be accessed within the class itself. This means you can access and manipulate private data members only through methods (like getters or setters) defined inside the class. Outside the class, they are not directly accessible.

NOTE : "static_method" can only be access from the class_name.

*/

class Product {
    // Private field declaration before use :---
    #rating; // Making "rating" as private data member .
    constructor( n , p , r ) {
        console.log(`Calling the constructor!`);
        this.name = n;
        this.price = p;
        this.#rating = r; 
    }

    // Defining static method("static_method" can only be access from the class name.)
    static customStatic(){
        console.log(`Calling a static method!`);
    }

    display(){
        console.log(`Displaying the current product! > `, this.name , this.price , this.#rating);
    }

}

// Example usage
const p = new Product('Laptop', 150000, 4.5);
console.log(p);

p.display();
Product.customStatic();

