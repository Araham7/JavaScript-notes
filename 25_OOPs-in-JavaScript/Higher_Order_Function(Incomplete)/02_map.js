/*
Importent Note : 
1). "array.map()" method can be used to "return the new_array".
2). "array.map()" method always return "true" , 'if condition satisfyed' and it return "false" , 'if condition not satisfyed'.
3). The output "array.map()" is a new array of the same length, but with the values transformed according to the logic in the callback function.
4). "array.map()" method returns a new array of the same length, containing the transformed values.
*/

let smallHero = ["totan" , "mota" , "chota" , "lota" , "khota" , "pota" , "photo" , "lol" , "lilu" , "lili"];

/* 1st_way */
// smallHero.map((element , index , arry)=>console.log(element , index , arry));

/* 2nd_way */
let capitalHero = smallHero.map((element)=>{
    // console.log(element.toUpperCase());
    return element.toUpperCase();
});

console.log(capitalHero);
/*
OUTPUT :

[
    'TOTAN', 'MOTA',
    'CHOTA', 'LOTA',
    'KHOTA', 'POTA',
    'PHOTO', 'LOL',
    'LILU',  'LILI'
  ]
*/


let heroENDSwithRAJ = smallHero.map((element)=>{
    return element.endsWith("a");
});
console.log(heroENDSwithRAJ);
/*
OUTPUT :
[
  false, true,  true,
  true,  true,  true,
  false, false, false,
  false
]
*/



