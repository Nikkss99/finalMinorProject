const images = document.getElementsByClassName("decor");
const donate = document.getElementById("donatePage");
console.log(donate)
for(var i =0;i<images.length;i++){
    images[i].addEventListener("click",()=>{
        donate.click();
    })
}