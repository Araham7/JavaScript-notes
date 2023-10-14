/* ******************* Rest Opertor : Iska kaam hai ki function ke argument diye gaye sequence of numbers ko array ke form me store karna ********************* */

function calculateCartPrice(num1 , num2 , ...num3){
    console.log(`The value of 'num1' = ${num1} , 'num2' = ${num2} and 'num3' = ${num3}`);
    return num3
}
console.log(calculateCartPrice(200, 400, 500, 2000, 5120, 1098));
/* 
NOTE :
***** "calculateCartPrice" function "hamare dyara diye gaye argument(200, 400, 500, 2000, 5120, 1098)" mese ("num1" me 200 ko store karwayega) , ("num2" me 400 ko store karwayega) aur ("num3" me array ke form me {500, 2000, 5120, 1098} ko store karliya jata hai.)
***** "Rest Operator" ka prayog hamesa function me hota hai
 */