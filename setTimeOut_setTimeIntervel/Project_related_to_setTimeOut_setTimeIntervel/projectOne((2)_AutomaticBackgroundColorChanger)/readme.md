# Background Color Changer

This project is a simple JavaScript application that changes the background color of a webpage to a random color every 500 milliseconds when a button is clicked. It also includes a button to reset the background color to its original state.

## Features

- **Change Background Color**: Starts changing the background color to a random color every 500 milliseconds.
- **Reset Background Color**: Stops changing the background color and resets it to the original state.


### HTML Code :---
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Backgroung color changer</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="container">
        <div class="inner_box">
            <h1>Araham Abeddin!</h1>
            
            <div class="btn">
            <button class="change_color">
                Click me to change color
            </button>
            <button class="reset_color">
                Click me to reset color
            </button>
            </div>
        </div>
    </div>

    <script src="./script.js"></script>
</body>
</html>
```


### CSS Code :---
```css
*{
    margin: 0px;
    padding: 0px;

    box-sizing: border-box;
}

.container{
    /* border: 5px solid red; */

    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
}

.inner_box{
    /* border: 2px solid yellow; */

    width: 40%;
    height: 60%;

    display: flex;

    text-align: center;

    flex-direction: column;

    justify-content: space-between;
    align-items: center;
}

h1{
    /* border: 2px solid red; */
    margin: 10px;
}
.btn{

    width: 35vw;
    /* border: 2px solid burlywood; */

    display: flex;

    justify-content: space-between;

    margin-bottom: 30px;

}
button{
    padding: 25px;

    cursor: pointer;

    font-weight: 700;
    font-size: 15px;

    border-radius: 25px;

    background-color: rgb(0, 183, 255);
}
```


### Javascript Code :---
```javascript
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



```
