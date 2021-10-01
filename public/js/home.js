

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
    showHome.classList.remove("hide-home") ;  
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
  strings: ['Hola! Welcome to my website','My name is -->',"I am a full stack web developer","Want to hire one?","Explore my website for my projects and experience"],
  typeSpeed: 50,
  backSpeed: 50,
  fadeOut: true,
  loop: true
});

