/*
Impotant Note :
1). "array.sort()" method ka prayog humlog array ke eleents ko sort karke return karnekeliye karten hai.
2). "array.sort()" method ka prayog karke agar humlog 'sorted' array ka value kisi dusre array me store karna chahten ho to hame "return" keyword ka istamal karna parta hai.
*/

let myNumArr = [53, 4, 32, 12, 54, 68, 601, 501, 956, 786, 9001, 3555552, 9877776, 56318, 78523];

// For arranging the numbers in ascending order.
let ascendSortedArray = myNumArr.sort((a, b) => {
    return a - b;
});
console.log(ascendSortedArray);
/*
OUTPUT:
[
      4,      12,      32,
     53,      54,      68,
    501,     601,     786,
    956,    9001,   56318,
  78523, 3555552, 9877776
]
*/

// For arranging the given array elements in descending order.
let descendSortedArray = myNumArr.sort((a, b) => {
    return b - a;
});
console.log(descendSortedArray);
/*
OUTPUT:
[
  9877776, 3555552, 78523,
    56318,    9001,   956,
      786,     601,   501,
       68,      54,    53,
       32,      12,     4
]
*/





/* ***************************************************************************************************** */





let fruits = [
    "Apple", "Banana", "Mango", "Cherry", "Orange", "Papaya", "Grapes", "Watermelon", 
    "Pineapple", "Strawberry", "Blueberry", "Peach", "Pear", "Plum", "Kiwi", "Guava", 
    "Apricot", "Lychee", "Raspberry", "Blackberry", "Dragonfruit", "Passionfruit", 
    "Pomegranate", "Fig", "Durian", "Jackfruit", "Tamarind", "Coconut", "Mulberry", 
    "Elderberry", "Cranberry", "Nectarine", "Cantaloupe", "Honeydew", "Avocado", 
    "Persimmon", "Tangerine", "Lemon", "Lime", "Kumquat", "Date", "Gooseberry", 
    "Acai", "Soursop", "Mangosteen", "Starfruit", "Breadfruit", "Salak", "Longan",
    "Jujube", "Miracle fruit"
  ];


/*
(1). This will not modify the array :---
*/
// let sortedFruits = fruits.sort();
// console.log(sortedFruits);


/*
(2).This will modify(sort) the original array :---
*/
fruits.sort();
console.log(fruits);
/*
OUTPUT:
[
  'Acai',         'Apple',         'Apricot',
  'Avocado',      'Banana',        'Blackberry',
  'Blueberry',    'Breadfruit',    'Cantaloupe',
  'Cherry',       'Coconut',       'Cranberry',
  'Date',         'Dragonfruit',   'Durian',
  'Elderberry',   'Fig',           'Gooseberry',
  'Grapes',       'Guava',         'Honeydew',
  'Jackfruit',    'Jujube',        'Kiwi',
  'Kumquat',      'Lemon',         'Lime',
  'Longan',       'Lychee',        'Mango',
  'Mangosteen',   'Miracle fruit', 'Mulberry',
  'Nectarine',    'Orange',        'Papaya',
  'Passionfruit', 'Peach',         'Pear',
  'Persimmon',    'Pineapple',     'Plum',
  'Pomegranate',  'Raspberry',     'Salak',
  'Soursop',      'Starfruit',     'Strawberry',
  'Tamarind',     'Tangerine',     'Watermelon'
]
*/


/* Sorting of array containing object */
let people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 52 },
    { name: "Jim", age: 30 }
  ];

// Sorting object(people) on the basis of decering age :--- 
let sortDeceringAge = people.sort((a , b)=>{
    return b.age - a.age;
})
console.log(sortDeceringAge);
/* 
Output:
[
  { name: 'Jane', age: 52 },
  { name: 'Jim', age: 30 },
  { name: 'John', age: 25 }
]
*/


// Sorting object(people) on the basis of increasing age :---
let sortInceringAge = people.sort(function(a, b) {
    return a.age - b.age;
});
  
  console.log(sortInceringAge);
/* 
Output:
[
  { name: 'John', age: 25 },
  { name: 'Jim', age: 30 },
  { name: 'Jane', age: 52 }
]
*/


