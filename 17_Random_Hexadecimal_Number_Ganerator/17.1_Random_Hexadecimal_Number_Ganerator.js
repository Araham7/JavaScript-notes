let possibleHexNum = `0123456789ABCDEF`
// let strIndex = Math.floor(Math.random()*16) ;

let rgbColor = '#'
for (let i = 0; i < 6 ; i++) {
    let strIndex = Math.floor(Math.random()*16) ;
    hexNum = possibleHexNum[strIndex];
    rgbColor += hexNum
    // console.log(Math.random()*16);
    // console.log(hexNum);
}
console.log(rgbColor);