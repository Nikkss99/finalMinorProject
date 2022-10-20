// const images = document.querySelectorAll("#corsal1>div>img");
const smallImageContainer1 = document.querySelectorAll(".smImage1");
const smallImageContainer2 = document.querySelectorAll(".smImage2");
const bigContainer = document.querySelectorAll(".biggerImage") 
const smallImageContainer3 = document.querySelectorAll("#corsal2 .sm1");
const smallImageContainer4 = document.querySelectorAll("#corsal2 .sm2");
const bigContainer2 = document.querySelectorAll("#corsal2 .bg2") 
const images = ["./resources/Rectangle 4.png","./resources/Rectangle 2.png","./resources/Rectangle 5.png"]
const images2 = ["./resources/miniproject/Rectangle 4.png","./resources/miniproject/Rectangle 2.png","./resources/miniproject/Rectangle 5.png"]
var itemHandler = 0;
const intervalId = setInterval(() => {
    changepicture(images,smallImageContainer1,smallImageContainer2,bigContainer);
    changepicture(images2,smallImageContainer4,smallImageContainer3,bigContainer2);
    
  }, 3000);


var changepicture =(images,sm1,sm2,bg)=>{
    smallImageContainer1[0].style.width="20%"
    
    if(itemHandler==images.length-1){
        sm2[0].children[0].src=images[itemHandler-1]//1
        bg[0].children[0].src=images[itemHandler]//2
        sm1[0].children[0].src=images[0]//0
        
        itemHandler=0;
    }
    else if(itemHandler==0){
        sm2[0].children[0].src=images[images.length-1]//2
        bg[0].children[0].src=images[itemHandler]//0
        sm1[0].children[0].src=images[itemHandler+1]//1
        itemHandler++;
        console.log(images[images.length-1].src)
    }
    else{
        sm2[0].children[0].src=images[itemHandler-1]//0
        bg[0].children[0].src=images[itemHandler]//1
        sm1[0].children[0].src=images[itemHandler+1]//2
        itemHandler++;
    }

}