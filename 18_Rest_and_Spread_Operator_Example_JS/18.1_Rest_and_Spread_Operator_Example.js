// Rest Operator (...rest): Humlog iska upayog karte hain dher saare aane waale variables ko ek saath store karne ke liye.
// Spread Operator (...spread): Humlog iska upayog karte hain array ke elements ko comma-separated values mein store karne ke liye.



let names = [ "Araham" , "SuperMan" , "parMan" ];

// example of spreadOperator :---
let newName = ["Papa" , ...names , "Mummy"]

console.log(newName); // OUTPUT : [ 'Papa', 'Araham', 'SuperMan', 'parMan', 'Mummy' ]



// example of restOperator :---
const webSiteName = "PwSkills"
console.log([...webSiteName])
/*
OUTPUT :---

[
  'P', 'w', 'S',
  'k', 'i', 'l',
  'l', 's'
]
*/


// SpreadOperator :---
function func1(...values) {
  return values ;
}

console.log(func1("Superman" , "flash"));
// OUTPUT : [ 'Superman', 'flash' ]
