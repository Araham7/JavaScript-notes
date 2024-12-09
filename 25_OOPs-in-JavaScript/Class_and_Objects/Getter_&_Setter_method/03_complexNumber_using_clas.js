class complexNum {
    #real;
    #imag;

    constructor(r , i) {
        this.#real=r;
        this.#imag=i;
    }

    
    get realNum(){
        return this.#real;
    }
    
    get imagNum(){
        return this.#imag;
    }

    displayImagNum(){
        // console.log(`${this.realNum} + i${this.imagNum}`);
        console.log(`${this.#real} + ${this.#imag}i`);
    }

    addComplexNum(c){
        let realPart = this.#real + c.realNum;
        let imgPart = this.#imag + c.imagNum;
        // console.log(`${realPart} + ${imgPart}i`);

        return `${realPart} + ${imgPart}i`

    }

}


c1 = new complexNum(4 , 5);
c2 = new complexNum(2 , 7);

c1.displayImagNum();
c2.displayImagNum();

const sumOfTwoComplexNum = c1.addComplexNum(c2);
console.log(sumOfTwoComplexNum);