let body = document.querySelector("body");
let colorBtn = document.querySelector(".change_color") ; 
let resetColorBtn = document.querySelector(".reset_color") ; 



let newBcgColor = ()=>{
    let hex = "0123456789abcdef"
    let color = "#"
    
    for (let i = 0; i < 6 ; i++) {
        let randomNumber = Math.floor(Math.random()*16);
        color += hex[randomNumber]
    }
    return color
}

let bcgChange = ()=>{
    bcgChangerLoop = setInterval(() => {
        body.style.backgroundColor = newBcgColor();
    }, 500);
}

let bcgReset = ()=>{
    clearInterval(bcgChangerLoop);
    body.style.backgroundColor = "";
}

colorBtn.addEventListener("click" , bcgChange);

resetColorBtn.addEventListener("click" , bcgReset);
