

//taking them out from DOM
const HOME = document.getElementById("hm");
const YOUTUBE = document.getElementById("yt");
const OURTEAM = document.getElementById("ot");
const CONTACT = document.getElementById("cont");
const MENU = document.getElementById("Menu");
const MENUBUT = document.getElementById("MenuButs");

//social medias
//darkfire's
const REDDITOFDARKFIRE = document.getElementById("RedditOfDarkfire");
//Divine's
const REDDITOFDIVINE = document.getElementById("RedditOfDivine");
const REDDITOFLEGEND = document.getElementById("RedditOfLegend");
const REDDITOFMAFIA = document.getElementById("mafiaReddit");
//Other vars
let opened = true;

//event listeners
YOUTUBE.addEventListener("click", ()=>{
  let prop = window.confirm("This directly leads you to the YT page, continue?");
  if(prop){
      window.location = "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.youtube.com/channel/UCCeTm3l8MAiGDP2biWm5FOw/about&ved=2ahUKEwj3q_PMvcv4AhXsR2wGHcYXC7oQjjh6BAgGEAE&usg=AOvVaw0dC2gFlCXcaneK4p58hPzH/Videos";
  }
  else{
      alert("You canceled the request");
  }
  
});

HOME.addEventListener("click", ()=>{
    self.location = "/Main Page/main.html";
});

REDDITOFDARKFIRE.addEventListener("click", ()=>{
    let prop = window.confirm("This directly leads you to the reddit account (opens the app on mobile), continue?")
    if(prop){
      window.location = "";
    }
    else{
      alert("You canceled the request");
  }
  
});

REDDITOFDIVINE.addEventListener("click", () => {
    let prop = window.confirm("This directly leads you to the reddit account (opens the app on mobile), continue?")
  if(prop){
      window.location = "https://www.reddit.com/u/Rs_divine?utm_medium=android_app&utm_source=share";
  }
  else{
      alert("You canceled the request");
  }
});

REDDITOFLEGEND.addEventListener("click", ()=>{
    let prop = window.confirm("This directly leads you to the reddit account (opens the app on mobile), continue?")
    if(prop){
      window.location = "";
    }
    else{
      alert("You canceled the request");
  }
  
});

/*REDDITOFMAFIA.addEventListener("click", () => {
    let prop = window.confirm("This directly leads you to the reddit account (opens the app on mobile), continue?")
    if (prop) {
        window.location = "";
    }
    else {
        alert("You canceled the request");
    }

});*/

OURTEAM.onclick = ()=>{
    alert("you are already on the website");
}

MENUBUT.addEventListener("click", ()=>{
    if(opened){
        opened = false;
        Close()
    }
    else{
        opened = true;
        Open()
    }
    
});
CONTACT.onclick = ()=> {
    self.location = "/Contact/contact.html"
}


//functions
function Close(){
    MENU.style.position = "absolute";
    MENU.style.visibility = "hidden";
    MENU.style.opacity = 0;
}

function Open(){
    MENU.style.position = "relative";
    MENU.style.visibility = "visible";
    MENU.style.opacity = 1;
}
