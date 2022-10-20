const loginButton = document.getElementById("loginbtn");
const submitBtn = document.getElementsByClassName("login");
const button = document.getElementById("explore");
const explorebutton = document.getElementById("expore2")
const link1 = document.getElementById("link")
const shopnow = document.getElementsByClassName("rightHero")
const popup = document.getElementsByClassName("loginform");
const imagearray = ["./resources/miniproject/Rectangle 4.png","./resources/miniproject/Rectangle 2.png","./resources/miniproject/Rectangle 5.png"]
console.log(submitBtn[0])
loginButton.addEventListener("click",()=>{
    console.log();
    submitBtn[0].click();
})

submitBtn.addEventListener("click",()=>{
    popup[0].style.display = "none"
})
button.addEventListener("click",()=>{
    link1.click();
})
explorebutton.addEventListener("click",()=>{
    link1.click();
})
console.log(shopnow[0].lastElementChild)   
shopnow[0].lastElementChild[0].addEventListener("click",()=>{
    
    link1.click();
})
