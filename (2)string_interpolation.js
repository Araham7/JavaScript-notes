/*
NOTE :--
Hum logon ko javascript me string banane ke liye abse back-tick(`) kahi prayog karna chahiye.kyuki aajkal sare log JavaScript me string banane keliye back-tick kahi prayog karten hai.
*/


const name = "Araham"
const repo = 108
// console.log(name + repo + "value"); //This is an old method to print strings.
console.log(`Hello my name is ${name} and my repo count is ${repo} .`);   //This is the new method to print the string and variables .

// Another method to make a string in JavaScript :---
const gameName = new String('Araham-Abeddin.');
console.log(gameName);
console.log(gameName.length);   // Ye hame "gameName" naam e string ka length batlayega .
console.log(gameName.toUpperCase());   // It will convert it into to "upper case" .
console.log(gameName.toLowerCase());   // It will convert it into to "lower case" .
console.log(gameName.charAt(5));   // gameName.charAt(5) ===> ye hame 'gameName' ke 5th index ka value(charactor) batayega.
console.log(gameName.indexOf('a'));   // gameName.indexOf('a') ===> ye hame 'gameName' ke kis index par charactor 'a'(pehla a) aaya hai use batata hai.aur yadi wo charactor diye gaye string(i.e , gameName ) me nahi hai to iska output "-1" dega.
console.log(gameName.substring(0,4));// ye hamare string(gameName) ke 0th index se (4-1=3)rd index tak ke sare string to nikal karke dedega. [NOTE: substring ke argument me humlog negative value agar denge to bhi ye 0th index sehi start hoga.]
console.log(gameName.slice(1,12));// ye bhi hamare string(gameName) ke 1st index se (12-1=11)th index tak ke sare string to nikal karke dedega.

let newStr = "          dbhbvjcxbzjvxcb       "
console.log(newStr);
console.log(newStr.trim()); // newStr.trim() ===> Ye method "newStr" string ke aage aur piche wale spaces ko hata karke staring dega .
console.log(newStr.trimStart());  // newStr.trimStart() ===> Ye method "newStr" string ke aage wale spaces ko hata karke staring dega .
console.log(newStr.trimEnd());   // newStr.trimEnd() ===> Ye method "newStr" string ke end-wale(piche wale) sopaces ko hata karke staring dega .

let url = "https://www.hostinger.in/?msclkid=c15c21d7468713a3448c44c8edd1787e&utm_source=bing&utm_medium=cpc&utm_campaign=Brand-Exact%7CNT%3ABing%7CLO%3AIN&utm_term=hostinger&utm_content=Hostinger"
console.log(url.replace('%3' , '-')); // Ye "url" me preasent first '%3' ko '-' se replace kardega.
console.log(url.includes('Araham')); // Agar url "Araham" ko include karega to ye hame output me 'true' dega aur agar include nahi akrega to 'false' dega.



// ".split()" Method :---
const meraStr = "araham-abeddin-tanisha-arefa-aatefa-mummy-papa-dada-dadi-nana-nani-chacha-chachi-pinku"
console.log(meraStr.split('-')); // String ka "split" mathod hame "-" se saparated sare words ko array me convert kardeta hai.
console.log(meraStr.split('-')[5]);//Ye hamare "meraStr.split('-')" se bane array ke 5th index ka vale (i.e , mummy) print karega .

