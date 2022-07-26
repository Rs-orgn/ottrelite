const home = document.getElementById("hm");
const yt = document.getElementById("yt");
const ot = document.getElementById("ot");
const cont = document.getElementById("cont");
const menu = document.getElementById("Menu");
const menuBut = document.getElementById("MenuButs");
const red = document.getElementById("Reddit");

//other vars
let opened = true;



//event listeners
cont.onclick = ()=>{
    alert("you are on the same page")
}
yt.addEventListener("click", ()=>{
  let prop = window.confirm("This directly leads you to the YT page, continue?");
  if(prop){
      window.location = "https://www.google.com/url?sa=t&source=web&rct=j&url=https://www.youtube.com/channel/UCCeTm3l8MAiGDP2biWm5FOw/about&ved=2ahUKEwj3q_PMvcv4AhXsR2wGHcYXC7oQjjh6BAgGEAE&usg=AOvVaw0dC2gFlCXcaneK4p58hPzH/Videos";
  }
  else{
      alert("You canceled the request");
  }
  
});

home.addEventListener("click", ()=>{
    self.location = "/-TEAM RS WEBSITE-/Main Page/main.html";
});

menuBut.addEventListener("click", ()=>{
    if(opened){
        opened = false;
        Close()
    }
    else{
        opened = true;
        Open()
    }
    
});

ot.onclick = () => {
    self.location = "/-TEAM RS WEBSITE-/OurTeam/teamStats.html"
}


//functions
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

