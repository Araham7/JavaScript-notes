// normal way of making "getter" and "setter" method :---


class Product {
    #rating; // creating "private_data_member"
    constructor(n , p , r) {
        console.log(`This is inside the constructor`);
        this.name=n;
        this.price=p;
        this.#rating=r;
    }



    getterMethod(){
        console.log(this.#rating);
    }


    setterMethod(r){
        this.#rating=r;
    }

    static customMethod(){
        console.log(`This is inside static method!`);
    }

    display(){
        console.log(`This is the display method!`, this.name , this.price , this.#rating);
    }
}

const p = new Product("Vivo_t2x_5g" , 16000 , 3.5);

console.log(p);
p.display()
Product.customMethod(); // We can access "static" function only using the "class_name".

p.getterMethod(); // This will print the value of "private_data_member" i.e "rating" .
p.setterMethod(4.5);
p.display()
