const options = document.querySelectorAll(".SidePannel li")
const profile = document.querySelectorAll(".DashboardProfie")
const uploaded = document.querySelectorAll(".uploaded");
const bought = document.querySelectorAll(".bought");
const Discussion = document.querySelectorAll(".Disscusion");
var activeProfile;
console.log(options[0].children[1].innerHTML.toString())
for(var i=0;i<options.length;i++){
    options[i].addEventListener("click",(res)=>{
        
        activeProfile=res.composedPath().reverse()[6].children[1].innerHTML.toString()
        res.composedPath().reverse()[6].setAttribute("id","Dashactive")
        update();
    })
}
const update=()=>{
    console.log(activeProfile)
switch(activeProfile){
    case"Profile":
        {
            profile[0].style.display="flex"
            uploaded[0].style.display="none"
            bought[0].style.display="none"
            Discussion[0].style.display="none"
            options[2].removeAttribute("id","Dashactive")
            options[3].removeAttribute("id","Dashactive")
            options[1].removeAttribute("id","Dashactive")
            break;
        }
    case "Art uploaded":
        {   console.log("active")
            profile[0].style.display="none"
            uploaded[0].style.display="flex"
            bought[0].style.display="none"
            Discussion[0].style.display="none"
            options[2].removeAttribute("id","Dashactive")
            options[3].removeAttribute("id","Dashactive")
            options[0].removeAttribute("id","Dashactive")
            break;
        }
    case "Art Bought":
        {
            profile[0].style.display="none"
            uploaded[0].style.display="none"
            bought[0].style.display="flex"
            Discussion[0].style.display="none"
            options[0].removeAttribute("id","Dashactive")
            options[3].removeAttribute("id","Dashactive")
            options[1].removeAttribute("id","Dashactive")
            break;
        }
    case "Disscusion":
        {
            profile[0].style.display="none"
            uploaded[0].style.display="none"
            bought[0].style.display="none"
            Discussion[0].style.display="flex"
            options[2].removeAttribute("id","Dashactive")
            options[0].removeAttribute("id","Dashactive")
            options[1].removeAttribute("id","Dashactive")
            break;
        }
}}