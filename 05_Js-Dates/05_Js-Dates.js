/*
Importent NOTEs :---
    Agar humlog year(saal) ko -ve me likhenge to java script ise "Before Christ(b.c)" me show karega, aur agar humlog year ka +ve me likhenge to java script ise "Anno Domini(a.d)" me show karega.
*/

// Java script "Dates" :---
let myDate = new Date() ;
console.log(myDate);   //   2023-10-02T22:44:45.303Z
console.log(myDate.toString());   //   Tue Oct 03 2023 04:14:45 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());   //   Tue Oct 03 2023
console.log(myDate.toISOString());   //   2023-10-02T22:44:45.303Z
console.log(myDate.toLocaleString());   //   3/10/2023, 4:13:48 am
console.log(myDate.toLocaleTimeString());   //   4:14:45 am
console.log(myDate.toLocaleDateString());   //   3/10/2023
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(Year , month , date); // note javascript me month ka indexing 0 to 11 tak hota hai matlab-ki ===> 0 => January , 11 => Febrary .
let myCreatedDate = new Date(2025,0,3);   // Year , month , date
console.log(myCreatedDate.toDateString());

// let my2ndDate = new Date( year , month , date , hour(fom 1 to 24) , minute(from 0 to 60) , secound(from 0 to 60));
let my2ndDate = new Date(2025,0,3 , 21 , 3 , 59);   // y-m-d-Hour-minuts-seconds
console.log(my2ndDate.toLocaleString());

let my3rdDate = new Date("2023-01-27"); //  year/month/date
console.log(my3rdDate.toLocaleString());
console.log(my3rdDate.getTime()); // Ye hame from 1st jan 1970 se 2023-01-27 tak ke time ka value miliseconds me dega .


let myTimeStamp = Date.now() // Ye hame abhitak ke date ka value milisecound me dega from 1st jan 1970 se .
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000)); // Ye hame abhitak ke date ka value secound me dega from 1st jan 1970 se .

const newDate = new Date() ;
console.log(newDate); //Output: 2023-10-06T13:38:08.362Z
console.log(newDate.getDate()); // Ye hame "newDate" ka sirf "date" batlayega.
console.log(newDate.getDay()); // Ye hame "newDate" ka sirf , "day" batlayega.
console.log(newDate.getFullYear()); // Ye hame "newDate" ka sirf "Year" batlayega.
console.log(newDate.getHours()); // Ye hame "newDate" ka sirf "number of hours" batlayega.
console.log(newDate.getMilliseconds()); // Ye hame "newDate" ka 1st janu 1970s se time "getMilliseconds" me batlayega.
console.log(newDate.getSeconds());   // Ye hame "newDate" ka 1st janu 1970s se time "seconds" me batlayega.
console.log(newDate.getMinutes());   // Ye hame "newDate" ka 1st janu 1970s se time "Minutes" me batlayega.
console.log(newDate.getMonth());   // Ye hame "newDate" ka 'Month' , 0 to 11 tak ke values me batlata hai.
console.log(newDate.getTime());

/* -----------------------------------------------------*/

console.log(newDate.toLocaleString('default' , {
    weekday : "long"
})); // output : Friday

console.log(newDate.toLocaleString('default' , {
    weekday : "short"
}));   // output : Fri

console.log(newDate.toLocaleString('default' , {
    weekday : "narrow"
}));   // output : F 

/* -------------------------------------------------------------------*/

const roughDate_1 = new Date(2050 , 0 , 3 , 21 , 3 , 59);
console.log(roughDate_1.toLocaleString('default',{
    hour :"2-digit",
    weekday : "long",
    era : "long",
})); // Output : Anno Domini Monday, 09 pm

/*------------------------------------------------------------------*/

const roughDate_2 = new Date(-458 , 0 , 3 , 21 , 3 , 59);
console.log(roughDate_2.toLocaleString('default',{
    hour :"2-digit",
    weekday : "long",
    era : "long",
})); // Output : Before Christ Saturday, 09 pm