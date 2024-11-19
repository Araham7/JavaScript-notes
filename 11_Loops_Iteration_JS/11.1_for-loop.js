/* ***************** For_Loop ****************** */
// for ( variable_declaration ; condition ; updation ) {
//     (logic_of_code)
// }

// (1).
for (let i = 0 ; i< 5 ; i++) {
    console.log(i); ;
}
/* -----------------------
OUTPUT(1) :---

0
1
2
3
4
----------------------- */


// +++++++++++++++++++++++++++++++++++++++++++++

// (2).
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}
/* -----------------------
OUTPUT(2) :--- 

0
1
2
3
4
5 is best number
5
6
7
8
9
10
----------------------- */


// +++++++++++++++++++++++++++++++++++++++++++++

// (3).
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop(3) value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop(3) value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
       console.log(`${i} * ${j}  = ${i*j}`);
   }
}
/* -----------------------
OUTPUT(3) :--- 

1 se 10 tak ka pahara likhega ye.
----------------------- */

// ++++++++++++++++++++++++++++++++++++++++

// (4).
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
/* -----------------------
OUTPUT(4) :---

3
flash
batman
superman
----------------------- */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

                        /* --------------- (***). "break" and "continue" ---------------- */

                            /* ------------ break ------------ */
// (5). Break : "Breack statement" satisfyed honepar pura ka pura loop sehi bahar aajata hai(loop ko khatm kardeta hai) 
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        break // Jayse hi ( i = 5 ) hoga , ye pura ka pura loop hi khatm kardega .
    }
   console.log(`The current Value of i is ${i}`);
}
/* -----------------------
OUTPUT(5) :---

The current Value of i is 1
The current Value of i is 2
The current Value of i is 3
The current Value of i is 4
Detected 5
----------------------- */

                            /* --------------- continue ------------- */
// (6). Continue : "continue statement" satify hone par jo condition continue me rehta hai bas use run nahi kiya jata hai lekin usko chor karke baki sara run hota hai .(condition satisfied hone par bhi Loop continue rehta hai)
for (let i = 1; i <= 5 ; i++) {
    if (i == 3) {
        console.log(`Detected 3`); // Ye 3 ke aane par 3 ko print nahi karega lekin phir bhi loop ko continue hi rakhega.
        continue
    }
   console.log(`Value of i is ${i}`);
}
/*
OUTPUT(6) :---

Value of i is 1
Value of i is 2
Detected 3
Value of i is 4
Value of i is 5
----------------------- */






