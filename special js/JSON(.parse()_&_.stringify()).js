/*
NOTE :---
    (1). *** "JSON.parse(`JSON_object`)" ===> Is method ke andar me "backtick ke andar me JSON"(JSON ka string form) as a parameter dala jata hai .
==> // JSON.parse();   //Ye JavaScript ke "JSON ke string form" ko wapas se JSON form me converte(Parse) kardeta hai.


NOTE :---

    (2). *** " JSON.stringify(JSON); " ===> Is Methos ka prayog se "JSON" ko "JSON ke string form" me convert karnekeliye kiya jata hai . Isme parameter JSON diya jata hai .

*/


/* +++++++ (i). "JSON.parse()" ++++++++++ */

const meraContainer = JSON.parse(`{ 
                                        "firstName" : "Araham" ,
                                        "lastName" : "Abeddin" ,
                                        "fullName" : "Araham Aeddin" ,
                                        "collegeId" : 21273030381 ,
                                        "data" : [ "book" , "coock" , "ma'am" , 12395 , false , null ]
                                    }`);
console.log(meraContainer);


/* ++++++++++++++ (ii). "JSON.stringify()" +++++++++++++++ */
let JSONtoStrContainer = JSON.stringify({
                                    "firstName" : "Araham" ,
                                    "lastName" : "Abeddin" ,
                                    "collegeId" : 21273030381 ,
                                    "fullName" : [ "book" , "coock" , "ma'am" , 12395 , false , null ]
                                });
console.log(JSONtoStrContainer);   // OUTPUT : {"firstName":"Araham","lastName":"Abeddin","collegeId":21273030381,"fullName":["book","coock","ma'am",12395,false,null]}
console.log(typeof JSONtoStrContainer);   // OUTPUT : string