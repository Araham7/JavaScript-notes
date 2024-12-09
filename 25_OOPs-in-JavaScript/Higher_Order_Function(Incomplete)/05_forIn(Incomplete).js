let myArr = [ 56 , 43 , 51 ,73 , 108 , 651 , 108 , 93 , 79 , 108 , 560 , 512 , 512 ] ;

// (1). "forOf()" loop me jo 'first_variable(i.e "index")' rehta hai wo , array ka "index" batlata hai .
// (2). "forOf()" loop with "Array".
for (const index in myArr) {
    // console.log(index); // This will print the index of array(myArr);
    console.log(`index > ${index} : value > ${myArr[index]}`);
}


/* ****************************************************************************************************************** */

let myObj = {
    key_1: "val_1",
    key_2: "val_2",
    key_3: "val_3",
    key_4: "val_4",
    key_5: "val_5",
    key_6: "val_6",
    key_7: "val_7",
    key_8: "val_8",
    key_9: "val_9",
    key_10: "val_10",
    key_11: "val_11",
    key_12: "val_12",
    key_13: "val_13",
    key_14: "val_14",
    key_15: "val_15",
}

// (3). "forOf()" loop me jo 'first_variable(i.e "key")' rehta hai wo , array ka "key" ko darsata hai .
// (4). "forOf()" loop with "Object".
for ( const key in myObj ) {
    console.log(`${key} : ${myObj[key]}`); // "key" will print "keys" of "myObj" , "myObj[key]" will print "value corresponding to the key".
}




