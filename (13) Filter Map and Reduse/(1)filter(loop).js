/*
NOTE :---
***** "filter loop" tabhi usi value ko "return" karta hai jo condition "true value" deta hai .
***** "filter loop" me bhi humlog call-back function deten hai aur "isme humlogon ko 'return' me output milta hai" .
*/

// (1).
// const newNum = [ 56 , 65 , 36 , 48 , 23 , 21 , 17 , 13 , 49 ];

// let storedVal = newNum.filter((val)=>{
//     return val < 50
// })
// console.log(storedVal);


// (2).
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => {
    return num > 4
} )
console.log(newNums);

/*
NOTE :---
***** "filter loop" hamare forEach loop ka special spaciel case hai , jo sirf output ko "return" karta hai .
*/


// (3).
const newNums2 = []
myNums.forEach( (num) => {
    if (num > 4) {
        newNums2.push(num)
    }
} )
console.log(newNums2);
/* **********************

OUTPUT :---

[ 5, 6, 7, 8, 9, 10 ]

********************* */




const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


//   (4).
  let userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks);
/*
OUTPUT :---

[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]

*/


// (5).
  anotherUserBooks = books.filter( (bk) => { 
    return ( bk.publish >= 1995 && bk.genre === "History" ) ;
})
console.log(anotherUserBooks);

/*
OUTPUT :---

[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]

*/