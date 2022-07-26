const home = document.getElementById("hm");
const yt = document.getElementById("yt");
const ot = document.getElementById("ot");
const cont = document.getElementById("cont");
const menu = document.getElementById("Menu");
const menuBut = document.getElementById("MenuButs");
const android = document.getElementById("DownloadGarena")

//extraction (the social media hyperlinks)
const fb = document.getElementById("fb");
const tw = document.getElementById("tw");
const ig = document.getElementById("ig");
const red = document.getElementById("Reddit");
//debug




//other vars
let opened = true;



//event listeners
yt.onclick = ()=>{
  let prop1 = window.confirm("This directly leads you to the YT page, continue?")
  if(prop1){
      window.location = "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.youtube.com/channel/UCCeTm3l8MAiGDP2biWm5FOw/about&ved=2ahUKEwj3q_PMvcv4AhXsR2wGHcYXC7oQjjh6BAgGEAE&usg=AOvVaw0dC2gFlCXcaneK4p58hPzH/Videos";
  }
  else{
      alert("You canceled the request");
  }
  
}

ot.onclick = ()=>{
    self.location = "/OurTeam/teamStats.html"
}

red.onclick = ()=>{
    let prop2 = window.confirm("This directly leads you to the subreddit (opens the app on mobile), continue?")
    if(prop2){
      window.location = "https://www.reddit.com/r/Rsesports_submission?utm_medium=android_app&utm_source=share";
    }
    else{
      alert("You canceled the request");
  }
  
}

menuBut.onclick = ()=>{
    if(opened){
        opened = false;
        Close();
    }
    else{
        opened = true;
        Open();
    }
    
}

android.onclick =  ()=>{
    window.location = "https://play.google.com/store/apps/details?id=com.dts.freefiremax";
}


cont.onclick = ()=>{
    self.location = "/Contact/contact.html"
}

home.onclick = ()=>{
    alert("You are currently on the same page");
}

//open and close menu
function Close(){
    menu.style.position = "absolute";
    menu.style.visibility = "hidden";
    menu.style.opacity = 0;
}

function Open(){
    menu.style.position = "relative";
    menu.style.visibility = "visible";
    menu.style.opacity = 1;
}
