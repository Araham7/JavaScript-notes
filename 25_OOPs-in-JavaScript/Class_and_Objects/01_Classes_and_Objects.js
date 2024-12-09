// Blueprint = class (defines the structure and behavior)
// Actual realLife entity = object (an instance created from the class)


class Product {
    // properties -> variables -> data members
    name;
    price;
    rating;

    // behaviours -> functions -> member function.
    display(){ // class ke andar me function likhte samay function keyword ke likhne ka jarurat nahi hota hai.
        console.log(`Displaying the current product!`);
    }
}

// creating an object :---
const p = new Product();
console.log(p); // OUTPUT: Product { name: undefined, price: undefined, rating: undefined }
p.display(); // OUTPUT: Displaying the current product!