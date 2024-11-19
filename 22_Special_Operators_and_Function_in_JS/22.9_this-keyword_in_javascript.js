/*
*** Context of "this" ===> "This" ka context hamesha "Object" keliye valid hota hai . ( Yanike humlog 'nahi Simple_function ar nato Arrow_functiton' me "this" ka use nahi kar sakten hai , humlog kewal "Object" keliye "this" ka use karsakten hai . )
 */


/* 
    NOTE :--- 
    ***** "this" ===> Ye hame preasent scope me upasthit variables ke "current context" ko batlata hai .
    ***** "this.object_Key" ===> Ye hame object(i.e, object_Key) ke Key ke current context(curent value) ko batlata hai .
*/
const NewUser = {
    "firstName" : "Arahah" ,
    "lastName" : "Abeddin" ,
    "fullName" : function() {
        console.log(`${this.firstName} ${this.lastName}`); // Yanhapar "this" ===> current context ko representkar raha hai.
    }
}

/*
    NOTE :---
    ***** NewUser.fullName() ===> Ye ek method hai .
*/

NewUser.fullName()   // OUTPUT : Arahah Abeddin

// Humlogon ne ab "NewUser" naam ke object ka 'firsName' aur 'lastName' donohi change kardiya hai .
NewUser.firstName = "Tanisha"
NewUser.lastName = "Aabedin"

NewUser.fullName()   // OUTPUT : Tanisha Aabedin
