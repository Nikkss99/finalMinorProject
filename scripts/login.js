const details = document.querySelectorAll(".loginform input")
const button = document.querySelector("#login2")
var postion = "0%"
var move = false;

postion.endsWith()
const changeColor = (elemnt) => {
    elemnt.backgroundColor="white"
    postion="0%"
    button.style.left = postion

}
button.addEventListener("mouseover", () => {
    if ((details[0].value.endsWith("@gmail.com") || details[0].value.endsWith("@outlook.com")||details[0].value.endsWith("@yahoo.com"))&&details[1].value.length>8) {
        move = false;

    }
    else {
        move = true
        details[0].style.backgroundColor="red"
        details[1].style.backgroundColor="red"
        
    }
    if (postion != "15%" && move) {
        button.style.left = "15%"
        postion = "15%"
    }
    else if (postion != "-15%" && move) {
        button.style.left = "-15%"
        postion = "-15%"
    }
})
button.addEventListener("click",()=>{
    if(move==true){
        alert("invalid Inputs")
    }
    else{
        alert("login Successful")
    }
})