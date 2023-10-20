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