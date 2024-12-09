class Product {
    constructor(n , p , r) {
        this.name = n ;
        this.price = p ;
        this.rating = r;

        // return 10 /* Primitive_data-type(int , String , Char) would not get returend by the constructor! */
        // return {x: 8659 , y: "araham"} /* only non-primitive_data-type(Object , array etc... ) would get returned by the constructor */
    };

}

let p = new Product("car" , 526000 , 5);
console.log(p);