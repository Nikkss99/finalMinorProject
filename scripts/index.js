const login = document.getElementById("loginbtn")
const loginPage= document.getElementById("login")
const submitBtn = document.querySelectorAll(".loginButton");
const button = document.getElementById("explore");
const explorebutton = document.getElementById("expore2")
const link1 = document.getElementById("link")
const shopnow = document.getElementsByClassName("rightHero")
const popup = document.getElementsByClassName("loginform");
const imagearray = ["./resources/miniproject/Rectangle 4.png","./resources/miniproject/Rectangle 2.png","./resources/miniproject/Rectangle 5.png"]
login.addEventListener("click",()=>{
    loginPage.click();
})
for(var i =1;i<submitBtn.length;i++){
    submitBtn[i].addEventListener("click",()=>{
        link1.click()
    })
}

navigate=()=>{
    link1.click()
}
button.addEventListener("click",()=>{
    link1.click();
})
explorebutton.addEventListener("click",()=>{
    link1.click();
})   


