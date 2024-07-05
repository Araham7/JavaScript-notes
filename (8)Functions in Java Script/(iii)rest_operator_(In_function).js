/* ******************* Rest Opertor : Iska kaam hai ki function ke argument me diye gaye sequence of numbers ko array ke form me store karna ********************* */
function calculateCardPrice(num1 , num2 , ...num3){
    console.log(`The value of 'num1' = ${num1} , 'num2' = ${num2} and 'num3' = ${num3}`);
    return num3
}
console.log(calculateCardPrice(200, 400, 500, 2000, 5120, 1098));
// OutPut : The value of 'num1' = 200 , 'num2' = 400 and 'num3' = 500,2000,5120,1098
[ 500, 2000, 5120, 1098 ]

/* 
NOTE :
***** "calculateCardPrice" function "hamare dwara diye gaye argument(200, 400, 500, 2000, 5120, 1098)" mese ("num1" me 200 ko store karwayega) , ("num2" me 400 ko store karwayega) aur ("num3" me array ke form me [500, 2000, 5120, 1098] ko store karliya jata hai.)
***** "Rest Operator" ka prayog hamesa function me hota hai
 */








