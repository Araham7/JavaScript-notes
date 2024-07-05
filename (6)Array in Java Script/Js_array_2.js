const marvel_heros = ["thor", "Ironman", "spiderman"] ;
const dc_heros = ["superman", "flash", "batman"] ;

marvel_heros.push(dc_heros) ; // Yanha par "marvel_heros" naam ke array me "dc_heros" ko 'push(incert)' kiya ja raha hai.
console.log(marvel_heros);   // OUTPUT : [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3]); // OUTPUT : [ 'superman', 'flash', 'batman' ]
console.log(marvel_heros[3][0]);   // OUTPUT : superman





/* ------------- (1). ".concat()" method ka use humlog 2 array ko kisi tisre araay me merge karne keliye karten hai . ------------ */
const desi_hero =[ "Sharuk Khan" , "Akshay Kumar" , "Krittik Roushan"]
const holly_movie = ["harry_potter" , "Game_of_Throne"]
const allHerosAndMovies = desi_hero.concat(holly_movie) // Ye  hamare "allHerosAndMovies" me 'desi_hero' aur 'holly_movie' ke sare array elements ko incert kardega.
console.log(allHerosAndMovies);   // OUTPUT : [ 'Sharuk Khan','Akshay Kumar','Krittik Roushan','harry_potter','Game_of_Throne' ]





/* --------------------------- (2). "Sprad(...)" operator ------------------------- */
/* --const all_new_heros = [...marvel_heros, ...dc_heros] Do ya do se jyada arrays ko marge karnekeliye humlog "Sprad(...)" operator ka prayog karten hai. --------*/

const numbers = [  '56' , '36' , '45' , '96' , '108'] ;
const charactors = [ "M" , "S" , "T" , "C" , "P" , "Q" , "L" , "Z" ] ;
const nameOfFamilyMembers = [ "Araham" , "Arefa" , "Aatefa" , "Mummy" , "Papa" ] ;
const newMergedArray = [...numbers , ...charactors , ...nameOfFamilyMembers] // Yanha par humlogon ne "sprad operator(...NameOfArray)" ki sahayeta se 'newMergedArray' me 3 arrays ko merge kardiya hai.

console.log(newMergedArray);   // OUTPUT : [ '56','36','45','96','108','M','S','T','C','P','Q','L','Z','Araham','Arefa','Aatefa','Mummy','Papa' ]
console.table( [ newMergedArray , numbers , charactors , nameOfFamilyMembers ] ) // OUTPUT :
/*
┌─────────┬──────────┬─────────┬──────────┬─────────┬────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬──────────┬─────────┬──────────┬─────────┬────────┐
│ (index) │    0     │    1    │    2     │    3    │   4    │  5  │  6  │  7  │  8  │  9  │ 10  │ 11  │ 12  │    13    │   14    │    15    │   16    │   17   │
├─────────┼──────────┼─────────┼──────────┼─────────┼────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────────┼─────────┼──────────┼─────────┼────────┤
│    0    │   '56'   │  '36'   │   '45'   │  '96'   │ '108'  │ 'M' │ 'S' │ 'T' │ 'C' │ 'P' │ 'Q' │ 'L' │ 'Z' │ 'Araham' │ 'Arefa' │ 'Aatefa' │ 'Mummy' │ 'Papa' │
│    1    │   '56'   │  '36'   │   '45'   │  '96'   │ '108'  │     │     │     │     │     │     │     │     │          │         │          │         │        │
│    2    │   'M'    │   'S'   │   'T'    │   'C'   │  'P'   │ 'Q' │ 'L' │ 'Z' │     │     │     │     │     │          │         │          │         │        │
│    3    │ 'Araham' │ 'Arefa' │ 'Aatefa' │ 'Mummy' │ 'Papa' │     │     │     │     │     │     │     │     │          │         │          │         │        │
└─────────┴──────────┴─────────┴──────────┴─────────┴────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴──────────┴─────────┴──────────┴─────────┴────────┘ 
*/ 





/* ------------------- (3). " .flat(Infinity) " ------------------ */
/* 'nessted array'(another_array)  ko 'simple array'(real_another_array) me convert karna. */

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) ;   // " .flat(Infinity) " operator ka prayog karke nested array ko simple array me convert karna .
console.log(real_another_array);   // OUTPUT : [1,2,3,4,5,6,6,7,4,5]





/* ------------------- (4). " Array.isArray() " ------------------ */
// Array.isArray() ==> Ye hame batlayega ki given(coming) data array hai ya nahi agar given data array hai to "true" print karega , aur agar given data array nahi hai to ye "false" print karega .
//To check weather the coming(given) data is array or not ?
const meraArray = [ "Araham" , "Abeddin" , "Tanisha" , "Aatefa" , "Arefa" , "Mummt" , "Papa" ] ;
console.log(Array.isArray( meraArray ));   // OUTPUT : Ye hame "true" dega kyunki "meraArray" ek array hai .





/* ------------------- (5). " Array.from() " ===> Ye input me string leta hai aur output me array deta hai . ------------------ */
console.log(Array.from("Araham"));   // OUTPUT : Ye string "Araham" ko array( [ 'A', 'r', 'a', 'h', 'a', 'm' ] ) me convert kardega .
console.log(Array.from("5564651323164651"));





/* +++++++++++++++++++++++++++++ Array.of() +++++++++++++++++++++++++++++++ */
/* " Array.of() " ===> Ye array ka ek method hai jisme humlog "different variables(integer , string , charactors , numbers )" ko eksanth  milakarke "array" me convert kardeta hai. */
let score1 = 100
let score2 = 200
let score3 = 300
let name_1 = "Araham"
console.log(Array.of(score1 , score2 , score3 , name_1 ));





