/* 1st HOF */
const powerTwo = (n)=>{
    return n ** 2;
}
function powerCube(func , n) {
    return func(n)*n;
}

// console.log(powerCube(powerTwo , 5));





/* 2nd HOF */
function sayHello() {
return ()=>{
    console.log("Hello Araham!");
}
}

let guessValue = sayHello();
//  console.log(guessValue); // OUTPUT : [Function (anonymous)] 
//  guessValue(); // OUTPUT : Hello Araham! 





/* 3rd HOF */
const higherOrder = n =>{
    const oneFun = m =>{
        const twoFun = p =>{
            return (m + n + p);
        }
        return twoFun;
    }
    return oneFun;
}

let val = higherOrder(5)(6)(7);
// console.log(val);





/* 4th HOF */
const muNums = [2, 3, 4, 5]
const sumArray = arr =>{
    let total = 0;
    arr.forEach(element => {
        total += element;
    });
    return total;
}
// console.log(sumArray(muNums)); // OUTPUT : 14


/* 5th HOF */
function oneMoreHello() {
    console.log("Hello Araham!" , Math.random());
}

// setInterval(oneMoreHello , 100); // This will go on printing(Hello Araham! , random_number) every 100ms intervell untill we kill programm .
// setTimeout(oneMoreHello , 1000); // This will print(Hello Araham! , random_number) only one time 1second after the running th program.



