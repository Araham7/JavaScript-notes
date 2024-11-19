// arguments : It is the "built-in function" of all js funtion and ye function me jitne bhi arguments ko dala gaya hai use store karta hai .
function testFun() {
  console.log(arguments);
}

testFun(54, 63, 91, 83, 72, 63, 42);
/*
OUTPUT :---

[Arguments] {
  '0': 54,
  '1': 63,
  '2': 91,
  '3': 83,
  '4': 72,
  '5': 63,
  '6': 42
}

*/

function testFun() {
  console.log(typeof arguments);
}
testFun(54, 63, 91, 83, 72, 63, 42); /*OUTPUT : object  */

function testFun2() {
  let args = Array.from(arguments);
  let createdArray = args.map((el) => el);
  console.log(createdArray);
}
testFun2(54, 63, 91, 83, 72, 63, 42);
/*
OUTPUT :---

[
  54, 63, 91, 83,
  72, 63, 42
]
*/

// RestOperator : Iska use elements ko pack karnekeliye kiya jata hai .

function testFun3(...args) {
  let result = args.map((el) => el);
  console.log(result);
}

testFun3(54, 63, 91, 83, 72, 63, 42);
/*
OUTPUT :---

[
  54, 63, 91, 83,
  72, 63, 42
]
*/
