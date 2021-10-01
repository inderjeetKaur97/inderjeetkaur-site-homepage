

//------------------------code to check if page is reloaded----------------------- 
// if yes redirect to home page as visibility property was used to hide home rather than display:none
if (performance.navigation.type == performance.navigation.TYPE_RELOAD){
  location.href="/"
}

//--------------------code to load logo and hide bg-----------
hideBgLoad();
function hideBgLoad(){
    bgLoad=document.querySelector(".bg-load")
    showHome = document.querySelector(".hide-home")
    setTimeout(() => {
    bgLoad.classList.add("hide-bg-load") //.hide-bg-logo class present in logoAni.css file
    showHome.classList.remove("hide-home");  
    // showHome.style.display=`inline` ;  
    body=document.getElementsByTagName("body")[0]
    body.style.overflowY=`scroll`
    }, 4500);
}


//--------------------code to hide and show navbar on scrolling-----------
navBar =document.querySelector(".nav-bar")
logoHome = document.querySelector(".logo-home");                  //Get .logo-home div 
logoSvg = document.querySelector(".logo-home").firstElementChild; //Get svg in .logo-home class
let oldValue = 0
let newValue = 0
window.addEventListener('scroll', (e) => {
  newValue = window.pageYOffset;
  if(oldValue&&newValue==0){
    logoSvg.classList.remove("nav-bar-logo-lock");     
    logoHome.classList.remove("nav-bar-logo-lock");
    navBar.classList.remove("nav-bar-lock")
      console.log("upar")
  }
  else if (oldValue < newValue) {
      //Scroll down code
     navBar.classList.remove("nav-bar-show")
      navBar.classList.add("nav-bar-hide")

  } else if (oldValue > newValue) {
     //Scroll up code
     navBar.classList.remove("nav-bar-hide")
     navBar.classList.add("nav-bar-show")

      //Add to .logo-home and .logo-home svg same class . 
      //In which one accepts height and other the transform property 
     logoSvg.classList.add("nav-bar-logo-lock");       
     logoHome.classList.add("nav-bar-logo-lock");  
     navBar.classList.add("nav-bar-lock")
     
  }
  oldValue = newValue;
});

//-----------------typing effect above name on homepage-------------
var typed2 = new Typed('.typed-effect-home', {
  strings: ['Hola! Welcome to my website ✿','My name is -->',"I am passionate about web apps ❤","Are you looking to hire a web developer?","Explore my website to see my work","or Email me to get in touch ★"],
  typeSpeed: 50,
  backSpeed: 50,
  fadeOut: true,
  loop: true
});


// experience section javascript

rightDiv1=document.querySelector(".right-div1")
rightDiv2=document.querySelector(".right-div2")
rightDiv3=document.querySelector(".right-div3")
rightDiv4=document.querySelector(".right-div4")
rightDiv5=document.querySelector(".right-div5")

leftDiv1=document.querySelector(".left-div1")
leftDiv2=document.querySelector(".left-div2")
leftDiv3=document.querySelector(".left-div3")
leftDiv4=document.querySelector(".left-div4")
leftDiv5=document.querySelector(".left-div5")

function showExp(rightHide,rightShow){
rightHide.classList.remove("right-div-show")
rightHide.classList.add("right-div-hide")
rightShow.classList.remove("right-div-hide")
rightShow.classList.add("right-div-show")

}
leftDiv1.addEventListener("click",()=>{
  for(i=1;i<=6;i++){
    leftDiv1.classList.add("item-div-active")
    onDivRightCheck=document.querySelector(`.right-div${i}`);
    onDivLeftCheck=document.querySelector(`.left-div${i}`);
    onDivRight=onDivRightCheck.classList.contains("right-div-show")
    onDivLeft=onDivLeftCheck.classList.contains("item-div-active")
    if(onDivLeft || onDivRight==true)   {
      onDivLeftCheck.classList.remove("item-div-active")
      leftDiv1.classList.add("item-div-active")
    showExp(onDivRightCheck,rightDiv1)
    }
  }
 
})
leftDiv2.addEventListener("click",()=>{
  for(i=1;i<=6;i++){
    leftDiv2.classList.add("item-div-active")
    onDivRightCheck=document.querySelector(`.right-div${i}`);
    onDivLeftCheck=document.querySelector(`.left-div${i}`);
    onDivRight=onDivRightCheck.classList.contains("right-div-show")
    onDivLeft=onDivLeftCheck.classList.contains("item-div-active")
    if(onDivLeft && onDivRight==true)   {
      onDivLeftCheck.classList.remove("item-div-active")
    showExp(onDivRightCheck,rightDiv2)
    }
  }
 
})
leftDiv3.addEventListener("click",()=>{
  for(i=1;i<=6;i++){
    leftDiv3.classList.add("item-div-active")
    onDivRightCheck=document.querySelector(`.right-div${i}`);
    onDivLeftCheck=document.querySelector(`.left-div${i}`);
    onDivRight=onDivRightCheck.classList.contains("right-div-show")
    onDivLeft=onDivLeftCheck.classList.contains("item-div-active")
    if(onDivLeft && onDivRight==true)   {
      onDivLeftCheck.classList.remove("item-div-active")
    showExp(onDivRightCheck,rightDiv3)
    }
  }
 
})
leftDiv4.addEventListener("click",()=>{
  for(i=1;i<=6;i++){
    leftDiv4.classList.add("item-div-active")
    onDivRightCheck=document.querySelector(`.right-div${i}`);
    onDivLeftCheck=document.querySelector(`.left-div${i}`);
    onDivRight=onDivRightCheck.classList.contains("right-div-show")
    onDivLeft=onDivLeftCheck.classList.contains("item-div-active")
    if(onDivLeft && onDivRight==true)   {
      onDivLeftCheck.classList.remove("item-div-active")
    showExp(onDivRightCheck,rightDiv4)
    }
  }
 
})
leftDiv5.addEventListener("click",()=>{
  for(i=1;i<=6;i++){
    leftDiv5.classList.add("item-div-active")
    onDivRightCheck=document.querySelector(`.right-div${i}`);
    onDivLeftCheck=document.querySelector(`.left-div${i}`);
    onDivRight=onDivRightCheck.classList.contains("right-div-show")
    onDivLeft=onDivLeftCheck.classList.contains("item-div-active")
    if(onDivLeft && onDivRight==true)   {
      onDivLeftCheck.classList.remove("item-div-active")
    showExp(onDivRightCheck,rightDiv5)
    }
  }
 
})

  //email window open
var email = document.querySelector(".email-btn")
email.addEventListener("click",()=>{
    window.location = "mailto:inderjeetkaur.1597@gmail.com";

})
